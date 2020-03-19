// defini a classe card
class CardFollow {
    // cria a propriedade lista que contem a tag com ID Lista do HTML
    constructor() {
      this.listaFollow = document.getElementById("listaFollow");
    }
  
    // monta o HTML do card com os dados do JSON
    mostraFollow(dados) {
      // cria uma variavel vazia que ira armazenar todo esse HTML
      let cardFollow = '';
      // faz o loop no array dados que armazena as noticias
      dados.forEach(function (elemento) {
        console.log("elemento", elemento)
        // adiciona a variavel card todo o HTML com as informações
        // += serve para adicionar sem sobrescrever
        cardFollow += `
        <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong> ${elemento.nome} </strong>
                      </span>
                      <span class="username"> ${elemento.usuario} </span>
                    </div>

                    <button class="btn btn-follow">Follow</button>
                    
                  </div>
                </li>
        `
      });
  
        //innerText insere texto no meio de tag
        this.listaFollow.innerHTML = cardFollow;
  
    }
  }
  