class Respostas {
    constructor(){
        this.listaRespostas = document.querySelector("#answersList")
       // this.quantidadeRespostas = document.querySelector("#quantidade")
        this.arrayRespostas = []
       
    }

    

    getRespostas = async () => {
        const requisicao = { method: 'get' }

        await fetch("http://localhost:3000/respostas", requisicao)
        .then(resposta => resposta.json())
        .then(dados => this.arrayRespostas = dados)
       
        //this.quantidadeRespostas.innerHTML = this.arrayRespostas.length

        this.mostraRespostas()
    }

    mostraRespostas = () => {
        let cardRespostas = ''

        this.arrayRespostas.forEach((elemento) => {
            cardRespostas +=`
            <li>
            <table class="fw" id="message-88">
            <tbody>
                <tr>
                <td class="votecell" rowspan="2">
                    <div class="vote">
                    <div class="text-center">
                        <a class="vote-up disabled">
                        <span class="glyphicon glyphicon-circle-arrow-up"></span>
                        </a>
                    </div>
                    <div class="score text-center"> ${elemento.votos} </div>
                    <div class="text-center">
                        <a class="vote-down disabled">
                        <span class="glyphicon glyphicon-circle-arrow-down"></span>
                        </a>
                    </div>
                    </div>
                </td>
                <td class="postcell">
                    <div class="col-md-10">

                    <p> ${elemento.conteudo} </p>
                    </div>
                    <div class="col-md-2">
                    <a href="#" class="btn btn-danger" title="deletar" id = "${elemento.id}" >
                        <i class="glyphicon glyphicon-trash"></i></a>
                    </div>
                    <table class="user-info">
                    <tbody>
                        <tr>
                        </tr>
                        <tr>
                        <td colspan="2">Respondido em <br>
                            <time> ${elemento.data} </time>
                        </td>
                        </tr>
                        <tr>
                        <td class="avatar"><img alt="testuser" height="30"
                            src="http://gravatar.com/avatar/85e3339e2c78f081802575f4e8081792?default=identicon&amp;size=30"
                            width="30"></td>
                        <td><a href=""> ${elemento.usuario} </a></td>
                        </tr>
                    </tbody>
                    </table>
                    <p></p>
                </td>
                </tr>
            </tbody>
            </table>
            </li>
            `
        })

        this.listaRespostas.innerHTML = cardRespostas
    }

    postResposta = async (conteudo) => {
        const user = JSON.parse(localStorage.getItem("dadosUsuario"))
        const requisicao = {
          headers: { "Content-Type": "application/json" },
          method: 'post',
          body: JSON.stringify({
            conteudo: conteudo,
            votos: 0,
            data: "21 de março de 2020",
            usuario: user.nome
          })
            
        }
  
        await fetch("http://localhost:3000/respostas/", requisicao)
          .then(resposta => resposta.json())
          .then(dados => this.arrayRespostas = dados)
    }

    putResposta = async () => {
        const requisicao = {
          headers: { "Content-Type": "application/json" },
          method: 'put',
          body: JSON.stringify({
            votos
          })
        }
  
        await fetch("http://localhost:3000/respostas/", requisicao)
          .then(resposta => resposta.json())
          .then(dados => this.arrayRespostas = dados)
      }

    
    // deleteResposta= async (id) => {
    //     const idRseposta = event.target.dataset.id
    //     const requisicao = { method: 'delete' }

    //     if(idResposta !== undefined && event.target.classList.contains('btn btn-danger')){
    //     await fetch("http://localhost:3000/respostas/" + id, requisicao)
    //       .then(resposta => resposta.json())
    //       .then(dados => this.arrayRespostas = dados)
    //     }
    // }

}

// deletarItemDaLista(event) {
//     const itemDeletado = event.target.previousSibling.previousSibling.innerText
//     if (event.target.classList.contains('deletar')) {
//       if (confirm("Tem certeza?")) {
//         event.target.parentElement.remove()
//         this.arrayDeItens.forEach((item, index) => {
//           if (itemDeletado.innerText === item) {
//           this.arrayDeItens.splice(index, 1)
//           }
//         })
//         const arrayJSON = JSON.stringify(this.arrayDeItens)
//         localStorage.setItem("produtos", arrayJSON)
//       }
//     }
//   }

// console.log(event.target)