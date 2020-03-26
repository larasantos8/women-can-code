const objetoUsuario = new Usuario()
const objetoPergunta = new Pergunta()
const objetoRespostas = new Respostas()
const campoTexto = document.querySelector("#message_body")
const botaoAdicionar = document.querySelector("#botao-adicionar")
const listaResposta = document.querySelector("#answersList")
// const quantidade = document.querySelector("quantidade");
// quantidade.innerText = this.arrayRespostas.length;

window.addEventListener("DOMContentLoaded", () => {
    objetoUsuario.getUsuario()
    objetoPergunta.getPergunta()
    objetoRespostas.getRespostas()

})

botaoAdicionar.addEventListener("click", function() {
    objetoRespostas.postResposta(campoTexto.value)
})

// deleta resposta 
listaResposta.addEventListener("click", (event) => {
    objetoRespostas.deleteResposta(event)
})
  
// botaoAumentarVoto.addEventListener()
// botaoDiminuirVoto.addEventListener()

// botaoDeletar.addEventListener("click", (event) {
//    objetoRespostas.deleteResposta() 
// })

