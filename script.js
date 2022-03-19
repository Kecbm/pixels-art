const cor = document.getElementById("color-palette");

cor.addEventListener('click', classSelecionada);

function classSelecionada(event) {
    const corSelecionada = document.getElementsByClassName('color selected')[0];
    corSelecionada.classList.remove('selected');
    event.target.classList.add('selected');
}

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener("click", function(event){
    const verificaSelecionado = document.getElementsByClassName('selected')[0];
    const box = event.target;
    const cor = window.getComputedStyle(verificaSelecionado).getPropertyValue('background-color');
    box.style.backgroundColor = cor;
})

const botao = document.getElementById("clear-board");

botao.addEventListener("click", function clear(event){
    const quadrado = document.getElementsByClassName("pixel");

    for (let i = 0; i < quadrado.length; i = i + 1){
        const box = quadrado[i];
        box.style.backgroundColor = "white";
    }
});
