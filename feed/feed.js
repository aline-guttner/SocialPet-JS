function corPatinha() {
    let pawWhite = document.getElementById('pawWhite')
    let pawOrange = document.getElementById('pawOrange')
    pawWhite.style.display = 'inline';
    pawOrange.style.display = 'none';
}

function corPatinha2() {
    let pawWhite = document.getElementById('pawWhite')
    let pawOrange = document.getElementById('pawOrange')
    pawWhite.style.display = 'none';
    pawOrange.style.display = 'inline';
}

function corFeed() {
    let newsWhite = document.getElementById('newsWhite')
    let newsOrange = document.getElementById('newsOrange')
    newsWhite.style.display = 'inline';
    newsOrange.style.display = 'none';
}

function corFeed2() {
    let newsWhite = document.getElementById('newsWhite')
    let newsOrange = document.getElementById('newsOrange')
    newsWhite.style.display = 'none';
    newsOrange.style.display = 'inline';
}

function corPerfil() {
    let userWhite = document.getElementById('userWhite')
    let userOrange = document.getElementById('userOrange')
    userWhite.style.display = 'inline';
    userOrange.style.display = 'none';
}

function corPerfil2() {
    let userWhite = document.getElementById('userWhite')
    let userOrange = document.getElementById('userOrange')
    userWhite.style.display = 'none';
    userOrange.style.display = 'inline';
}

function mostrarNavbar() {
    let mysidebar = document.querySelector('.mysidebar')
    if (mysidebar.style.display == 'none') {
        mysidebar.style.display = 'block'
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    } else {
        mysidebar.style.display = 'none'
        document.body.style.backgroundColor = "#e6e6e6";
    }

}

function mostraformulario() { // mostra formulário de postagem
    let chamaForm = document.getElementById("chama-form") // pega a div chama form
    let formPostagem = document.getElementById("form-postagem") // pega a div form postagem
    chamaForm.style.display = "none" //oculta a div chama form
    formPostagem.style.display = "block" // exibe a div do formulário

}
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
function postar() {
    let chamaForm = document.getElementById("chama-form") // pega a div chama form
    let formPostagem = document.getElementById("form-postagem") // pega a div form postagem
    chamaForm.style.display = "block" // exibe a div que chama o formulário
    formPostagem.style.display = "none" // oculta a div do formulário

    let formTitulo = document.getElementById("titulo").value // pegando os valores do form
    let formConteudo = document.getElementById("conteudo").value
    let formImagem = document.getElementById("imagem").value

    let postagens = document.getElementById("area-postagens") // pegando a área onde vai ficar a postagem
    let postagem = document.createElement("div") // criar div para postagem
    postagem.classList.add("postagem") // atribuindo a classe para a div postagem
    insertAfter(postagem, postagens.firstElementChild.nextElementSibling) // adiciona o post na área de postagens

    //* elementos do post *
    let titulo = document.createElement("h2") // criar título h2 da postagem
    titulo.innerHTML = formTitulo // adicionou o conteúdo ao título h2
    postagem.appendChild(titulo) // adicionou o título na postagem

    let dataPost = document.createElement("span") // criar elemento span
    dataPost.classList.add("data-postagem") // atribuindo a classe para o span
    let data = new Date() // criar variável para a data e armazena a data atual
    let mes = data.getMonth() + 1 // pega o mês atual

    switch (mes) { // para mudar para o nome do mês por extenso
        case 1:
            mes = "janeiro"
            break
        case 2:
            mes = "fevereiro"
            break
        case 3:
            mes = "março"
            break
        case 4:
            mes = "abril"
            break
        case 5:
            mes = "maio"
            break
        case 6:
            mes = "junho"
            break
        case 7:
            mes = "julho"
            break
        case 8:
            mes = "agosto"
            break
        case 9:
            mes = "setembro"
            break
        case 10:
            mes = "outubro"
            break
        case 11:
            mes = "novembro"
            break
        case 12:
            mes = "dezembro"
            break
    }


    dataPost.innerHTML = `postado em ${data.getDate()} de ${mes} de ${data.getFullYear()}`
    postagem.appendChild(dataPost)

    let imagemPost = document.createElement("img") // criar elemento img
    imagemPost.style.width = "620px"
    imagemPost.src = formImagem
    postagem.appendChild(imagemPost)

    let conteudo = document.createElement("p") // criar conteúdo da postagem
    conteudo.innerHTML = formConteudo // adicionou o conteúdo 
    postagem.appendChild(conteudo) // adicionou o conteúdo na postagem 
    conteudo.setAttribute("id", "conteudo")


}