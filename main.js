var div = document.getElementById('btn-one');
var display = 0;

function buttonOne() {
  if (display == 1) {
    div.style.display = 'block';
    display = 0;
  }
  else {
    div.style.display = 'none';
    display = 1;
  }
}

var divx = document.getElementById('btn-two');
var display = 0;

function buttonTwo() {
  if (display == 1) {
    divx.style.display = 'block';
    display = 0;
  }
  else {
    divx.style.display = 'none';
    display = 1;
  }
}



     // Obtém o elemento de áudio
     var audio = document.getElementById("backgroundMusic");

     // Configura o volume máximo (de 0 a 1)
     audio.volume = 1;

     // Aguarda o primeiro clique na página para iniciar a reprodução
     document.addEventListener("click", function() {
       // Inicia a reprodução
       audio.play();

       // Remove o ouvinte de evento para evitar reprodução contínua ao clicar novamente
       document.removeEventListener("click", arguments.callee);
     });
