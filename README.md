
# Projeto de Estágio

Este projeto tem como objetivo testar a funçãod de uma rest api, com os métodos CRUD (CREATE, READ, UPDATE e DELETE), este projeto usa servidor MySQL.

# Configuração:

1° Crie um servidor local MySQL, você pode usar o software XAMPP ou outro similar e utilize o arquivo na pasta "src/sql/database.sql" para criar um servidor que funcione de acordo com o software.

OBS: Se for necessário configure os dados do seu servidor no arquivo na pasta "src/database.ts" passando as seguintes informações (HOST, USER, PASSWORD e DATABASE).

2° Dentro da pasta do projeto, abra um terminal e execute o comando | npm run construct | e depois execute | npm run start-servidor | para executar um servidor local na porta 3000.

# Execução

3° Para realizar os testes de requisições, poderá utilizar software como o Imsomnia ou Postman. Pode também utilizar comandos como para realizar testes:

Get: npm run get-test
Post: npm run post-test
Update: npm run put-test
Delete: npm run delete-test

# Utilizando Software

- Execute o GET na url: http://localhost:3000/posts

- Execute o POST na url: http://localhost:3000/posts | uilizando o json de base abaixo

{
    "nome": "J. Daniel",
    "descricao": "Ultra",
    "valor": "123"
}

- Execute o DELETE na url: http://localhost:3000/posts/1 | id específico.Ex(1) 

- Execute o PUT na url: http://localhost:3000/posts/1 | id específico, utilizando o arquivo json abaixo:

{
    "nome": "J. Daniel",
    "descricao": "Medium",
    "valor": "012"
}

###############################################

