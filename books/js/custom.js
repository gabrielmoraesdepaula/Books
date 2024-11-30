function filtrarLivros() {
    const pesquisa = document.getElementById("pesquisa").value.toLowerCase();
    const livros = document.querySelectorAll(".book-item");
  
    livros.forEach(livro => {
        const titulo = livro.querySelector("h3").textContent.toLowerCase();
        if (titulo.includes(pesquisa)) {
            livro.style.display = "block";
        } else {
            livro.style.display = "none";
        }
    });
  }
  function mostrarDetalhes(livroId) {
    const detalhesLivro = document.getElementById(livroId);
    detalhesLivro.classList.toggle("visivel");
  }
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
  });
  function mostrarDetalhes(detalhesId) {
    const detalhes = document.getElementById(detalhesId);
    if (detalhes.style.display === "none") {
        detalhes.style.display = "block"; // Mostra os detalhes
    } else {
        detalhes.style.display = "none"; // Oculta os detalhes
    }
  }
  function pesquisarLivro() {
    const termoPesquisa = document.getElementById("searchInput").value.toLowerCase();
    const livros = document.getElementsByClassName("book-item");
  
    for (let livro of livros) {
        const titulo = livro.querySelector(".book-title").textContent.toLowerCase();
        
        // Exibe todos os livros se o campo de pesquisa estiver vazio
        if (termoPesquisa === "") {
            livro.style.display = "block";
        } else if (titulo.includes(termoPesquisa)) {
            livro.style.display = "block"; // Exibe o livro se for correspondente
        } else {
            livro.style.display = "none"; // Oculta o livro se não for correspondente
        }
    }
  }  