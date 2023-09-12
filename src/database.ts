import { createPool } from 'mysql2/promise';

export async function connect() {

    const connection = await createPool({
        host: 'localhost', //Endereço do server mysql
        user: 'root', //Nome de usuário
        password: '', //Senha de usuário
        database: 'backend', //Nome da base de dados
        connectionLimit: 10
    });    
    return connection;
}