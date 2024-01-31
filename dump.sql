CREATE TABLE produtoras (
  id serial primary key, 
  nome text not null,
  data_registro timestamp default now()
);


CREATE TABLE filmes (
  id serial primary key, 
  produtora_id integer references produtoras(id),
  titulo text not null,
  data_publicacao date not null, 
  avaliacao integer
);


CREATE TABLE categorias (
  id serial primary key,
  nome text not null
);

CREATE TABLE filme_categoria (
  filme_id integer references filmes(id),
  categoria_id integer references categorias(id)
);

CREATE TABLE comentarios (
  id serial primary key,
  descricao text not null,
  comentario_id integer references comentarios(id),
  filme_id integer references filmes(id)
);





