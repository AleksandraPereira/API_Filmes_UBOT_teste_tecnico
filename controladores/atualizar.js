const atualizarFilme = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, categoria, produtora, data_publicacao } = req.body;

        const query = `
            UPDATE filmes
            SET titulo = $1, categoria = $2, produtora = $3, data_publicacao = $4
            WHERE id = $5
        `;

        const { rowCount } = await pool.query(query, [titulo, categoria, produtora, data_publicacao, id]);

        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'Filme não encontrado.' });
        }

        return res.json({ mensagem: 'Filme atualizado com sucesso.' });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Ops! Houve alguma falha na matrix.' });
    }
}

module.exports = {
    atualizarFilme,
}
