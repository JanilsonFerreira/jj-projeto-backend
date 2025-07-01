const express = require('express');
const RotasPublicas = require('./routes/RotasPublicas.js');
const RotasPrivadas = require('./routes/RotasPrivadas.js');
const host = 'localhost';
const port = 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(RotasPublicas);
app.use(RotasPrivadas);

app.get('/', (request, response) => {
  response.send('Olá, mundo!');
});

app.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
