
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;  
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' & peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorImc < 18.5) {
            classificacao = 'Abaixo do peso';

        } else if ( valorImc < 24 ) {
            classificacao = 'Peso ideal (Parabens!)'

        } else if ( valorImc < 29 ) {
            classificacao = 'Levemente acima do peso'

        } else if ( valorImc < 34) {
            classificacao = 'Obesidade grau I'

        } else if ( valorImc < 39) {
            classificacao = 'Obesidade grau II (Severa)'

        } else if ( valorImc < 40) {
            classificacao = 'Obesidade grau III (Morbido)'
        }

       resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;

    } else {
       resultado.textContent = 'preencha os campos que faltam !!!'
    }
    
}

calcular.addEventListener('click', imc)