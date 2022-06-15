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

$("#backpic").click(function (e) {
    $("#backUpload").click();
});

let file2 = document.getElementById("backUpload")
let img2 = document.getElementById("backpic")

file2.addEventListener('change', function () {
    const choosenFile = this.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(choosenFile);
    if (choosenFile) {
        reader.addEventListener('load', function () {
            img2.setAttribute('src', reader.result);
            img2.style.height = "50%";
            img2.style.width = "100%";
            img2.style.objectFit = "cover";
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

    maisinhoImg.addEventListener('click', function (e) {
        var el = $(this).index();
        function isEmpty(str) {
            return !str.trim().length;
        }
        if (isEmpty(e.currentTarget.parentNode.parentNode.firstChild.firstChild.value)) {
            return;
        } else {

            console.log(el)
            let fotosNomesAnimais = document.getElementById('fotos-nomes-animais')

            let novoanimal = document.createElement('div')
            novoanimal.classList.add('foto-nome-animal')

            let newid = Math.floor(Math.random() * 10000)

            let umanimal = document.getElementsByClassName('umanimal')
            //resolver problema com índices (criar div só pra esse animal)
            umanimal[el].setAttribute('id', newid)

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
            console.log(nomedoanimal)
            nomeani.innerText = nomedoanimal.value



            novoanimal.append(novafoto, nomeani, botaobicho)
            fotosNomesAnimais.appendChild(novoanimal)
            maisinhoImg.remove()
        }

    })

    tdAdicionar.appendChild(maisinhoImg)

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


let carouselInner = document.getElementById('carouselInnerPet')





function addPet() {

    $('#mais').css('visibility', "hidden")

    let animais = document.getElementById('tabela-animais')
    let animal = document.createElement('tr')
    animal.classList.add('umanimal', 'animalAdicionado')
    let newid = Math.floor(Math.random() * 10000000)
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

    maisinhoImg.addEventListener('click', function (e) {

        $('#mais').css('visibility', "visible")


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

            nomeani.innerText = nomedoanimal.value

            //let fotosNomesAnimais = carouselInner.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild

            novoanimal.append(novafoto, nomeani, botaobicho)

            let lastAnimal = carouselInner.lastElementChild.lastElementChild




            console.log($('#carouselInnerPet').find('div.row').length)

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
                let row = carouselInner.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild


                row.appendChild(novoanimal)
            }

            maisinhoImg.remove()

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

        trToBeRemoved.remove()

        const tagToBeRemoved = document.getElementById(cadastroId)
        console.log(tagToBeRemoved.parentNode.querySelectorAll('.foto-nome-animal').length)

        if (tagToBeRemoved.parentNode.querySelectorAll('.foto-nome-animal').length > 1) {
            tagToBeRemoved.remove()

        } else {
            let carouselItem = tagToBeRemoved.parentNode.parentNode
            carouselItem.classList.remove('active')
            if (carouselItem.previousElementSibling) {
                carouselItem.previousElementSibling.classList.add('active')
                carouselItem.remove()
            } else {
                carouselItem.remove()
            }

        }
        if ($('#carouselInnerPet').find('div.row').length <= 1) {

            $('.carousel-pet-next').css('visibility', 'hidden')
        } else {

            $('.carousel-pet-next').css('visibility', 'visible')
        }

    })

    tdExcluir.appendChild(xis)

    animal.append(tdNome, tdTipo, tdSalvar, tdAdicionar, tdExcluir)

    let tbody = document.querySelector('tbody')
    tbody.appendChild(animal)


}

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





$('document').ready(function (e) {
    document.getElementById("postagensUsuario").innerHTML =
        '<object type="text/html" style="height:100%" width="100%" data="../Feed/feed.html"></object>';

})

function salvarUser() {
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

$('.editar').hover(hoverEditar, leaveEditar
)


function hoverEditar(e) {
    let lapinho = document.getElementsByClassName('lapinho')
    for (i = 0; i < lapinho.length; i++) {
        lapinho[i].style.display = "inline"
    }
}

function leaveEditar(e) {
    let lapinho = document.getElementsByClassName('lapinho')
    for (i = 0; i < lapinho.length; i++) {
        lapinho[i].style.display = "none"
    }
}

$('.editar').click(function () {
    $('.readonlyUser').removeAttr('readonly')
    let readonlyUser = document.querySelectorAll('.readonlyUser')
    readonlyUser.forEach(btn => {
        btn.classList.add('underline')
    })
    let salvar = document.querySelectorAll('.salvar')
    salvar.forEach(btnSalvar => {
        btnSalvar.style.display = 'inline'
    })
    let editar = document.querySelectorAll('.editar')
    editar.forEach(btnEditar => {
        btnEditar.style.display = 'none'
    })

})

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
})

$('.editarPet').click(function () {
    $('.readonly').removeAttr('readonly')
    let readonly = document.querySelectorAll('.readonly')
    readonly.forEach(btn => {
        btn.classList.add('underline')
    })
    let salvarPet = document.querySelectorAll('.salvarPet')
    salvarPet.forEach(btnSalvar => {
        btnSalvar.style.display = 'inline'
    })
    let editarPet = document.querySelectorAll('.editarPet')
    editarPet.forEach(btnEditar => {
        btnEditar.style.display = 'none'
    })

})

$('.salvarPet').click(function () {
    $('.readonly').prop('readonly', true)
    let readonly = document.querySelectorAll('.readonly')

    readonly.forEach(btn => {
        btn.classList.remove('underline')

    })
    let editarPet = document.querySelectorAll('.editarPet')
    editarPet.forEach(btnEditar => {
        btnEditar.style.display = 'inline'
    })
    let salvarPet = document.querySelectorAll('.salvarPet')
    salvarPet.forEach(btnSalvar => {
        btnSalvar.style.display = 'none'
    })
})

if ($('#carouselInnerPet').find('div.row').length <= 1) {

    $('.carousel-pet-next').css('visibility', 'hidden')
} else {

    $('.carousel-pet-next').css('visibility', 'visible')
}