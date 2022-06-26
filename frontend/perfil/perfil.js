// função para abrir o seletor de arquivos e mudar a foto de perfil, não sei bem com funciona cada parte, só vi um tutorial no YouTube

$("#fotoUsuario").click(function (e) {
    $("#imageUpload").click();
});

let file = document.getElementById("imageUpload")
let img = document.getElementById("fotoUsuario")

file.addEventListener('change', function () {
    const chosenFile = this.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(chosenFile);
    if (chosenFile) {
        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
            img.style.height = "120px";
            img.style.width = "120px";
        });

    }
})


// mesma coisa que a função anterior, só que pra imagem de fundo
$("#backpic").click(function (e) {
    $("#backUpload").click();
});

let file2 = document.getElementById("backUpload")
let img2 = document.getElementById("backpic")

file2.addEventListener('change', function () {
    const chosenFile = this.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(chosenFile);
    if (chosenFile) {
        reader.addEventListener('load', function () {
            img2.setAttribute('src', reader.result);
            img2.style.height = "50%";
            img2.style.width = "100%";
            img2.style.objectFit = "cover";
        });

    }
})

// mesma coisa que a função anterior, só que pra imagem dos animais

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


// essa função abre a parte que tem a tabela onde é possível adicionar animais, e muda a posição da setinha para baixo
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

