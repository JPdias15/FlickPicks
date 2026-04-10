<?php
session_start();
include_once('../config.php');
include('../banco.php');
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="estilo_roleta.css" />

  <link rel="shortcut icon" href="img/png_logo.ico" type="image/x-icon">
  <title>FlickPicks - Roleta</title>
  <style>

  </style>
</head>

<body>
  <!--------------------------------------------------MENU-------------------------------------------------->
  <header>
    <div class="container_menu">
      <div class="logo">
        <a href="../sistema.php"><img src="img/png_logo.png" alt=""></a>
        <h1 class="title_rec">FLICKPICKS</h1>
      </div>
      <div class="social" id="social">
        <nav>
          <ul>
            <li><a href="../sistema.php"><img class="img_perfil" src="../img/volte.png" alt=""></a></li>
            <li><a href="../perfil.php"><img class="img_perfil" src="../img/perfil.png" alt=""></a></li>
            <li><a href="../sair.php"><img class="img_perfil" src="../img/log-out.png" alt=""></a></li>
          </ul>
        </nav>
        <button class="botao_menu menu-toggle"><img class="img_menu" id="menu" src="img/menu-aberto.png"
            alt=""></button>
      </div>
    </div>
  </header>
  <script src="../js/menu.js"></script>

  <!--------------------------------------------------CORPO-------------------------------------------------->

  <div class="geral">
    <h1 class="title_roleta">Gire a roleta para obter um filme qualquer!</h1>
    <div class="container">
      <div class="spinBtn" onclick="exibirPopUp(), girar()">Girar</div>
      <div id="container" class="wheel">
        <div class="number" style="--i: 1; --clr: #691923">
          <span><img src="img/png_logo.png" alt="" /></span>
        </div>
        <div class="number" style="--i: 2; --clr: #a32636">
          <span><img src="img/png_logo.png" alt="" /></span>
        </div>
        <div class="number" style="--i: 3; --clr: #691923">
          <span><img src="img/png_logo.png" alt="" /></span>
        </div>
        <div class="number" style="--i: 4; --clr: #a32636">
          <span><img src="img/png_logo.png" alt="" /></span>
        </div>
        <div class="number" style="--i: 5; --clr: #691923">
          <span><img src="img/png_logo.png" alt="" /></span>
        </div>
        <div class="number" style="--i: 6; --clr: #a32636">
          <span><img src="img/png_logo.png" alt="" /></span>
        </div>
        <div class="number" style="--i: 7; --clr: #691923">
          <span><img src="img/png_logo.png" alt="" /></span>
        </div>
        <div class="number" style="--i: 8; --clr: #a32636">
          <span><img src="img/png_logo.png" alt="" /></span>
        </div>
      </div>
    </div>
  </div>

  <div id="popUpContainer" style="display: none">
    <div id="popUpContent" class="popup">
      <img id="imagemPopUp" src="" alt="Imagem do Pop-up" />
      <br />
      <br />
      <p id="tituloPopUp"></p>
      <p id="sinopsePopUp"></p>
    </div>
  </div>
  <script src="../js/roleta.js"></script>
</body>

</html>