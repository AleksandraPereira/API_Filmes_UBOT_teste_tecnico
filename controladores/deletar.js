const deletarFilme = async (req, res) => {
    try {
        const { id } = req.params;

        const query = `
            DELETE FROM filmes
            WHERE id = $1
        `;

        const { rowCount } = await pool.query(query, [id]);

        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'Filme não encontrado.' });
        }

        return res.json({ mensagem: 'Filme excluído com sucesso.' });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Ops! Houve alguma falha na matrix.' });
    }
}

module.exports = {
    deletarFilme,
}
