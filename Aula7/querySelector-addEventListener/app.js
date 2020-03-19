const tecnologias = document.querySelector("#tecnologias");
const botaoLimpar = document.querySelector("#limpar");

tecnologias.addEventListener("click", function (event) {
    event.target.classList.add("clicado");
})

  tecnologias.addEventListener("dblclick", function (event) {
    if(event.target.classList.contains("clicado")) { 
      event.target.classList.remove("clicado");
    }
  })

botaoLimpar.addEventListener("click", function () {
    tecnologias.remove();
  })

 