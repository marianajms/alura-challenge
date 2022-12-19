let numGerado = (Math.random()*10).toFixed(); 
let botao = document.querySelector('#botaoAposta');
var tentativas = 1;
var tentativasRestantes = 4;

function Verificar(event){
    event.preventDefault();
    let numApostado = document.querySelector('#numApostado').value;
    let h2Mensagem = document.querySelector('#mensagem');
    let divInicial = document.querySelector('.screen1');
    let divFinal = document.querySelector('.screen2');
    let fraseFinal = document.querySelector('.fraseFinal');
    
        if(tentativas == 5){
            if(numApostado==numGerado){
                divInicial.classList.add('hide');
                divFinal.classList.remove('hide');
                fraseFinal.textContent = "Parabéns!🎊🎊🎊 Eu pensei mesmo no número " + numGerado;
                }else{
                    divInicial.classList.add('hide');
                    divFinal.classList.remove('hide');
                    fraseFinal.textContent = "Você já usou suas cinco tentativas 😔 Eu tinha pensado no número " + numGerado;

                }


        }if(tentativas<5){
            
            if(numApostado==numGerado){
                divInicial.classList.add('hide');
                divFinal.classList.remove('hide');
                fraseFinal.textContent = "Parabéns!🎊🎊🎊 Eu pensei mesmo no número " + numGerado;
            }else{
                h2Mensagem.textContent = `Errou! Tentativas restantes: ${tentativasRestantes}`;
                tentativas++;
                tentativasRestantes--;

            }
        }
}


botao.addEventListener('click',Verificar);