function perceptronSimples (entradas, pesos, viés) {
    let soma = 0;
    for (let i =0; i <  entradas.length; i++) {
        soma += entradas[i] * pesos[i];
    }
}

//Para cada elemento, multiplicamos a entrada pelo peso correspondente e 
//adicionamos o resultado à variável soma.

//a variável soma acumula o resultado da multiplicação das entradas 
//pelos pesos correspondentes.

//A soma ponderada é uma operação matemática que envolve multiplicar cada elemento de um conjunto por um número associado (ou peso) 
//e depois somar todos esses produtos juntos.

//soma += entradas[i] * pesos[i];

// Testando a função com diferentes conjuntos de entradas e pesos
const entradas1 = [1, 0];
const pesos1 = [0.5, 0.5];
const viés1 = -0.5;
console.log(perceptronSimples(entradas1, pesos1, viés1)); // Saída: 1

const entradas2 = [0, 1];
const pesos2 = [0.5, 0.5];
const viés2 = -0.5;
console.log(perceptronSimples(entradas2, pesos2, viés2)); // Saída: 1

const entradas3 = [1, 1];
const pesos3 = [0.5, 0.5];
const viés3 = -0.5;
console.log(perceptronSimples(entradas3, pesos3, viés3)); // Saída: 1

const entradas4 = [0, 0];
const pesos4 = [0.5, 0.5];
const viés4 = -0.5;
console.log(perceptronSimples(entradas4, pesos4, viés4)); // Saída: 0