let carouselInner = document.getElementById('carouselInnerPet')
// essa função adiciona uma linha na tabela para poder adicionar um pet
function addPet() {
    // esconder o "+" que fica embaixo da tabela faz com que só seja possível adicionar um animal de cada vez
    $('#mais').css('visibility', "hidden")

    let animais = document.getElementById('tabela-animais')
    let animal = document.createElement('tr')
    animal.classList.add('umanimal', 'animalAdicionado')
    let newid = Math.floor(Math.random() * 10000000)
    // por enquanto usei esse método para gerar um id, mas quando for usar o mongodb não vai mais precisar disso
    animal.setAttribute('id', newid)

    let tdNome = document.createElement('td')
    let tdTipo = document.createElement('td')
    let tdSalvar = document.createElement('td')
    let tdAdicionar = document.createElement('td')
    let tdExcluir = document.createElement('td')

    let nomeAnimal = document.createElement('input')
    nomeAnimal.setAttribute('type', 'text')
    nomeAnimal.setAttribute('placeholder', 'Nome do pet')
    nomeAnimal.setAttribute('aria-label', 'Digitar nome do animal')
    nomeAnimal.classList.add('botao-estilizado', 'animalMudarNome')


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

    let maisinhoImg = document.createElement('img')
    maisinhoImg.setAttribute('src', 'plus-16.png')
    maisinhoImg.setAttribute('alt', 'Símbolo de adição laranja')
    maisinhoImg.classList.add('maisinho')

    // essa função abaixo adiciona o novo pet ao carrossel que contém as fotos dos pets.
    maisinhoImg.addEventListener('click', function (e) {

        $('#mais').css('visibility', "visible")

        // essa função faz com que não seja possível adicionar um pet com um nome vazio ao carrossel
        function isEmpty(str) {
            return !str.trim().length;
        }
        if (isEmpty(e.currentTarget.parentNode.parentNode.firstChild.firstChild.value)) {
            return;
        } else {
            var el = $(this).index();

            let carouselInner = document.getElementById('carouselInnerPet')

            let novoanimal = document.createElement('div')
            novoanimal.classList.add('col', 'pet', 'container', 'foto-nome-animal')
            // foi um amigo programador que recomendou eu dar o mesmo id tanto para a linha da tabela que tem o animal quanto para a div do carrossel, para que depois eu possa excluir os dois juntos
            novoanimal.setAttribute('id', newid)

            let botaobicho = document.createElement('input')
            botaobicho.classList.add('botaobicho')
            botaobicho.setAttribute('type', 'file')
            botaobicho.setAttribute('name', 'profile-photo')
            botaobicho.setAttribute('placeholder', 'Photo')
            botaobicho.setAttribute('required', '')
            botaobicho.setAttribute('capture', '')
            botaobicho.setAttribute('aria-label', 'Trocar foto do animal')

            let novafoto = document.createElement('img')
            novafoto.classList.add('foto-animal')

            novafoto.setAttribute('src', 'cameraCinza.jpg')

            novafoto.addEventListener('click', function (e) {

                botaobicho.click()
                botaobicho.addEventListener('change', function () {
                    const chosenPic = this.files[0]
                    const reader2 = new FileReader()
                    reader2.readAsDataURL(chosenPic)
                    if (chosenPic) {
                        reader2.addEventListener('load', function () {
                            novafoto.setAttribute('src', reader2.result)
                            novafoto.style.height = "60px";
                            novafoto.style.width = "60px";
                        })

                        Event.stopPropagation();
                    }

                })
            })



            let nomeani = document.createElement('p')
            nomeani.classList.add('nome-animal')

            let nomedoanimal = e.currentTarget.parentNode.parentNode.firstChild.firstChild

            nomeani.innerText = nomedoanimal.value // deixando o nome embaixo da foto do animal igual ao que foi colocado no input


            novoanimal.append(novafoto, nomeani, botaobicho)

            let lastAnimal = carouselInner.lastElementChild.lastElementChild

            // se não tiver nenhuma div com a class row (se o usuário não tiver nenhum animal) ou se a última div com a class row tiver 3 ou mais filhos, cria-se uma nova div carousel-item com uma div row dentro dela para colocar novos filhos até dar 3. Eu não usei o || porque dava erro quando não havia nenhuma div row
            if ($('#carouselInnerPet').find('div.row').length == 0) {
                let carouselItem = document.createElement('div')
                carouselItem.classList.add('carousel-item', 'active')

                row = document.createElement('div')
                row.classList.add('row', 'rowPets', 'fotos-nomes-animais', 'bla')

                row.appendChild(novoanimal)
                carouselItem.appendChild(row)

                let lastButton = carouselInner.lastElementChild.previousElementSibling

                carouselInner.insertBefore(carouselItem, lastButton)
                let childrenLenght = carouselInner.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.childNodes.length

            } else if (carouselInner.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.childNodes.length >= 3) {
                let carouselItem = document.createElement('div')
                carouselItem.classList.add('carousel-item')

                row = document.createElement('div')
                row.classList.add('row', 'rowPets', 'fotos-nomes-animais', 'bla')

                row.appendChild(novoanimal)
                carouselItem.appendChild(row)

                let lastButton = carouselInner.lastElementChild.previousElementSibling

                carouselInner.insertBefore(carouselItem, lastButton)
                let childrenLenght = carouselInner.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.childNodes.length



            } else {
                // caso haja uma div que tenha apenas 1 ou 2 filhos, adiciona na mesma div sem criar uma nova
                let row = carouselInner.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild


                row.appendChild(novoanimal)
            }
            // quando o animal é adicionado, o "+" some 
            maisinhoImg.remove()

            // o if abaixo só deixa aparecer a setinha do carrossel se o usuário tiver mais de 3 pets, ou seja, mais de uma div com a class row
            if ($('#carouselInnerPet').find('div.row').length <= 1) {

                $('.carousel-pet-next').css('visibility', 'hidden')
            } else {

                $('.carousel-pet-next').css('visibility', 'visible')
            }
        }

    })

    tdAdicionar.appendChild(maisinhoImg)

    let xis = document.createElement('img')
    xis.setAttribute('src', 'x-mark-16.png')
    xis.classList.add('xis')
    xis.addEventListener('click', function (e) {
        const cadastroId = e.currentTarget.parentNode.parentNode.id;

        const trToBeRemoved = e.currentTarget.parentNode.parentNode;

        trToBeRemoved.remove() // remove a tr do animal que o usuário quer remover

        const tagToBeRemoved = document.getElementById(cadastroId)


        if (tagToBeRemoved.parentNode.querySelectorAll('.foto-nome-animal').length > 1) {
            tagToBeRemoved.remove() // remove só a div que contem a foto e o nome do animal, caso a div do carrossel que o contém tenha mais de 1 filho

        } else {
            let carouselItem = tagToBeRemoved.parentNode.parentNode
            carouselItem.classList.remove('active')
            if (carouselItem.previousElementSibling) {
                carouselItem.previousElementSibling.classList.add('active') // caso exista, a div anterior que contém animais se torna o item ativo do carrossel se o animal excluído pertencer a uma div com apenas 1 animal, pois essa div será excluída para não ficar uma div vazia.
                carouselItem.remove()
            } else {
                carouselItem.remove() // caso não exista uma div anterior com animais, apenas excluí o item do carrossel que tem esse animal
            }

        }
        if ($('#carouselInnerPet').find('div.row').length <= 1) {

            $('.carousel-pet-next').css('visibility', 'hidden')
        } else {

            $('.carousel-pet-next').css('visibility', 'visible')
        }

        // apenas esconde o "nome" e "tipo" da tabela, casa não haja nenhum animal nela
        if ($('tbody').children().length == 0) {
            $("thead").hide();
        } else {
            $("thead").show();
        }
    })

    tdExcluir.appendChild(xis)

    animal.append(tdNome, tdTipo, tdSalvar, tdAdicionar, tdExcluir)

    let tbody = document.querySelector('tbody')
    tbody.appendChild(animal)


}

