const listarFilmes = async (req, res) => {
    try {
        const query = `
            select f.id, f.titulo, f.categoria, f.produtora, f.data_publicacao,
            f.filme_id, f.titulo as filme_titulo, f.produtora as filme_produtora
            from filmes f left join filmes f
            on f.filme_id = f.id
        `
        const {rows} = await pool.query(query);

        const filmes = rows.map(filmes => {
            const{filme_id, filme_titulo, filme_produtora, ...dadosFilme} = filmes
            return {
                ...dadosFilme
            }
        })
        
        return res.json(filmes);
    } catch (error) {
        return res.status(500).json({mensagem: 'Ops! Houve alguma falha na matrix.'});
    }
}

module.exports = {
    listarFilmes,
}