let botao = document.querySelector('#botao');

function validarCampo(campo){
    const valor = campo.value;
    return valor === "" ? 0 : parseInt(valor, 10);
    }


botao.addEventListener('click',(event)=>{
    event.preventDefault();

    const input5 = document.querySelector('#notas5');
    let quantNotas5 = validarCampo(input5);

    const input4 = document.querySelector('#notas4');
    let quantNotas4 = validarCampo(input4);


    const input3 = document.querySelector('#notas3');
    let quantNotas3 = validarCampo(input3);


    const input2 = document.querySelector('#notas2');
    let quantNotas2 = validarCampo(input2);


    const input1 = document.querySelector('#notas1');
    let quantNotas1 = validarCampo(input1);


    const qtDeNotas = quantNotas1+quantNotas2+quantNotas3+quantNotas4+quantNotas5;


    const soma = (quantNotas5*5)+(quantNotas4*4)+(quantNotas3*3)+(quantNotas2*2)+(quantNotas1*1)

    const resultado = soma/qtDeNotas;

    console.log(`Soma: ${soma}` );
    console.log(`Notas: ${qtDeNotas}`);
    console.log(`Resultado: ${resultado}`);
    console.log(resultado.toFixed(2));

    const spanResultado = document.querySelector('#resultado');
    spanResultado.textContent =resultado.toFixed(2)

});




