// require('dotenv').config({path:'config.env'});

// Faz o 'import' das dependências
import express from 'express';
import cors from 'cors';
import routes from './routes.js';

// Cria uma nova instância do servidor 
const server = express();

// Permite que o servidor aceite solicitações de outras origens.
server.use(cors());
express.urlencoded({extended:true});

// Rotas que começam com '/api'
server.use('/api', routes);

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    // Envia uma mensagem
    console.log(`Servidor rodando em http://localhost:3000`);
})
