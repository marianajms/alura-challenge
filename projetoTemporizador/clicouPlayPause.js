import Elementos from "./elementos.js";
import contagem from "./contagem.js";


function clicouPlay(){
    Elementos.buttonPlay.classList.add('hide');
    Elementos.buttonPause.classList.remove('hide');
    Elementos.buttonStop.classList.remove('hide')
    Elementos.buttonAddTime.classList.add('hide');
    contagem();
}


function clicouPause(){
    Elementos.buttonPlay.classList.remove('hide');
    Elementos.buttonPause.classList.add('hide');
}

export {clicouPlay,clicouPause};
