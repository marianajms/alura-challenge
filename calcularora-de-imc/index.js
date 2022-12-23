const botao = document.querySelector('#bCalcular');
const inputPeso = document.querySelector('#inputPeso');
const inputAltura = document.querySelector('#inputAltura');

botao.addEventListener('click',Calcular);

var imc;

function Calcular(event){
    event.preventDefault();
    let altura = Number(inputAltura.value)/100;
    imc = Number(inputPeso.value)/(altura*altura)
    console.log(imc.toFixed(2));
}