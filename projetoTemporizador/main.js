import  Elementos  from "./elementos.js";
import controles from "./controles.js";


const control = controles();

//padrão factory
Elementos.buttonSomOn.addEventListener('click',control.clicouParaTirarSom);
Elementos.buttonSomOff.addEventListener('click',control.clicouParaVoltarSom)
Elementos.buttonAddTime.addEventListener('click',control.clicouAddTime);
Elementos.buttonStop.addEventListener('click',control.clicouStop);

Elementos.buttonPause.addEventListener('click',control.clicouPause);
Elementos.buttonPlay.addEventListener('click',control.clicouPlay);
Elementos.buttonPause.addEventListener('click',control.clicouPause);
