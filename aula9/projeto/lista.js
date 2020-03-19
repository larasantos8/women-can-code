class Lista {

  constructor() {
    // crio a propriedade listaDeCompras 
    this.listaDeCompras = document.querySelector("#lista-de-compras");
    // crio a propriedade arrayDeItens
    this.arrayDeItens = [];
  }

  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE DOMContentLoaded -----
  // método para adicionar as informações do Local Storage no array
  montaArray() {
    //verifica se existe algo no local storage
    // atualiza array usar JSON.parse
  }

  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE DOMContentLoaded -------------
  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE Click no botão adicionar -----
  // método para montar a lista fazendo o loop entre os dados do array
  montaLista() {
    // loop com os dados do array e atualiza html
  }

  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE Click no botão adicionar -----
  // metodo para adicionar itens no arrayDeItens e no local storage
  adicionaItem(item) {
    // adiciona no array e no local storage usar JSON.stringify
  }

  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE Click no botão deletar em cada item da lista -----
  // método para deletar UM item da lista
  deletarItemDaLista(event) {
    // descobrir item para deletar, usar previousSibling.previousSibling
    // verificar se o item clicado tem a classe deletar
    // mostrar caixa de confirmação
    // remover elemento pai do html, usar parentElement
    // fazer loop nos arrays, comparar o item com o elemento para deletar e usar splice(index, 1)
    // fora do loop converter o array novamente para JSON usando JSON.stringify
    // adicionar o array convertido no local Storage
    // descubro qual foi o item clicado e qual é o seu conteúdo
  }

  // método para deletar TODOS os itens da lista
  deletarLista() {
    // limpar o html e o local storage
  }
}

