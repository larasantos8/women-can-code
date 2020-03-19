const paragrafo = document.querySelector("p")
const botao = document.querySelector("#botao")
const botaoDeletar = document.querySelector("#botao-deletar")

botao.addEventListener("click", function () {
  paragrafo.classList.add("vermelho")
})

botaoDeletar.addEventListener("click", function () {
  if (paragrafo.classList.contains("vermelho")) {
    paragrafo.remove()
  }
})
