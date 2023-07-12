import Elementos from "./elementos.js";
import {tocarFimDoTempo} from "./sons.js";
let iniciarContagem;
function contagem(){
   iniciarContagem =  setInterval(()=>{
        let segundos = Number(Elementos.divSegundos.textContent);
        let minutos = Number(Elementos.divMinutos.textContent);
        if((minutos<=0)&(segundos<=0)){
            tocarFimDoTempo();
            window.clearInterval(iniciarContagem);
            setTimeout(()=>{
                Elementos.divSegundos.innerText = "00"; 
                Elementos.divMinutos.innerText = "10";  
            },3000)
     
            return;
        }

        if(segundos<=0){
            Elementos.divSegundos.textContent = 59;    
            // para os seg voltarem a 59 quando der 00s

            Elementos.divMinutos.textContent = String(minutos-1).padStart(2,0);
            //diminuir 1 dos min quando os seg zerarem
        }else{
            Elementos.divSegundos.textContent= String(segundos -1).padStart(2,0);}
            //diminuir 1s se não estiverem zerados

    },1000)
    
}

export {contagem, iniciarContagem};