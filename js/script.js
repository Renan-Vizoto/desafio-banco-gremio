//CEP
let formataCep = document.getElementById('input-cep')
formataCep.addEventListener("input", function(){
    formatarCEP(formataCep)
})
let chamaCep = document.getElementById('input-cep')
chamaCep.addEventListener("blur", function(){
    chamaAPI(chamaCep)
});

//Numero Celular
const inputTelefone = document.getElementById('input-numeroCelular')
inputTelefone.addEventListener('input', formatarTelefone);

//CPF
const inputCPF = document.getElementById('input-cpf');
inputCPF.addEventListener('input', function(){
    formatarCPF(inputCPF)
});

//salario
document.getElementById('input-salario').addEventListener('input', calcCredito)

//senha
const senha = document.getElementById('input-senha')
const confirmaSenha = document.getElementById('input-senha2')
confirmaSenha.addEventListener('blur', confir)
const mensagemSenha = document.getElementById("mensagem-senha");

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


//menor de idade
let calculaDataNasc = document.getElementById('input-dataNasc');
calculaDataNasc.addEventListener('blur', calculaIdade);
let dataAtual = new Date();
const divNomeResp = document.getElementById('nomeResp');
const divCpfResp = document.getElementById('cpfResp')
const inputNomeResp = document.getElementById('inputNomeResp');
const inputCpfResp = document.getElementById('inputCpfResp');

//nome Responsavel
inputNomeResp.addEventListener("keypress", function(novoNome) {
  const key = String.fromCharCode(novoNome.keyCode);

  if (/[^a-zA-Z]/.test(key)) {
    novoNome.preventDefault();
  }
});

//novo cpf responsavel
const erroMensagemCPF2 = document.getElementById('erro-mensagemCPF');
inputCpfResp.addEventListener('blur',function() {
    validarCPF(inputCpfResp)
});

//CPF Responsavel
inputCpfResp.addEventListener('input', function(){
    formatarCPF(inputCpfResp)
});







//CEP
async function chamaAPI(chamaCep){
    let novoCep = chamaCep.value

    const apiViaCep = 'https://viacep.com.br/ws/'+ novoCep + '/json/'

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

function formatarCEP(cep) {
    let valor = cep.value.replace(/\D/g, '');

    let novoCEP = '';

    if(valor.length > 0){
        novoCEP += '' + valor.substring(0, 5)
    }

    if(valor.length > 5){
        novoCEP += '-' + valor.substring(5, 8)
    }

    cep.value = novoCEP
}


//FORMATAR CELULAR
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


//CONFIRMA SENHA
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


//CALCULA IDADE
function calculaIdade(){
    let dataNasc = new Date(calculaDataNasc.value);
    const idadeMilissegundos = dataAtual - dataNasc;
    const idadeAnos = Math.floor(idadeMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
    
    if(idadeAnos < 18){
        divNomeResp.style.display = 'block';
        inputNomeResp.required = true;

        divCpfResp.style.display = 'block'
        inputCpfResp.required = true;
    }
};

//FORMATAR CPF
function formatarCPF(cpf) {
    let valor = cpf.value.replace(/\D/g, '');
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

    cpf.value = novoCPF;
}

//VALIDAR CPF
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

//CALCULA CRÉDITO
function calcCredito() {
    let valor = document.querySelector("#input-salario").value * 0.4

    let credito = valor.toFixed(2).replace('.', ',');

    document.getElementById('input-credito').value = `R$ ${credito}`
}