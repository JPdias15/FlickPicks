let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let value = Math.ceil(Math.random() * 3600);

function girar() {
  wheel.style.transform = "rotate(" + value + "deg)";
  value += Math.ceil(Math.random() * 3600);
}

function exibirPopUp() {
  console.log("deu certo");

  setTimeout(function () {
    container = document.getElementById("container").style.display = "none";
    title_roleta = document.querySelector(".title_roleta").style.display = "none";
    spin = document.querySelector(".spinBtn").style.display = "none";
    
    var imagens = [
      "img/poster1.jpg",
      "img/poster2.jpg",
      "img/poster3.jpg",
      "img/poster4.jpg",
      "img/poster5.jpg",
      "img/poster6.jpg",
      "img/poster7.jpg",
      "img/poster8.jpg",
    ];
    var titulo = [
      "Gato de botas",
      "007 - Operação Skyfall",
      "Clube da Luta",
      "Hush: A Morte Ouve",
      "Maze Runner: A Cura Mortal",
      "Guardiões da Galáxia Vol. 2",
      "Batman: O Cavaleiro das Trevas",
      "Pânico 6",
    ];

    var sinopse = [
      "Sinopse: O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele já gastou oito de suas nove vidas. Ele então parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.",
      "Sinopse: Após uma missão mal sucedida de James Bond, a identidade de agentes secretos é revelada e o M16, atacado. Ajudado por um agente de campo, Bond deverá seguir a trilha de Silva, um homem que habita o passado de M e que tem contas a acertar.",
      "Sinopse: Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.",
      "Sinopse: Uma escritora muda prefere a solidão e vive em região isolada numa floresta. A tranquilidade dá lugar ao terror, quando a casa da escritora é invadida por um serial killer e ela tem de lutar pela vida, sem ter como pedir ajuda.",
      "Sinopse: Thomas parte em uma missão para encontrar a cura de uma doença mortal e descobre que os planos da C.R.U.E.L podem trazer consequências catastróficas para a humanidade.",
      "Sinopse: Os Guardiões da Galáxia lutam para manter sua nova família unida enquanto desvendam os mistérios sobre o verdadeiro pai de Peter Quill.",
      "Sinopse: Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso, conhecido como Coringa, pretende testar o justiceiro e mergulhar a cidade em um verdadeiro caos.",
      "Sinopse: Sam, Tara, Chad e Mindy, os quatro sobreviventes do massacre realizado pelo Ghostface, decidem deixar Woodsboro para trás em busca de um novo começo em Nova York. Mas não demora muito para eles se tornarem alvo de um novo serial killer.",
    ];

    // Escolhe uma imagem e texto aleatórios
    var indice = Math.floor(Math.random() * imagens.length);
    var imagemAleatoria = imagens[indice];
    var tituloAleatorio = titulo[indice];
    var sinopseAleatorio = sinopse[indice];

    // Define a imagem e o texto no pop-up
    document.getElementById("imagemPopUp").src = imagemAleatoria;
    document.getElementById("tituloPopUp").textContent = tituloAleatorio;
    document.getElementById("sinopsePopUp").textContent =
      sinopseAleatorio;

    // Exibe o pop-up
    document.getElementById("popUpContainer").style.display = "block";
  }, 6000); // 10 segundos em milissegundos
}