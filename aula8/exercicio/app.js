const botaoDeletar = document.querySelector("#deletar-resposta");

const adicionarResposta = document.querySelector("#adicionar-resposta");

const resposta = document.querySelector("#sua-resposta");

const mostraResposta = document.querySelector("#mostra-resposta");


adicionarResposta.addEventListener("click", () => {
    localStorage.setItem("mostra-resposta", resposta.value);
    resposta.value = ''
    mostraResposta.innerHTML = localStorage.getItem("mostra-resposta");
  })

botaoDeletar.addEventListener("click", () => {
  localStorage.clear()
  mostraResposta.innerHTML = ''
})


window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("mostra-resposta")) {
    mostraResposta.innerHTML = localStorage.getItem("mostra-resposta");
  }
})