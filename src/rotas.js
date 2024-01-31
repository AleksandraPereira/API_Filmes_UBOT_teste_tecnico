const express = require('express');
const { cadastroFilme } = require('../controladores/filmes');
const { listarFilmes } = require('../controladores/filmes');
const {atualizarFilme} = require('../controladores/filmes');
const { deletarFilme } = require('../controladores/deletar');


const rotas = express();

rotas.post('/criar', cadastroFilme);
rotas.get('/listar', listarFilmes); 
rotas.get('/filmes/avaliar', avaliarFilme);
rotas.put('/atualizar/filmes/:id', atualizarFilme);
rotas.delete('/filmes/:id', deletarFilme);

module.exports = rotas