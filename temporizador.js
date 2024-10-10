// Contagem regressiva

function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const tempoRestante = dataFutura - agora;

    if(tempoRestante <= 0) {
        return {dias: 0, horas: 0, minutos: 0, segundos: 0, tempoRestante: 0};
    }

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
    return {dias, horas, minutos, segundos, tempoRestante};
}

function atualizarTemporizador(dataFutura) {
    const tempo = calcularTempoRestante(dataFutura);
    console.clear();
    console.log(`${tempo.dias} dias, ${tempo.horas} horas, ${tempo.minutos} minutos e ${tempo.segundos} segundos restantes.`);

    if(tempo.tempoRestante <= 0) {
        clearInterval(intervalo);
        console.log('Acabou!');
    }
}

const dataFutura = new Date(Date.now() + 1 * 60 * 1000);
const intervalo = setInterval(() => atualizarTemporizador(dataFutura), 1000);
