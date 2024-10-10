document.getElementById('titulo').innerText = "Texto do título alterado!";

const itens = document.querySelectorAll('#lista li');
itens.forEach(item => {
    item.classList.add('destaque');
});

const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(paragrafo => {
    paragrafo.classList.add('paragrafo2');
})

document.getElementById('meu-botao').innerText = "Texto do botão alterado pelo JS!";
