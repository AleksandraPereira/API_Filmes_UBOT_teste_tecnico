const pool = require('../conexao');

const cadastroFilme = async (req, res) => {
    const { nome, produtora } = req.body

    if (!nome) {
        return res.status(404).json({mensagem: 'Hey! Acho que você esqueceu de preencher aqui!'});
}

try{
    const query = 'insert into filmes (nome, produtora) values ($1, $2) returning *'
    const {rows} = await pool.query(query, [nome, produtora]);

    return res.status(201).json(rows[0]);

} catch (error) {
    return res.status(500).json({mensagem: 'Ops! Houve alguma falha na matrix.'});
 }

}

module.exports = {
    cadastroFilme,
}