import Elementos from "./elementos.js";

function contagem(){
    setInterval(()=>{
        let segundos = Number(Elementos.divSegundos.textContent);
        let minutos = Number(Elementos.divMinutos.textContent);


        if((minutos<=0)&(segundos<=0)){
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

export default contagem;