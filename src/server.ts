import { app } from './app'

const port = process.env.PORT || 5000 // Operador "short circuit"
const server = app.listen(port, () => console.log(`Ready at port ${port}`))

/**
 * Receber sinal de desligamento
 */
process.on('SIGINT', () => {
    server.close();
    console.log('<Interruption signaled.>')
})