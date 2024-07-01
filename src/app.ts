import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import { router } from './routes/index';

/**
 * Criação do app
 */
export const app = express();

/**
 * Configuração dos middlewares
 */
app.use(express.json());
app.use(cors()); // Liberar portas para aplicações externas
app.use(logger('dev'));

/**
 * Configuração para formatar JSON indentado no Express (stringify não deu certo)
 */
app.set('json spaces', 2);

/**
 * Integra o endpoint na aplicação
 */
app.use('/', router);