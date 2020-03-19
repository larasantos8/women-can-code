// tag ul
const listaTecnologias = document.querySelector("#tecnologias")
// tag botao limpar
const botaoLimpar = document.querySelector("#limpar")
// tag botao adicionar
const botao = document.querySelector("#botao")
// tag input de texto
const texto = document.querySelector("#texto")


// escuta o click no botao de adicionar
botao.addEventListener("click", () => {
  // adicionado o valor digitado no input de texto no local storage
  localStorage.setItem("lista-tecnologias", texto.value)
  // limpa o campo de texto
  texto.value = ''
  //texto.focus() -> pra voltar o cursor para o quadradinho
  // atualiza a lista de tecnologia usando o innerHTML com os dados recuperados do localStorage usando getItem
  listaTecnologias.innerHTML = `<li>${localStorage.getItem("lista-tecnologias")}`;
})

// escuta o evento de click no botao limpar
botaoLimpar.addEventListener("click", () => {
  // limpa o localStorage
  localStorage.clear()
  // limpa o conteúdo da lista
  listaTecnologias.innerHTML = ''
})

// objeto window é o navegador, esse evento DOMContentLoaded é disparado 
// quando o navegador termina de atualizar
window.addEventListener("DOMContentLoaded", () => {
  // atualiza a lista de tecnologia usando o innerHTML com os dados recuperados do localStorage usando getItem
  if (localStorage.getItem("lista-tecnologias")) {
    listaTecnologias.innerHTML = `<li>${localStorage.getItem("lista-tecnologias")}`;
  }
})
