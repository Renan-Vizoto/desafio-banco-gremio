document.getElementById('input-cep').addEventListener("blur", chamaAPI)

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


//senha
const senha = document.getElementById('input-senha')
const confirmaSenha = document.getElementById('input-senha2')
const mensagemSenha = document.getElementById("mensagem-senha");


confirmaSenha.addEventListener('blur', confir)

function confir(){
    if(senha.value == confirmaSenha.value){
        mensagemSenha.style.display = "none";
        console.log('senha certa');
    }
    else{
        console.log('senha errada');
        mensagemSenha.style.display = "block";
    }
}

//data

const inputDate = document.getElementById('input-dataNasc');
const errorMessage = document.getElementById('error-message');
const minDate = new Date('1900-01-01');
const maxDate = new Date();
const form = document.getElementById('formulario');

inputDate.addEventListener('blur', function() {
    const selectedDate = new Date(inputDate.value);

    if (selectedDate < minDate || selectedDate > maxDate) {
        errorMessage.style.display = 'block';
        console.log('a')
        preventDefault();
    } else {
        errorMessage.style.display = 'none';
        console.log('b')
    }
});

form.addEventListener('submit', function(event) {
    const selectedDate = new Date(inputDate.value);

    if (selectedDate > maxDate) {
        errorMessage.style.display = 'block';
        console.log('c');
        event.preventDefault();
    }
});


//validar
const formulario = document.getElementById('formulario');
const senhav = document.getElementById('input-senha')
const confirmaSenhav = document.getElementById('input-senha2')
const mensagemSenhav = document.getElementById("mensagem-senha");

formulario.addEventListener('submit', function(event) {
    if(confirmaSenhav.value !== senhav.value){
        event.preventDefault();
        mensagemSenhav.style.backgroundColor = 'yellow';
        console.log('senha errada');
    }
    else{
        console.log('senha certa');
        mensagemSenhav.style.backgroundColor = 'yellow';
    }
});


//nome
const inputNome = document.getElementById("input-nome");

inputNome.addEventListener("keypress", function(novoNome) {
  const key = String.fromCharCode(novoNome.keyCode);

  if (/[^a-zA-Z]/.test(key)) {
    novoNome.preventDefault();
  }
});

//sobrenome
const inputSobrenome = document.getElementById("input-sobrenome");

inputSobrenome.addEventListener("keypress", function(novoSobrenome) {
  const key = String.fromCharCode(novoSobrenome.keyCode);

  if (/[^a-zA-Z\s]/.test(key)) {
    novoSobrenome.preventDefault();
  }
});



//novo cpf
const erroMensagemCPF = document.getElementById('erro-mensagemCPF');
let strCPF = document.getElementById('input-cpf')
strCPF.addEventListener('blur',function() {
    validarCPF(strCPF)
});

let validade = 1;

function validarCPF(cpf) {	
	cpf = cpf.value.replace(/\.|-/g,'');
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999"){
			alert('CPF Inválido')
            erroMensagemCPF.style.display = 'block';
            validade = 0;
            return;           
        }	
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9))){	
            alert('CPF Inválido')
            erroMensagemCPF.style.display = 'block';
            validade = 0;
            return;
        }	
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10))){
        alert('CPF Inválido')
        erroMensagemCPF.style.display = 'block';
        validade = 0;
        return;
    }
	else{
        erroMensagemCPF.style.display = 'none';
        return;
    }

};

form.addEventListener('submit', function(event) {

    if (validade == 0) {
        event.preventDefault();
    }
});