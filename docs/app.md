# Anime Menager

### Descrição

App estilo netflix onde eu possa centralizar diversos animes, separados por categoria

### Dominion

Animes

### Features

- Listar os animes em sessões de categorias
- Adicionar fontes de conteúdo
- Filtrar episodios por nome do anime

### Como:

### Feature

- Listar os animes em sessões de categorias

### Como vou implementar:

GET: retornar lista de episodios

response:

```js
[
  {
    animeName: "Naruto",
    episodio: "Naruto ep1",
    idVideo: "erqwreqw",
    cover: "link,img",
    link: "http://youtube/naruto/ep1",
    category: ["anime", "ação"],
  },
  {
    animeName: "Naruto",
    episodio: "Naruto ep2",
    cover: "link,img",
    link: "http://youtube/naruto/ep2",
    category: ["anime", "ação"],
  },
];
```

GET: retrona lista de eps baseado em um parametro enviado pelo client do nome do anime