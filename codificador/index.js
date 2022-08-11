 
const cripBotao = document.querySelector(".cripBotao");
const descripBotao = document.querySelector(".descripBotao");


function escreverResultadoCripto(){
    let resultadoP = document.querySelector(".resultado__mensagem2");
    let aviso = document.querySelector(".resultado__mensagem1");
    aviso.textContent="";
    resultadoP.textContent=mensagemCripto;
    console.log(resultadoP);


}

function criptografar(event){
    event.preventDefault();      
    let textoDigitado = document.querySelector(".formulario__input").value; 
    mensagemCripto = textoDigitado.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    console.log(mensagemCripto);
    escreverResultadoCripto()
    return mensagemCripto;                       
} 
cripBotao.addEventListener("click",criptografar);


//DESCRIPTOGRAFAR

function descriptografar(event){
    event.preventDefault();
    let textoDigitadoC = document.querySelector(".formulario__input").value; 
    mensagemCripto = textoDigitadoC.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    escreverResultadoDes();


}

function escreverResultadoDes(){
    let resultadoD = document.querySelector(".resultado__mensagem2");
    let avisoD = document.querySelector(".resultado__mensagem1");
    avisoD.textContent="";
    resultadoD.textContent=mensagemCripto;

}

descripBotao.addEventListener("click",descriptografar);


