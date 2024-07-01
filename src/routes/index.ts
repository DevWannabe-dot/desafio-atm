import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {
    return res.status(405).send({ error: 'Método GET não autorizado para a operação de saque. Acesse a interface segura do banco via POST.' });
});

router.post('/api/saque', (req, res) => {
    const { valor } = req.body;

    if(typeof valor !== 'number' || valor <= 0) return res.status(400).send({ error: 'Valor inválido inserido.' });

    const { resultado, observacao } = calcularSaque(valor);

    if(observacao[0] != ''){
        res.json({ observacao });
    } else {
        res.json({ resultado });
    }
});

function calcularSaque(valor: number)
{
    const cedulas = [100, 50, 20, 10, 5, 2];
    const resultado: {[key: number]: number} = {};
    const observacao: string[] = [];

    for(const cedula of cedulas){
        resultado[cedula] = Math.floor(valor / cedula); // Procedimento de 'round' seguro para evitar passar do valor inserido
        valor %= cedula;
    }

    if(valor > 0){
        observacao.push("Para completar o saque, insira:");
        observacao.push("- 2 notas de 2, para receber 1 de 5; ou");
        observacao.push("- 1 nota de 5, para receber 3 de 2.");
        observacao.push("Ou tente novamente com outro valor.");
    }

    return { resultado, observacao };
}
