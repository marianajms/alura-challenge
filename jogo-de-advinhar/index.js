let numGerado = (Math.random()*10).toFixed(); 
let botao = document.querySelector('#botaoAposta');
var tentativas = 1;
var tentativasRestantes = 4;
var vidas = ["♥","♥","♥","♥","♥"];

function Verificar(event){
    event.preventDefault();
    let numApostado = document.querySelector('#numApostado').value;
    let h2Mensagem = document.querySelector('#mensagem');
    let divInicial = document.querySelector('.screen1');
    let divFinal = document.querySelector('.screen2');
    let fraseFinal = document.querySelector('.fraseFinal');

    function chuteCerto(){
            divInicial.classList.add('hide');
            divFinal.classList.remove('hide');
            fraseFinal.innerHTML = "Parabéns!🎊🎊🎊 <br> Eu pensei mesmo no número " + numGerado;

    }
    
        if(tentativas == 5){
            if(numApostado==numGerado){
                chuteCerto();

                }else{
                    divInicial.classList.add('hide');
                    divFinal.classList.remove('hide');
                    fraseFinal.innerHTML = "Você já usou suas cinco tentativas 😔 <br><br>Eu tinha pensado no número " + numGerado;

                }


        }if(tentativas<5){
            
            if(numApostado==numGerado){
                chuteCerto();

            }else{
                h2Mensagem.textContent = `Errou! Tentativas restantes: `;

                if(tentativasRestantes>0){
                    vidas.pop();
                }

                let elementoVidas = document.createElement("span");
                elementoVidas.textContent=vidas.join(' ');
                elementoVidas.style.fontSize="25px";
                h2Mensagem.appendChild(elementoVidas);
                console.log(typeof(vidas))

                tentativas++;
                tentativasRestantes--;

            }
        }
}


botao.addEventListener('click',Verificar);