const livros = [
    {titulo: 'Dom Casmurro', autor:'Machado de Assis', quantidade: 5},
    {titulo: '1984', autor: 'George Orwell', quantidade: 3},
    {titulo: 'Corpos Secos: Um romance', autor: 'Luisa Geisler', quantidade: 1},
    {titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', quantidade: 1}
];

function adicionarLivro(titulo, autor, quantidade) {
    livros.push({
        titulo,
        autor,
        quantidade
    })
}
adicionarLivro('Código Limpo', 'Tio Bob', 18);
adicionarLivro('O Alquimista', 'Paulo Coelho', 13);
console.log('Livros no estoque: ',livros);

function removerLivro(titulo) {
    const livroExistente = !!livros.find(livro => livro.titulo === titulo);
    
    if(livroExistente) {
        for(let indice = 0; indice < livros.length; indice++) {
            if(livros[indice].titulo === titulo) {
                console.log(`O livro ${titulo} foi removido do estoque.`);
                livros.splice(indice, 1);
                break;
            }
        }
    }
    else {
        console.log(`O livro ${titulo} não foi encontrado no estoque.`);
    }
}
removerLivro('O Alquimista')
console.log('Estoque da livraria atualizado: ', livros);

function atualizarQuantidade(titulo, novaQuantidade) {
    const livroExistente = !!livros.find(livro => livro.titulo === titulo);
    
    if(livroExistente) {
        for(let livro of livros) {
            if(livro.titulo === titulo) {
                livro.quantidade = novaQuantidade;
                console.log(`Quantidade do livro ${livro.titulo} atualizada para ${novaQuantidade} no estoque.`);
                break;
            }
        }
    }
    else {
        console.log(`O ${titulo} não foi encontrado no estoque.`);
    }
}
atualizarQuantidade('Dom Casmurro', 13);
console.log(livros);

function listarLivros() {
    if(livros.length === 0) {
        console.log('O estoque está vazio.');
    }
    else {
        console.log(`Estoque: ${livros.length} títulos.`);
        for(let livro of livros) {
            console.log(`
                Livro: ${livro.titulo}
                Autor: ${livro.autor}
                Quantidade: ${livro.quantidade}`)
        }
    }
}
listarLivros();
