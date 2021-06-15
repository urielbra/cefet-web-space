// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const botoes = document.querySelectorAll('.botao-expandir-retrair');

const toggleInfo = (ev) => {
    const buttonEl = ev.currentTarget;
    const parentEl = buttonEl.parentNode;
    parentEl.classList.toggle('expandido')
    buttonEl.innerHTML = parentEl.classList.contains('expandido') ? '-' : '+';
}

botoes.forEach(buttonEl => {
    buttonEl.addEventListener('click', toggleInfo)
});