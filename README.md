# Monomyto
Challenge Backend

### Tecnologias utilizadas
- NodeJS
- Typescript
- Vitest
- SOLID

### Command line
1. Iniciar um container com postgres
```sh
    docker run --name postgresql -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
```
2. Iniciar o servidor HTTP NodeJS
```sh
    yarn dev
```
3. Inserir seeds no banco de dados
```sh
    yarn test
```
4. Iniciar os testes
```sh
    yarn test
```