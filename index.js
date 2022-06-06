// LÓGICA PARA LOGIN DE USUÁRIO SEM BANCO DE DADOS 

const user = {
    email: "socialpet@socialpet.com",
    password: 1234,
}


// LOGIN

function validarLogin() {
    let typedEmail = document.getElementById("inputEmail3").value;

    let typedPassword = document.getElementById("inputPassword3").value;

    if(typedEmail == user.email && typedPassword == user.password){
        alert("Login realizado com sucesso!");
        window.location.href = "perfil/perfil.html"
    }else{
        alert("Usuário ou senha incorretos! Tente novamente")
    }

}