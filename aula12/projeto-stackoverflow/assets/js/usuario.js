class Usuario {
    constructor(){
        this.nomeUsuario = document.querySelector("#usuario")
    }

    getUsuario = async () => {
        const requisicao = { method: 'get' }

        await fetch("http://localhost:3000/usuario", requisicao)
        .then(resposta => resposta.json())
        .then(dados => {
            localStorage.setItem("dadosUsuario", JSON.stringify(dados))
        })

        this.mostraUsuario()
    }

    mostraUsuario = () => {
        const usuario = JSON.parse(localStorage.getItem("dadosUsuario"))
        this.nomeUsuario.innerHTML = usuario.nome
    }
    

}

//sempre que precisar ficar mostrando o dado em mais de um página, salvar no localstorage