const express = require('express');
const pool = require('./conexao');
const rotas = require('./rotas');

const app = express();


app.use(express.json());



app.use(rotas);

app.listen(3000);