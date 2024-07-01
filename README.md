# Desafio Técnico Morada.ai: Caixa Eletrônico API

## Documentação
### Descrição
Esta API simula o funcionamento de um caixa eletrônico. Ela recebe um valor de saque desejado e retorna a quantidade de cédulas de cada valor necessárias para compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas consideradas são: 100, 50, 20, 10, 5 e 2.

## Instruções
1. Instale as dependências necessárias<br>
```
npm init
```
2. Execute o projeto em modo de produção<br>
```
npm start
```

## Principais desafios
No decorrer do projeto, surgiu a dúvida de como formatar a saída JSON corretamente, e na ordem decrescente da maior cédula. Tentou-se utilizar `JSON.stringify` e o `res.json`, nativo do Express, sem sucesso com relação à ordem dos dados.
<br><br>
Além disso, um desafio conceitualmente trivial em divisão euclideana: 2 e 5 são primos entre si, o que implica a possibilidade de sacar qualquer valor inteiro positivo por combinações lineares dos coeficientes (ex: depositar 2 vezes 2, sacar 1 vez 5 => sacar R$1). A dificuldade verdadeira surge na implementação dessa solução, que se daria por meio de um salvamento do registro de depósito (banco de dados) para, em seguida, efetuar o saque. Nesse sentido, a saída foi alertar ao usuário (via JSON) as possíveis medidas a serem tomadas.

## Critérios para validação

- [x] **Tratamento de Entradas Inválidas**: Garantir que o valor inserido é um número inteiro positivo.
- [x] **Eficiência na Distribuição de Cédulas**: Implementar uma lógica que sempre retorne a menor quantidade de cédulas possível.
- [x] **Erros e Exceções**: Lidar com cenários onde o valor de saque não pode ser atendido com as cédulas disponíveis.
- [x] **Documentação e Testes**: Garantir que o código esteja bem documentado e com testes adequados para validar a lógica de saque.
