import clicouAddTime from "./clicouAddTime.js";
import  Elementos  from "./elementos.js";
import contagem from "./contagem.js";
import {clicouPlay,clicouPause} from "./clicouPlayPause.js";




function clicouTirarSom(){
    Elementos.buttonSomOff.classList.remove('hide');
    Elementos.buttonSomOn.classList.add('hide');
}

function clicouStop(){
    location.reload();

    //Elementos.buttonStop.classList.add('hide');
   // Elementos.buttonAddTime.classList.remove('hide');
   // Elementos.divMinutos.textContent = '00';
   // Elementos.divSegundos.textContent = '00';
}

function clicouVoltarSom(){
    Elementos.buttonSomOff.classList.add('hide');
    Elementos.buttonSomOn.classList.remove('hide');
}

Elementos.buttonSomOff.addEventListener('click',clicouVoltarSom)
Elementos.buttonSomOn.addEventListener('click',clicouTirarSom);
Elementos.buttonPlay.addEventListener('click',clicouPlay);
Elementos.buttonPause.addEventListener('click',clicouPause);
Elementos.buttonAddTime.addEventListener('click',clicouAddTime);
Elementos.buttonStop.addEventListener('click',clicouStop);