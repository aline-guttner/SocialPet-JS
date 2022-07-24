import react from 'react';
import SPpng from './asssets/SocialPet.png'

function Home() {
    return (
    <div className='container'>
        <div className='container-login'>
            <div className="wrap-login">
                <form className='login-form'>
                    <span className='image-form'>
                        <img src={SPpng} alt="social-pet"/>  
                    </span>
                    <span className='title-form'></span>
                    <div className='wrap-input'>
                        <input type="eamil"/>
                        <span className='focus-input' data-placeholder="Email"></span>
                    </div>

                    <div className='wrap-input'>
                        <input type="password"/>
                        <span className='focus-input' data-placeholder="Password"></span>
                    </div>

                    <div className='container-login-form-btn'>
                        <button className='login-form-btn'>Log In</button>
                    </div>

                    <div className='text-center'>
                        <span className='label-inscricao'>Não tem uma conta? </span>

                        <a className='inscricao'href='/'>Cadastre-se!</a>
                    </div>




                </form>
            </div>

        </div>
    </div>
    )
     
    
}

export default Home;