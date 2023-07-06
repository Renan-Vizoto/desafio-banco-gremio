document.getElementById('input-cep').addEventListener("input", chamaAPI)

async function chamaAPI(){
    let cep = document.querySelector('#input-cep').value

    const apiViaCep = 'https://viacep.com.br/ws/'+ cep + '/json/'

    const resCep = await fetch(apiViaCep)   
    const data = await resCep.json() 

    if(data.erro == true)
        alert("CEP Inválido!");
    else {
        document.getElementById('input-estado').value = `${data.uf}`
        document.getElementById('input-cidade').value = `${data.localidade}`
        document.getElementById('input-rua').value = `${data.logradouro}`
        document.getElementById('input-bairro').value = `${data.bairro}`
    }
}

//Numero Celular
const inputTelefone = document.getElementById('input-numeroCelular');

inputTelefone.addEventListener('input', formatarTelefone);

function formatarTelefone() {
    let valor = inputTelefone.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let novoTelefone = '';

    if (valor.length > 0) {
        novoTelefone += '(' + valor.substring(0, 2);
    }

    if (valor.length > 2) {
        novoTelefone += ') ' + valor.substring(2, 7);
    }

    if (valor.length > 7) {
        novoTelefone += '-' + valor.substring(7, 11);
    }

    inputTelefone.value = novoTelefone;
}


//CPF
const inputCPF = document.getElementById('input-cpf');

inputCPF.addEventListener('input', formatarCPF);

function formatarCPF() {
    let valor = inputCPF.value.replace(/\D/g, '');
    let novoCPF = '';

    if (valor.length > 0) {
        novoCPF += '' + valor.substring(0, 3);
    }

    if (valor.length > 3) {
        novoCPF += '.' + valor.substring(3, 6);
    }

    if (valor.length > 6) {
        novoCPF += '.' + valor.substring(6, 9);
    }

    if (valor.length > 9) {
        novoCPF += '-' + valor.substring(9, 11);
    }

    inputCPF.value = novoCPF;
}


//CEP
const inputCEP = document.getElementById('input-cep')

inputCEP.addEventListener('input', formatarCEP)

function formatarCEP() {
    let valor = inputCEP.value.replace(/\D/g, '');

    let novoCEP = '';

    if(valor.length > 0){
        novoCEP += '' + valor.substring(0, 5)
    }

    if(valor.length > 5){
        novoCEP += '-' + valor.substring(5, 8)
    }

    inputCEP.value = novoCEP
}

//salario
document.getElementById('input-salario').addEventListener('input', calcCredito)

function calcCredito() {
    let valor = document.querySelector("#input-salario").value * 0.4

    let credito = valor.toFixed(2).replace('.', ',');

    document.getElementById('input-credito').value = `R$ ${credito}`
}