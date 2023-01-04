const botao = document.querySelector('#bCalcular');
const inputPeso = document.querySelector('#inputPeso');
const inputAltura = document.querySelector('#inputAltura');
const screenResultado = document.querySelector('#screenResultado');
const divErro = document.querySelector('.divErro');
const pErro = document.querySelector('.pErro');

var imc;
var campoVazio=false;


const Modal = {
    botaoFechar : document.querySelector('.fecharModal'),
    mensagem : document.querySelector('.resultado'),

    abrir(){
        screenResultado.classList.remove('hide');
    },
    fechar(){
        screenResultado.classList.add('hide');
    }
}



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
        pErro.innerText = VerificarCamposVazios();
        divErro.classList.remove('hide');
    }else{
        divErro.classList.add('hide');
        let alturaFormatada = Number(inputAltura.value)/100;
        imc = CalcularIMC(alturaFormatada,inputPeso.value);
        Modal.mensagem.innerText = `Seu imc é ${imc.toFixed(2)} e está ${VerificarIMC(imc)}`;
        Modal.abrir();

    }

}

function FecharModal(){
    Modal.fechar();

}

botao.addEventListener('click',ClicouBotao);
Modal.botaoFechar.addEventListener('click',FecharModal);