// Calculadora com 5 funções

const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const divisao = (num1, num2) => num1 / num2;
const multiplica = (num1, num2) => num1 * num2;

const resultado = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2}`, soma(num1, num2));
    console.log(`Subtração entre ${num1} e ${num2}`, subtracao(num1, num2));
    console.log(`Divisão entre ${num1} e ${num2}`, divisao(num1, num2));
    console.log(`Multiplicação entre ${num1} e ${num2}`, multiplica(num1, num2));
};
resultado(10, 2);
