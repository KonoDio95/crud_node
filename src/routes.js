// Faz o 'import' das dependências
import express from 'express';

const router = express.Router();

// Importa várias funções do arquivo 'ClienteController.js'
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';


// Define as rotas, os respectivos métodos e quais funções devem ser usadas
router.get('/clientes', buscarTodos);
router.get('/cliente/:Id_Cliente', buscarUm);
router.post('/cliente', inserir);
router.put('/cliente/:Id_Cliente', alterar);
router.delete('/cliente/:Id_Cliente', excluir);

export { router as default};