const menuToggle = document.querySelector('.menu-toggle');
const menuRotate = document.querySelector('#menu')
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    if (!nav.classList.contains('active')) {
        //não tem active
        nav.classList.add('active');
        nav.classList.add('fade-in');
        menuRotate.classList.add('giro2');
        menuRotate.classList.remove('giro');
        nav.classList.remove('fade-out');
    } else {
        //tem active
        menuRotate.classList.add('giro');
        nav.classList.add('fade-out');
        nav.classList.remove('fade-in');
        menuRotate.classList.remove('giro2');
        setTimeout(function () {
            nav.classList.remove('active');
        }, 299);
    }
});

function selecionarImagem() {
    var select = document.getElementById("imagem-selecionada");
    var imagemSelecionada = select.options[select.selectedIndex].value;
    document.getElementById("imagem-preview").src = imagemSelecionada;
} 
