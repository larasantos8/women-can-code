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

        this.arrayRespostas.forEach((resposta) => {
            cardRespostas +=`
            <hr>
            <li>
              <table class="fw" id="message-88">
                <tbody>
                  <tr>
                    <td class="votecell" rowspan="2">
                      <div class="vote">
                        <div class="text-center">
                          <a class="vote-up disabled" data-voto="up" data-tipo="votar" data-id=${resposta.id}>
                            <span  class="glyphicon glyphicon-circle-arrow-up" data-voto="up" data-tipo="votar" data-id=${resposta.id}></span>
                          </a>
                        </div>
                        <div class="score text-center">${resposta.votos}</div>
                        <div class="text-center">
                          <a class="vote-down disabled" data-tipo="votar" data-voto="down" data-id=${resposta.id}>
                            <span class="glyphicon glyphicon-circle-arrow-down" data-tipo="votar" data-voto="down" data-id=${resposta.id}></span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td class="postcell">
                      <div class="col-md-10">

                        <p>${resposta.conteudo}</p>
                      </div>
                      <div class="col-md-2">
                        <a href="#" class="btn btn-danger" data-tipo="deletar" data-id="${resposta.id}" title="deletar">
                          <i class="glyphicon glyphicon-trash" data-tipo="deletar" data-id="${resposta.id}"></i></a>
                      </div>
                      <table class="user-info">
                        <tbody>
                          <tr>
                          </tr>
                          <tr>
                            <td colspan="2">Respondido em <br>
                              <time>${resposta.data}</time>
                            </td>
                          </tr>
                          <tr>
                            <td class="avatar"><img alt="testuser" height="30"
                                src="http://gravatar.com/avatar/85e3339e2c78f081802575f4e8081792?default=identicon&amp;size=30"
                                width="30"></td>
                            <td><a href="">${resposta.usuario}</a></td>
                          </tr>
                        </tbody>
                      </table>
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
            <hr></hr>
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


    // listaRespostas.addEventListener("click", async (event) => {
    //     const idResposta = event.target.dataset.id
    //     const tipo = event.target.dataset.tipo
    
    //     if (idResposta !== undefined && tipo === "deletar") {
    //         if (confirm("Tem certeza?")) {
    //             const requisicao = { method: 'delete' }
    //             // aguardo a requisição finalizar
    //             await fetch("http://localhost:3000/respostas/" + idResposta, requisicao)
    //         }
    //     }

    // })
}