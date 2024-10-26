const curtiram = [];
const botaoEsquecer = document.getElementById('esquecer');

document.getElementById('curtir').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    if(nome && !curtiram.includes(nome)) {
        curtiram.push(nome);
        localStorage.setItem('curtidas', JSON.stringify(curtiram));
        atualizarLista();
    }
    document.getElementById('nome').value = '';
});

botaoEsquecer.addEventListener('click', () => {
    curtiram.length = 0;
    localStorage.clear();
    atualizarLista();
});

const atualizarLista = () => {
    const lista = document.getElementById('lista');
    const total = curtiram.length;

    if(total === 0) {
        lista.textContent = 'Ninguém curtiu.';
    }
    else if(total === 1) {
        lista.textContent = `${curtiram[0]} curtiu.`;
    }
    else if(total === 2) {
        lista.textContent = `${curtiram[0]} e ${curtiram[1]} curtiram.`;
    }
    else {
        lista.textContent = `${curtiram[0]}, ${curtiram[1]} e mais ${total - 2} pessoas curtiram.`;
    }
};
