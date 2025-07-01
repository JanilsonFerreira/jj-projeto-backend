# Projeto Backend - Digital Store

Projeto desenvolvido para o curso **Desenvolvedor Web Full Stack - Online - 2.0** da **Geração Tech**. A referência do projeto é a [oficial do curso](https://github.com/digitalcollegebr/projeto-backend) junto com as aulas.

A estrutura do projeto é de acordo com o que está descrito abaixo.

```
├── src/
│   ├── controllers/
│   │   ├── AuthController
│   │   ├── CategoriasController
│   │   ├── ProdutosController
│   │   └── UsuariosController
│   ├── models/
│   │   ├── CategoriaModel
│   │   ├── ProdutoModel
│   │   └── UsuarioModel
│   └── routes/
│       ├── CategoriasRotas
│       ├── ProdutosRotas
│       ├── RotasPrivadas
│       ├── RotasPublicas
│       └── UsuariosRotas
└── server.js
```

# Objetivo

Aplicar os conhecimentos aprendidos ao longo do curso, criando um backend baseado em **Express** e **Sequelize**. O backend não está 100% funcional porque foi feito manualmente usando apenas a documentação oficial do [Express](https://expressjs.com/pt-br/5x/api.html), [Sequelize](https://sequelize.org/docs/v6/category/core-concepts/), conteúdo das aulas e outras leituras sobre JavaScript. Não foi utilizada nenhuma forma de IA nesse projeto.

# Tecnologias

[Express](https://expressjs.com/)<br />
[Sequelize](https://sequelize.org/)<br />
[SQLite](https://sqlite.org/)<br />
[JWT](https://www.npmjs.com/package/jsonwebtoken)<br />
[Dotenv](https://www.npmjs.com/package/dotenv)<br />
[Nodemon](https://www.npmjs.com/package/nodemon)

# Como rodar o projeto

1. Clonar o repositório:
   ```bash
   git clone https://github.com/JanilsonFerreira/jj-projeto-backend.git
   ```

2. Instalar as dependências do Node.js:
   ```bash
   npm install
   ```

3. Emular o projeto localmente:
   ```bash
   npm run dev
   ```
   
4. Importar o seguinte arquivo no [Insomnia](https://insomnia.rest/):
   ```
   insomnia.yaml
   ```
5. Utilizar a rota LOGIN e obter o token enviando o login padrão como JSON:
   ```
   http://localhost:3000/login
   email: admin@teste.com
   password: ds123456
   ```
6. Usar o token como campo nos Headers em cada requisição que for testada da seguinte forma:
   ```
   token: TOKEN-OBTIDO-NO-LOGIN
   ```
**OBSERVAÇÕES:** A base de dados não é persistente pois roda apenas na memória (recurso do SQLite), reiniciar a emulação sempre irá re-criar a base de dados com os valores padrões (encontrados no código). Qualquer usuário criado pode acessar o API, pois a autenticação é básica. Todos os CRUDs funcionam, porém não há detecção de erros robusta. As formas de usar cada rota estão incluidas no arquivo "insomnia.yaml" e aparecem automaticamente quando o arquivo é importado no programa, servindo como documentação do API.

...

# Autores

**Janilson Ferreira Costa**<br />
**Jainara Pereira de Sousa**
