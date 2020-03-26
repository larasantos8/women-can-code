class Respostas {
    constructor(){
        this.listaRespostas = document.querySelector("#answersList")
        this.quantidadeRespostas = document.querySelector("#quantidade-respostas")
        this.arrayRespostas = []
       
    }

    getRespostas = async () => {
        const requisicao = { method: 'get' }

        await fetch("http://localhost:3000/respostas", requisicao)
        .then(resposta => resposta.json())
        .then(dados => this.arrayRespostas = dados)
       
        this.quantidadeRespostas.innerHTML = this.arrayRespostas.length

        this.mostraRespostas()
    }

    mostraRespostas = () => {
      let conteudo = ''

      this.arrayRespostas.forEach(item => {
        conteudo += `
        <hr>
        <li>
          <table class="fw">
            <tbody>
              <tr>
                <td class="votecell" rowspan="2">
                  <div class="vote">
                    <div class="text-center">
                      <a class="vote-up disabled">
                        <span class="glyphicon glyphicon-circle-arrow-up"></span>
                      </a>
                    </div>
                    <div class="score text-center">${item.votos}</div>
                    <div class="text-center">
                      <a class="vote-down disabled">
                        <span class="glyphicon glyphicon-circle-arrow-down"></span>
                      </a>
                    </div>
                  </div>
                </td>
                <td class="postcell">
                  <div class="col-md-10">
                    <p>${item.conteudo}</p>
                  </div>
                  <div class="col-md-2">
                    <a href="#" class="btn btn-danger" title="deletar" id="botao-${item.id}">
                      <i class="glyphicon glyphicon-trash"></i></a>
                  </div>
                  <table class="user-info">
                    <tbody>
                      <tr>
                      </tr>
                      <tr>
                        <td colspan="2">Respondido em <br>
                          <time>${item.data}</time>
                        </td>
                      </tr>
                      <tr>
                        <td class="avatar"><img alt="testuser" height="30"
                            src="http://gravatar.com/avatar/85e3339e2c78f081802575f4e8081792?default=identicon&amp;size=30"
                            width="30"></td>
                        <td><a href="">${item.usuario}</a></td>
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

        this.listaRespostas.innerHTML = conteudo
    }

    postResposta = async (conteudo) => {
      var data = new Date();
      var dataFormatada = ("0" + data.getDate()).substr(-2) + "/"  + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear();
       
        const user = JSON.parse(localStorage.getItem("dadosUsuario"))
        const requisicao = {
          headers: { "Content-Type": "application/json" },
          method: 'post',
          body: JSON.stringify({
            conteudo: conteudo,
            votos: 0,
            data: dataFormatada,
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

       // deleto resposta
    deleteResposta = async (event) => {
    // verifico se o click é no botão deletar
    if (event.target.classList.contains("btn-danger")) {
      // pego o id e divido o conteudo em array passando para o split o separador
      let idArray = event.target.id.split("-")
      // adiciono no id o segundo valor do array (que é o meu numero)
      const id = idArray[1]
      const requisicao = { method: 'delete' }
      // faço a requisição com o meu array
      console.log(idArray)
      await fetch(`http://localhost:3000/respostas/${id}`, requisicao)
    }
  }

}
