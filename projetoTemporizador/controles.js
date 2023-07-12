import Elementos from "./elementos.js";
import { tocarTecla, tocarMusicaBackground, pausarMusicaBackground } from "./sons.js";
//padrão factory
import {contagem, iniciarContagem} from "./contagem.js";


export default function controles(){
    
function clicouPlay(){
    tocarTecla();
    Elementos.buttonPlay.classList.add('hide');
    Elementos.buttonPause.classList.remove('hide');
    Elementos.buttonStop.classList.remove('hide')
    Elementos.buttonAddTime.classList.add('hide');
    contagem();
}

function clicouPause(){
    tocarTecla();
    Elementos.buttonPlay.classList.remove('hide');
    Elementos.buttonPause.classList.add('hide');
    window.clearInterval(iniciarContagem);
}

    function clicouParaTirarSom(){
        pausarMusicaBackground();
        Elementos.buttonSomOff.classList.remove('hide');
        Elementos.buttonSomOn.classList.add('hide');
    }

    function clicouParaVoltarSom(){
        tocarMusicaBackground();
        Elementos.buttonSomOff.classList.add('hide');
        Elementos.buttonSomOn.classList.remove('hide');
    }

    function clicouAddTime(){
        tocarTecla();
        let minutosInformados =  prompt('Informe quantos minutos o timer funcionará');
        if(minutosInformados!=null){
            Elementos.divMinutos.textContent = String(minutosInformados).padStart(2,0);
            Elementos.divSegundos.textContent = String(0).padStart(2,0);
            Elementos.buttonStop.classList.remove('hide');
            Elementos.buttonAddTime.classList.add('hide');
        }
    }

    function clicouStop(){
        tocarTecla();
        setTimeout(()=>location.reload(),60); //timer para dar tempo do som da tecla tocar
    }

    return {clicouStop,clicouParaTirarSom,clicouAddTime,clicouParaVoltarSom,clicouPlay,clicouPause};
}
