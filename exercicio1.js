// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const constanteEl = document.querySelector('#constante');
const massa1El = document.querySelector('#massa1');
const massa2El = document.querySelector('#massa2');
const distanciaEl = document.querySelector('#distancia');
const resultadoEl = document.querySelector('#resultado');

const calcularEl = document.querySelector('#calcular');



let calcular = () => {
    const G = constanteEl.value;
    const M1 = massa1El.value;
    const M2 = massa2El.value;
    const d = distanciaEl.value;

    const F = G*M1*M2/(d**2);

    resultadoEl.value = F;
    
} 

calcularEl.addEventListener('click', calcular);