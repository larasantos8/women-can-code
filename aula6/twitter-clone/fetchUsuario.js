class Usuario {
    buscaUsuario() {
      return fetch("./usuario.json", { method: 'get' })
    }
  }