$("#fotoUsuario").click(function (e) {
    $("#imageUpload").click();
});

let file = document.getElementById("imageUpload")
let img = document.getElementById("fotoUsuario")

file.addEventListener('change', function () {
    const choosenFile = this.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(choosenFile);
    if (choosenFile) {
        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
            img.style.height = "120px";
            img.style.width = "120px";
        });

    }
})

$('.foto-animal').click(function (e) {
    let fotobicho = document.getElementsByClassName('foto-animal')
    let botaobicho = document.getElementsByClassName('botaobicho')
    for (i = 0; i < fotobicho.length; i++) {
        botaobicho[i].click()
        botaobicho[i].addEventListener('change', function () {
            const chosenPic = this.files[0]
            const reader2 = new FileReader()
            reader2.readAsDataURL(chosenPic)
            if (chosenPic) {
                reader2.addEventListener('load', function () {
                    fotobicho[i].setAttribute('src', reader2.result)
                    fotobicho[i].style.height = "60px";
                    fotobicho[i].style.width = "60px";
                })

                Event.stopPropagation();
            }

        })
        Event.stopPropagation();
    }
})

function abrirDados() {
    let infoAnimais = document.getElementById('info-animais')
    let source = document.getElementById('seta-direita')
    if (infoAnimais.style.display == "none") {
        infoAnimais.style.display = "flex";
        source.src = "setaBaixo.png";
    } else {
        infoAnimais.style.display = "none";
        source.src = "setaDireita.png";
    }


}

function addPet() {
    let animais = document.getElementById('tabela-animais')
    let animal = document.createElement('tr')
    animal.classList.add('umanimal')

    let tdNome = document.createElement('td')
    let tdTipo = document.createElement('td')
    let tdSalvar = document.createElement('td')
    let tdAdicionar = document.createElement('td')
    let tdExcluir = document.createElement('td')

    let nomeAnimal = document.createElement('input')
    nomeAnimal.setAttribute('type', 'text')
    nomeAnimal.setAttribute('placeholder', 'Nome do pet')
    nomeAnimal.setAttribute('aria-label', 'Digitar nome do animal')
    nomeAnimal.classList.add('botao-estilizado', 'animal-mudar-nome')

    tdNome.appendChild(nomeAnimal)

    let divTipoAnimal = document.createElement('div')
    let tipoAnimal = document.createElement('select')
    divTipoAnimal.classList.add('form-group')
    tipoAnimal.classList.add('form-control')
    tipoAnimal.setAttribute('name', 'tipos')

    let option1 = document.createElement('option')
    option1.innerText = 'Gato'
    let option2 = document.createElement('option')
    option2.innerText = 'Cachorro'
    let option3 = document.createElement('option')
    option3.innerText = 'Pássaro'
    let option4 = document.createElement('option')
    option4.innerText = 'Cavalo'
    let option5 = document.createElement('option')
    option5.innerText = 'Outro'

    tipoAnimal.append(option1, option2, option3, option4, option5)
    divTipoAnimal.appendChild(tipoAnimal)

    tdTipo.appendChild(divTipoAnimal)

    let salvar = document.createElement('button')
    salvar.classList.add('salvar', 'salvar-animal', 'btn', 'button')

    tdSalvar.appendChild(salvar)

    let maisinho = document.createElement('img')
    maisinho.setAttribute('src', 'plus-16.png')
    maisinho.setAttribute('alt', 'Símbolo de adição laranja')
    maisinho.classList.add('maisinho')


    let classMaisinho = document.getElementsByClassName('maisinho')
    for (i = 0; i < classMaisinho.length; i++) {

        classMaisinho[i].on('click', function (e) {
            let fotosNomesAnimais = document.getElementById('fotos-nomes-animais')

            let novoanimal = document.createElement('div')
            novoanimal.classList.add('foto-nome-animal')

            let newid = Math.floor(Math.random() * 10000)

            let umanimal = document.getElementsByClassName('umanimal')
            //resolver problema com índices (criar div só pra esse animal)
            umanimal[i].setAttribute('id', newid)

            novoanimal.setAttribute('id', newid)

            let novafoto = document.createElement('img')
            novafoto.classList.add('foto-animal')
            novafoto.setAttribute('src', 'cameraCinza.jpg')



            let nomeani = document.createElement('p')
            nomeani.classList.add('nome-animal')
            let nomedoanimal = document.getElementsByClassName('animal-mudar-nome')
            nomeani.innerText = nomedoanimal[i].value

            let botaobicho = document.createElement('input')
            botaobicho.classList.add('botaobicho')
            botaobicho.setAttribute('type', 'file')
            botaobicho.setAttribute('name', 'profile-photo')
            botaobicho.setAttribute('placeholder', 'Photo')
            botaobicho.setAttribute('required', '')
            botaobicho.setAttribute('capture', '')
            botaobicho.setAttribute('aria-label', 'Trocar foto do animal')

            novoanimal.append(novafoto, nomeani, botaobicho)
            fotosNomesAnimais.appendChild(novoanimal)
            maisinho.remove()
        })


    }



    tdAdicionar.appendChild(maisinho)

    let xis = document.createElement('img')
    xis.setAttribute('src', 'x-mark-16.png')
    xis.classList.add('xis')
    xis.addEventListener('click', function (e) {
        const cadastroId = e.currentTarget.parentNode.parentNode.id;
        const trToBeRemoved = e.currentTarget.parentNode.parentNode;
        trToBeRemoved.remove()
        const tagToBeRemoved = document.getElementById(cadastroId)
        tagToBeRemoved.remove()

    })
    tdExcluir.appendChild(xis)

    animal.append(tdNome, tdTipo, tdSalvar, tdAdicionar, tdExcluir)

    let tbody = document.querySelector('tbody')
    tbody.appendChild(animal)
}

















$('.xis').click(function (e) {
    const cadastroId = e.currentTarget.parentNode.parentNode.id;
    const trToBeRemoved = e.currentTarget.parentNode.parentNode;
    trToBeRemoved.remove()
    const tagToBeRemoved = document.getElementById(cadastroId)
    tagToBeRemoved.remove()
})


$('document').ready(function (e) {
    document.getElementById("postagensUsuario").innerHTML =
        '<object type="text/html" style="height:100%" width="100%" data="../Feed/feed.html"></object>';

})

function salvarNome() {
    let novoNome = document.getElementById('novoNome').value
    document.querySelector('.nome-usuario').innerHTML = novoNome
}

$('.salvar-animal').click(function (e) {
    let salvarAnimal = document.getElementsByClassName('salvar-animal')
    for (i = 0; i < salvarAnimal.length; i++) {
        let nomeAnimal = document.getElementsByClassName('nomeAnimal')[i].value
        document.getElementsByClassName('bichop')[i].innerHTML = nomeAnimal

    }
})



//refazendo




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