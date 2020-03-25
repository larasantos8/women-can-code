const objetoUsuario = new Usuario()
const objetoPergunta = new Pergunta()
const objetoRespostas = new Respostas()
const campoTexto = document.querySelector("#message_body")
const botaoAdicionar = document.querySelector("#botao-adicionar")
//const botaoDeletar = document.querySelector("")

// const quantidade = document.querySelector("quantidade");
// quantidade.innerText = this.arrayRespostas.length;

window.addEventListener("DOMContentLoaded", () => {
    objetoUsuario.getUsuario()
    // objetoUsuario.mostraUsuario()
    objetoPergunta.getPergunta()
    objetoRespostas.getRespostas()

})

botaoAdicionar.addEventListener("click", function() {
    objetoRespostas.postResposta(campoTexto.value)
})


// bttnAumentarVoto.addEventListener()

// botaoDeletar.addEventListener("click", (event) {
//    objetoRespostas.deleteResposta() 
// })

