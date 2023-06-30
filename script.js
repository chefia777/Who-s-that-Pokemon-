function pegarPokemon() {
    var formulario = document.querySelector('form');

    let imagemInicial = document.getElementById("imginicial");

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    let botao = document.getElementById("botaozinho");

    let botaoNovo = document.getElementById("botaozinho-novo")

    let idPokemon = Math.floor(Math.random()*151);

    // Valor do inpt Name
    let nome = document.getElementById("name");

    // Concatena a url com o inputname
    urlForm = urlForm + idPokemon;

    // Transforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase();

    // ID Content
    let resposta = document.getElementById('content');

    // Id ImgPokemon
    let imagem = document.getElementById('imgPokemon');

    let conteudo = document.getElementById('content');

    // Resposta em HTML
    let html = '';

    let nomePokemon = '';

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {
            html = 'Nome: ' + data.name;
            resposta.innerHTML = html;
            imagemInicial.innerHTML = "<img src='" + data.sprites.front_default + "'>"
        })
        .catch(function (err) {
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado! 😒'
            } else {
                html = err;
            }
            resposta.innerHTML = html;
        })

        formulario.addEventListener('submit', function(e) {
            e.preventDefault()
            ,false
        })
        
        botao.addEventListener('click', function (event) {   
            event.preventDefault();
            if("Nome: " + document.getElementById("name").value.toLowerCase() == html) {
                console.log("passou")
                imagemInicial.classList.remove("imagem");
                imagemInicial.classList.add("imagem-revelada");
                botao.classList.add("esconder");
                botao.parentElement.classList.add("esconder");
                botaoNovo.classList.remove("esconder");
                botaoNovo.parentElement.classList.remove("esconder");
                botaoNovo.parentElement.classList.add("group-form");
                conteudo.classList.remove("conteudo");
                conteudo.classList.add("conteudo-ativado")
                return false;
            }
            false;
        });

        botaoNovo.addEventListener('click', function (event) {  
            pegarPokemon(); 
            event.preventDefault();
            nome.value = '';
            imagemInicial.classList.remove("imagem-revelada");
            imagemInicial.classList.add("imagem");
            botao.classList.remove("esconder");
            botao.classList.add("group-form");
            botao.parentElement.classList.remove("esconder");
            botao.parentElement.classList.add("group-form");
            botaoNovo.classList.remove("group-form");
            botaoNovo.classList.add("esconder");
            botaoNovo.parentElement.classList.remove("group-form");
            botaoNovo.parentElement.classList.add("esconder");
            conteudo.classList.remove("conteudo-ativado");
            conteudo.classList.add("conteudo");
            return false;
        });

    }





pegarPokemon();