const form = document.getElementById('agenda');
const iconeContato = '<img src="./img/user.png" alt"icone do contato"/>';
const Nomes = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
 
})

function adicionaLinha(){
    const novoContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');
    
    Nomes.push(novoContato.value);
    let linha = '<tr>';
    linha += `<td>${novoContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += `<td>${iconeContato}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;

    novoContato.value = ' ';
    numeroContato.value = ' ';

}
function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

