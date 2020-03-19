// cria classe noticias
class Noticias {
  // cria método para buscar noticias no json
  buscaNoticias() {
    // retorna o fetch com a promise e APENAS A PROMISE SEM TRATAMENTO
    return fetch("./news.json", { method: 'get' })
  }
}