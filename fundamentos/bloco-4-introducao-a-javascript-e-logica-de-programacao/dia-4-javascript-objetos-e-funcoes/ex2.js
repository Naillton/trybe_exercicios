let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};
//usando uma varivel para o codigo nao ficar muito extenso no console.log
let livro = leitor.livrosFavoritos[0];

console.log("O livro favorito de "+leitor.nome+" "+leitor.sobrenome+" se chama "+livro.titulo);
//com o .push adcionamos um novo objeto no array
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco'
});

console.log(leitor.nome+" tem "+leitor.livrosFavoritos.length+" livros favoritos");


