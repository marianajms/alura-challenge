const botao = document.querySelector('#bCalcular');
const inputPeso = document.querySelector('#inputPeso');
const inputAltura = document.querySelector('#inputAltura');
const BfecharModal = document.querySelector('.fecharModal');
const screenResultado = document.querySelector('#screenResultado');
const resultadoTexto = document.querySelector('.resultado');
const tituloModal = document.querySelector('.titulo-modal');


botao.addEventListener('click',ClicouBotao);
BfecharModal.addEventListener('click',FecharModal);


var imc;
var campoVazio=false;

function VerificarCamposVazios(){
    if(inputAltura.value==''&&inputPeso.value==''){
        campoVazio=true;
        return 'Adicione seu peso e altura para calcular seu IMC';
    }else if (inputAltura.value==''){
        campoVazio=true;
        return 'Adicione sua altura para calcular seu IMC';
    }else if(inputPeso.value==''){
        campoVazio=true;
        return 'Adicione seu peso para calcular seu IMC';
    } else campoVazio=false;
    
}

function CalcularIMC(altura,peso){
    let imc = peso/(altura*altura);
    return imc;
}



function VerificarIMC(imc){
    if(imc<18.5){
        return "abaixo do ideal";
    } else if(imc<24.9){
        return "ideal";
    } else if(imc<29.9){
        return "levemente acima do ideal";
    } else if(imc <39.9 ){
        return "como indicativo de obesidade grau I";
    } else {
        return "como indicativo de obesidade grau II";
    }
}

function ClicouBotao(event){
    event.preventDefault();
    VerificarCamposVazios();

    if(campoVazio){
        resultadoTexto.innerText = VerificarCamposVazios();
        screenResultado.classList.remove('hide');
    }else{
        let alturaFormatada = Number(inputAltura.value)/100;
        imc = CalcularIMC(alturaFormatada,inputPeso.value);
        resultadoTexto.innerText = `Seu imc é ${imc.toFixed(2)} e está ${VerificarIMC(imc)}`;
        screenResultado.classList.remove('hide');
    }

}

function FecharModal(){
    screenResultado.classList.add('hide');
}
