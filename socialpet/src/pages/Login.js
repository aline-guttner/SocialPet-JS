import react from 'react';
import './Login.css'
import SPimg from '../imagens/SocialPet.png'


const Login = () =>{
    return(
    <form className='login-form'>
        <img src={SPimg}
            alt="Logo de gato branco caminhado em um fundo laranja e título 'Social Pet' ao lado"/>
        <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
        </div>
        <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Senha</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Senha"/>
            </div>
        </div>
        <button type="submit" aria-label="Botão para fazer login" id="login-button"
            onclick="validarLogin();return false">Log in</button>
        <hr/>
        <span>
            <p id="pinscricao">Não tem uma conta? <a id="inscricao" href="cadastro/cadastro.html">Cadastre-se</a></p>
        </span>
    </form>
    )
}



export default Login;