// mesma coisa que a função de excluir os animais acima, só que pros animais que já existem (que o usuário não adicionou, tipo Gatildo, Bichano, etc)
$('.xis').click(function (e) {
    const cadastroId2 = e.currentTarget.parentNode.parentNode.id;


    const trToBeRemoved2 = e.currentTarget.parentNode.parentNode;

    trToBeRemoved2.remove()

    const tagToBeRemoved2 = document.getElementById(cadastroId2)



    if (tagToBeRemoved2.parentNode.children.length > 1) {
        tagToBeRemoved2.remove()
    } else {
        let carouselItem = tagToBeRemoved2.parentNode.parentNode
        carouselItem.classList.remove('active')
        if (carouselItem.previousElementSibling) {
            carouselItem.previousElementSibling.classList.add('active')
            carouselItem.remove()
        } else {
            carouselItem.remove()
        }

    }
    if ($('tbody').children().length == 0) {
        $("thead").hide();
    } else {
        $("thead").show();
    }

})


function salvarUser() {
    let novoNome = document.getElementById('novoNome').value
    document.querySelector('.nome-usuario').innerHTML = novoNome
}


// as funções de cor abaixo apenas mudam o ícone dos itens principais do menu lateral e a background color deles quando passa o mouse por cima

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

// função que esconde ou mostra a navbar lateral quando clica no ícone no lado superior esquero da página. Esse ícone só aparece quando a tela for pequena; nesse caso, o menu é escondido automaticamente.
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

// a função abaixo faz com que os inputs do usuário percam a propriedade "readonly", ou seja, se tornem editáveis. Também criam um underline laranja embaixo dos inputs para que o usário perceba que pode editar eles. 
$('.editar').click(function () {
    $('.readonlyUser').removeAttr('readonly')
    let readonlyUser = document.querySelectorAll('.readonlyUser')
    readonlyUser.forEach(btn => {
        btn.classList.add('underline')
    })
    let salvar = document.querySelectorAll('.salvar')
    salvar.forEach(btnSalvar => {
        // Quando o usuário clica em editar, o botão editar some e o de salvar aparece e vice-versa.
        btnSalvar.style.display = 'inline'
    })
    let editar = document.querySelectorAll('.editar')
    editar.forEach(btnEditar => {
        btnEditar.style.display = 'none'
    })

})

// torna os inputs das informações do usuário não editáveis e salva o nome do usuário
$('.salvar').click(function () {

    $('.readonlyUser').prop('readonly', true)
    let readonlyUser = document.querySelectorAll('.readonlyUser')

    readonlyUser.forEach(btn => {
        btn.classList.remove('underline')

    })
    let editar = document.querySelectorAll('.editar')
    editar.forEach(btnEditar => {
        btnEditar.style.display = 'inline'
    })
    let salvar = document.querySelectorAll('.salvar')
    salvar.forEach(btnSalvar => {
        btnSalvar.style.display = 'none'
    })
    salvarUser()
})

if ($('#carouselInnerPet').find('div.row').length <= 1) {

    $('.carousel-pet-next').css('visibility', 'hidden')
} else {

    $('.carousel-pet-next').css('visibility', 'visible')
}