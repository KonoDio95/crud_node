// Faz o 'import' das dependências
import mysql from 'mysql2';

/* const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); */

// Cria uma conexão com um banco de dados MySQL
const connection = mysql.createConnection({
    // O host do banco de dados
    host: 'localhost',
    // O usuário para se conectar ao banco de dados
    user: 'root',
    // A senha para se conectar ao banco de dados
    password: 'Admin@123',
    // O nome do banco de dados para se conectar
    database: 'lojadb'
});

// Tenta conectar ao banco de dados
connection.connect((error) => {
    // Se houver um erro durante a conexão ele será mostrado
    if(error) throw error;
    // Imprime uma mensagem se não houver erros
    console.log(`Conectado ao banco de dados: lojadb } `);
});

export default connection;