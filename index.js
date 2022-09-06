const form = document.getElementById('cadastro-contato');
const nomeContato = [];
const numeroContato = [];

let linhas = '';



form.addEventListener('submit', function (e) {

    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();

})

function adicionaLinhas() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomeContato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido na lista!`);
    }

    else {
        nomeContato.push(inputNomeContato.value); //adiciona mais elementos ao final de um array e retorna o novo comprimento desse array, no caso em questão valores inserios pelo usuário
        numeroContato.push(parseInt(inputNumeroContato.value));

        let linha = '<tr>';

        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


