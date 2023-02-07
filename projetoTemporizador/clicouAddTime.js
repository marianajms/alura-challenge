 import Elementos from "./elementos.js";
 
 function clicouAddTime(){
    let minutosInformados =  prompt('Informe quantos minutos o timer funcionará');
    
    if(minutosInformados!=null){
        Elementos.divMinutos.textContent = String(minutosInformados).padStart(2,0);
        Elementos.divSegundos.textContent = String(0).padStart(2,0);
        Elementos.buttonStop.classList.remove('hide');
        Elementos.buttonAddTime.classList.add('hide');
    }
}

export default clicouAddTime
