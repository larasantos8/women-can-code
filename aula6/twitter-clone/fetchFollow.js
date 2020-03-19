class Follow {
    buscaFollow() {
      return fetch("./follow.json", { method: 'get' })
    }
  }