# Liquor-Store
Loja de Bebidas

### Tecnologias utilizadas
- NodeJS
- Typescript
- Vitest
- SOLID
- Docker (database: postgresql)
- Prisma.io (ORM)
- Postman

### Command line
* Comando inicial para instalar todas as dependências do projeto (Yarn)
```sh
    yarn install
```
Após as dependências serem instaladas e o docker inicializado, os comandos seguintes devem ser aplicados:

1. Iniciar um container com postgres
```sh
    docker run --name postgresql -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
```
2. Iniciar o servidor HTTP NodeJS
```sh
    yarn dev
```
3. Realizar as migrations no banco de dados
```sh
    yarn prisma migrate dev --name "create all tables"
```
4. Inserir seeds no banco de dados
```sh
    yarn test
```
5. Iniciar os testes
```sh
    yarn test
```

###
Os testes de requisição e respostas da API estão salvas na raíz do projeto como uma coleção do postman
