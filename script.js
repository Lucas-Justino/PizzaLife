function adicionarAoCarrinho(produto) {
    var cupomLista = document.getElementById('cupomLista');
    var novoItem = document.createElement('li');
    novoItem.appendChild(document.createTextNode(produto));
    cupomLista.appendChild(novoItem);
}

function limparCupom() {
    var cupomLista = document.getElementById("cupomLista");
    cupomLista.innerHTML = ""; // Limpa o conteúdo da lista
}
