class Pergunta{
    constructor(){
        this.tituloPergunta = document.querySelector("#titulo-pergunta")
        this.conteudoPergunta = document.querySelector("#conteudo-pergunta")
        this.tagsPergunta = document.querySelector("#tags-pergunta")
        this.votosPergunta = document.querySelector("#votos-pergunta")
        this.dataPergunta = document.querySelector("#data-pergunta")
        this.usuarioPergunta = document.querySelector("#usuario-pergunta")

        this.pergunta = ''
    }

    getPergunta = async () => {
        const requisicao = { method: 'get' }

        await fetch("http://localhost:3000/pergunta", requisicao)
        .then(resposta => resposta.json())
        .then(dados => this.pergunta = dados)

        this.mostraPergunta()
    }

    mostraPergunta = () => {
        this.tituloPergunta.innerHTML = this.pergunta.titulo
        this.conteudoPergunta.innerHTML = this.pergunta.conteudo
        this.tagsPergunta.innerHTML = this.pergunta.tags
        this.votosPergunta.innerHTML = this.pergunta.votos
        this.dataPergunta.innerHTML = this.pergunta.data
        this.usuarioPergunta.innerHTML = this.pergunta.usuario

    }
}

//sempre que adiciona ou diminui precisa ter header, pq vc esta pegando um json e precisa devolver em formato json tbm