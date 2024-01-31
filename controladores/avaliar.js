const avaliarIndicarFilme = async (req, res) => {
    try {
        const queryFilmesNaoAvaliados = `
            SELECT f.id, f.titulo, f.categoria, f.produtora, f.data_publicacao
            FROM filmes f
            WHERE NOT EXISTS (
                SELECT 1
                FROM avaliacoes a
                WHERE a.filme_id = f.id
            )
            LIMIT 1
        `;

        const { rows: filmesNaoAvaliados } = await pool.query(queryFilmesNaoAvaliados);

        if (filmesNaoAvaliados.length === 0) {
            return res.status(404).json({ mensagem: 'Todos os filmes já foram avaliados.' });
        }

        const filmeIndicado = filmesNaoAvaliados[0];

        return res.json({ mensagem: 'Filme indicado para avaliação:', filme: filmeIndicado });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Ops! Houve alguma falha na matrix.' });
    }
}

module.exports = {
    avaliarIndicarFilme,
}
