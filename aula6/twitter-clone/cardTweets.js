// defini a classe card
class CardTweets {
    // cria a propriedade lista que contem a tag com ID Lista do HTML
    constructor() {
      this.listaTweets = document.getElementById("listaTweets");
    }
  
    // monta o HTML do card com os dados do JSON
    mostraTweets(dados) {
      // cria uma variavel vazia que ira armazenar todo esse HTML
      let cardTweets = '';
      // faz o loop no array dados que armazena as noticias
      dados.forEach(function (elemento) {
        console.log("elemento", elemento)
        // adiciona a variavel card todo o HTML com as informações
        // += serve para adicionar sem sobrescrever
        cardTweets += `
        <li class="tweet-card">
        <div class="tweet-content">
          <div class="tweet-header">
            <span class="fullname">
              <strong > ${elemento.nome}</strong>
            </span>
            <span class="username"> ${elemento.usuario} </span>
            <span class="tweet-time">- ${elemento.data} </span>
          </div>
          <a>
            <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
          </a>
          <div class="tweet-text">
            <p class="" lang="es" data-aria-label-part="0" > ${elemento.mensagem} <a href="https://t.co/dqg5hVQXA0"
                class="twitter-timeline-link" target="_blank"><span
                  class=""> </span></a> <a href=""
                class="twitter-hashtag"><s> </s><b> </b></a> <a href=""
                class="twitter-hashtag"><s> </s><b> </b></a>
              <a href="" class="twitter-hashtag" dir="ltr"></a>
            </p>
          </div>
          <div class="tweet-footer">
            <a class="tweet-footer-btn">
              <i class="octicon octicon-comment" aria-hidden="true"></i><span > ${elemento.comentarios} </span>
            </a>
            <a class="tweet-footer-btn">
              <i class="octicon octicon-sync" aria-hidden="true"></i><span > ${elemento.compartilhamentos} </span>
            </a>
            <a class="tweet-footer-btn">
              <i class="octicon octicon-heart" aria-hidden="true"></i><span > ${elemento.likes} </span>
            </a>
          </div>
        </div>
      </li>
        `
      });
  
        //innerText insere texto no meio de tag
        this.listaTweets.innerHTML = cardTweets;
  
    }
  }
  
  // ADICIONAR OUTRAS IMAGENS NOS JSON E NO HTML AQUI NO CARD

