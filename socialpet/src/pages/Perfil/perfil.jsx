import React from 'react'

function Perfil(){
    return (
        <React.Fragment>
            <body>
                <div className="row">
                    <div className="col-sm-12">
                        <nav className=" navbar mynavbar"><button onclick="mostrarNavbar()" id="botaoMenu"><img id="menu"
                                    src="../imagens/menu-4-32.png" alt="Menu branco"/></button><img className="logo"
                                src="../imagens/My project.png" alt="Silhueta de gato branco"/>
                        </nav>
                    </div>
                </div>
                <div className="row g-0">

                    <div className="col-md-3 p-3 mysidebar flex-shrink-0 bg-white" style="display:none;">

                        <ul className="list-unstyled ps-0">
                            <li className="mb-1">
                                <button id="perfil" onmouseover="corPerfil()" onmouseout="corPerfil2()"
                                    className="mudacor btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#home-collapse" aria-expanded="true">
                                    <h5><img id="userOrange" src="../imagens/user-16.png" alt="Silhueta de usuário laranja"/><img
                                            style="display:none" id="userWhite" src="../imagens/user-16-white.png"
                                            alt="Silhueta de usuário branca"/><b>
                                            Perfil</b></h5>
                                </button>

                                <div className="collapse show" id="home-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                                        <li><a href="perfil.html" className="colocarsub link rounded">Página inicial</a></li>
                                        <li><a href="#" className="colocarsub link rounded">Amigos</a></li>
                                        <li><a href="#" className="colocarsub link rounded">Fotos</a></li>
                                        <li><a href="#" className="colocarsub link rounded">Eventos</a></li>
                                    </ul>
                                </div>
                            </li>
                            <hr/>
                            <li className="mb-1">
                                <button id="adocaoAnimais" onmouseover="corPatinha()" onmouseout="corPatinha2()"
                                    className="mudacor btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"
                                    data-bs-target="#dashboard-collapse" aria-expanded="true">

                                    <h5><img id="pawOrange" src="../imagens/paw-16.png" alt="Patinha laranja"/><img
                                            style="display:none" id="pawWhite" src="../imagens/paw-16-white.png"
                                            alt="Patinha branca"/> <b>Adoção de animais</b>
                                    </h5>
                                </button>
                                <div className="collapse show" id="dashboard-collapse" style="">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                                        <li><a href="#" className="colocarsub link rounded">Adote um animal</a></li>
                                        <li><a href="#" className="colocarsub link rounded">Anuncie</a></li>

                                    </ul>
                                </div>
                            </li>
                            <hr/>
                            <li className="mb-1">
                                <button aria-label="Botão para ser redirecionado ao feed de notícias" id="feedNoticias"
                                    onmouseover="corFeed()" onmouseout="corFeed2()" className="mudacor btn align-items-center rounded">
                                    <h5><img id="newsOrange" src="../imagens/newspaper-16.png" alt="Jornal laranja"/><img
                                            style="display:none" id="newsWhite" src="../imagens/newspaper-16-white.png"
                                            alt="Jornal branco"/>
                                        <a className="link-feed" href="../feed/feed.html"><b>Feed de notícias</b></a>
                                    </h5>
                                </button>

                            </li>
                            <li className="border-top my-3"></li>
                        </ul>
                    </div>




                    <main className=" col-lg-7 col-md-9 col-sm-12">
                        <section id="fotos-nomes">
                            <img id="backpic" src="tamara-andreeva-priroda-peizazh-gory-altai-zhivotnoe-kot.jpg"
                                alt="Gato laranja e branco de costas com a cabeça virada pra câmera com paisagem montanhosa ao fundo"/>
                            <input className="botao-estilizado" id="backUpload" type="file" name="profile_photo" placeholder="Photo"
                                required="" capture aria-label="Mudar foto da capa"/>
                            <div id="fotos-nomes-todos">
                                <div id="foto-nome-usuario">
                                    <img id="fotoUsuario" src="My project (2).png"
                                        alt="Homem de cabelo castanho com gato malhado no ombro à direita "/>
                                    <input className="botao-estilizado" id="imageUpload" type="file" name="profile_photo"
                                        placeholder="Photo" required="" capture aria-label="Mudar foto de perfil"/>
                                    <p className="nome-usuario">Fulano de Tal</p>
                                </div>
                                <div id="carouselExampleDark2" className="carousel carousel-dark slide carousel-pets"
                                    data-bs-ride="carousel" data-bs-interval="99999999999999">

                                    <div className="carousel-inner" id="carouselInnerPet">
                                        <div className="carousel-item active">
                                            <div className="row rowPets fotos-nomes-animais">
                                                <div className="col pet container foto-nome-animal" id="cadastro1">
                                                    <img className=" foto-animal" src="catcouch.jpg"
                                                        alt="Gato preto e branco em cima do encosto do sofá"/><input
                                                        className="botaobicho botao-estilizado" type="file" name="profile_photo"
                                                        placeholder="Photo" required="" capture aria-label="Trocar foto do animal"/>
                                                    <p className="nome-animal">Bichano</p>
                                                </div>
                                                <div className="col pet container foto-nome-animal" id="cadastro2">
                                                    <img className=" foto-animal" src="cat3.jpeg"
                                                        alt="Gato malhado de frente para a câmera"/><input
                                                        className="botaobicho botao-estilizado" type="file" name="profile_photo"
                                                        placeholder="Photo" required="" capture aria-label="Trocar foto do animal"/>
                                                    <p className="nome-animal">Gatildo</p>
                                                </div>
                                                <div className="col pet container foto-nome-animal" id="cadastro3">
                                                    <img className=" foto-animal" src="cat2.jpeg"
                                                        alt="Filhote de gato branco dormindo de barriga pra cima com as patinhas dianteiras unidas"/><input
                                                        className="botao-estilizado botaobicho" type="file" name="profile_photo"
                                                        placeholder="Photo" required="" capture aria-label="Trocar foto do animal"/>
                                                    <p className="nome-animal">Porcão</p>
                                                </div>

                                            </div>
                                        </div>

                                        <button className="carousel-control-prev" style="display: none" type="button"
                                            data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next carousel-pet-next" type="button"
                                            data-bs-target="#carouselExampleDark2" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span></button>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section id="info">

                            <form action="">
                                <h5 id="dados" d><b>Dados</b></h5><button className="editar btn button"
                                    aria-label="Botão para liberar a edição das informações do usuário" type="button">Editar
                                </button><button id="salvandoUser" className="salvar btn button " type="button">Salvar</button>
                                <div id="info-usuario">

                                    <h6>Email</h6>
                                    <div className="dado">
                                        <p>fulano@detal.com</p>


                                    </div>
                                    <hr/>
                                    <h6>Usuário</h6>

                                    <div className="dado">
                                        <input className="botao-estilizado readonlyUser" placeholder="fulano.detal" type="text"
                                            aria-label="Mudar usuário" readonly/>

                                    </div>
                                    <hr/>
                                    <h6>Nome </h6>

                                    <div className="dado">
                                        <input className="botao-estilizado readonlyUser" id="novoNome" value="Fulano de tal" type="text"
                                            aria-label="Mudar nome do usuário" readonly/>

                                    </div>
                                    <hr/>

                                    <h6>Celular</h6>
                                    <div className="dado telefone">
                                        <input type="tel" id="phone" className="botaoInfoUser readonlyUser"
                                            aria-label="Salvar número de telefone" readonly/>

                                    </div>


                                    <hr/>
                                    <h6>Data de nascimento</h6>
                                    <div className="dado">
                                        <input className="botao-estilizado readonlyUser" type="date"
                                            aria-label="Mudar data de nascimento" readonly/>
                                {/* adicionado depois - alterado */}
                                </div> 

                                    <hr/>
                                </div>
                            </form>
                {/* </div> retirado */}
                <img id="seta-direita" onclick="abrirDados()" src="setaDireita.png"
                    alt="Símbolo de seta laranja apontando para a direita"/>
                <div id="info-animais" style="display: none;">


                    <h5 id="pets" d><b>Pets</b></h5>

                    <table id="tabela-animais">
                        <thead>
                            <tr>
                                <td>Nome</td>

                                <td>Tipo</td>

                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr id="cadastro1" className="umanimal">
                                <td><input required className="animalMudarNome botao-estilizado" type="text" value="Bichano"
                                        aria-label="Digitar nome do animal"/>
                                </td>

                                <td>
                                    <div className="form-group">

                                        <select className="form-control" id="sel1">
                                            <option>Gato</option>
                                            <option>Cachorro</option>
                                            <option>Pássaro</option>
                                            <option>Cavalo</option>
                                            <option>Outro</option>
                                        </select>
                                    </div>
                                </td>
                                <td><button className="salvar salvar-animal btn button" type="submit">Salvar</button></td>
                                <td><img className="maisinho invisivel" src="plus-16.png" alt="Símbolo de adição laranja"/></td>
                                <td><img src="x-mark-16.png" className="xis" alt="Xis laranja"/></td>

                            </tr>
                            <tr id="cadastro2" className="umanimal">
                                <td><input className="animalMudarNome botao-estilizado" type="text" value="Gatildo"
                                        aria-label="Digitar nome do animal"/></td>

                                <td>
                                    <div className="form-group">

                                        <select className="form-control" id="sel1">
                                            <option>Gato</option>
                                            <option>Cachorro</option>
                                            <option>Pássaro</option>
                                            <option>Cavalo</option>
                                            <option>Outro</option>
                                        </select>
                                    </div>
                                </td>

                                <td><button className="salvar salvar-animal btn button" type="submit">Salvar</button></td>
                                <td><img className="maisinho invisivel" src="plus-16.png" alt="Símbolo de adição laranja"/></td>
                                <td><img src="x-mark-16.png" className="xis" alt="Xis laranja"/></td>
                            </tr>
                            <tr id="cadastro3" className="umanimal">
                                <td><input className="animalMudarNome botao-estilizado" type="text" value="Porcão"
                                        aria-label="Digitar nome do animal"/></td>

                                <td>
                                    <div className="form-group">

                                        <select className="form-control" id="sel1">
                                            <option>Gato</option>
                                            <option>Cachorro</option>
                                            <option>Pássaro</option>
                                            <option>Cavalo</option>
                                            <option>Outro</option>
                                        </select>
                                    </div>
                                </td>

                                <td><button className="salvar salvar-animal btn button" type="submit">Salvar</button></td>
                                <td><img className="maisinho invisivel" src="plus-16.png" alt="Símbolo de adição laranja"/></td>
                                <td><img src="x-mark-16.png" className="xis" alt="Xis laranja"/></td>
                            </tr>
                        </tbody>

                    </table>
                    <img src="plus-16.png" id="mais" onclick="addPet()" alt="Símbolo de adição laranja"/>

                </div>
                </section>
                <section className="container" id="amigos">
                    <h5><b>Amigos</b></h5>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel"
                        data-bs-interval="99999999999999">

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row rowAmigos">
                                    <div className="col amigo container">
                                        <img src="pessoas/avatar-4dce7152af91c3f3c100b6ac78878612.jpg"
                                            className="d-block w-100 imgPessoa img-fluid" alt="Foto de mulher idosa de óculos"/>
                                        <p>Luísa Morgona</p>
                                    </div>
                                    <div className="col amigo container">
                                        <img src="pessoas/avatar-7fc07e1286325763e60e8e981705e27b.jpg"
                                            className="imgPessoa d-block w-100 img-fluid" alt="..."/>
                                        <p>Marcia dos Santos</p>
                                    </div>
                                    <div className="col amigo container">
                                        <img src="pessoas/avatar-860235f9e778df474c0d708d2753d4c7.jpg"
                                            className="imgPessoa d-block w-100 img-fluid" alt="..."/>
                                        <p>Luana Bardine</p>
                                    </div>
                                    <div className="col amigo container">
                                        <img src="pessoas/avatar-860235f9e778df474c0d708d2753d4c7.jpg"
                                            className="imgPessoa d-block w-100 img-fluid" alt="..."/>
                                        <p>Rogéria Severina</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row rowAmigos">
                                    <div className="col amigo container">
                                        <img src="pessoas/avatar-4dce7152af91c3f3c100b6ac78878612.jpg"
                                            className="d-block w-100 imgPessoa img-fluid" alt="Foto de mulher idosa de óculos"/>
                                        <p>Luísa Morgona</p>
                                    </div>
                                    <div className="col amigo container">
                                        <img src="pessoas/avatar-7fc07e1286325763e60e8e981705e27b.jpg"
                                            className="imgPessoa d-block w-100 img-fluid" alt="..."/>
                                        <p>Marcia dos Santos</p>
                                    </div>
                                    <div className="col amigo container">
                                        <img src="pessoas/avatar-860235f9e778df474c0d708d2753d4c7.jpg"
                                            className="imgPessoa d-block w-100 img-fluid" alt="..."/>
                                        <p>Luana Bardine</p>
                                    </div>
                                    <div className="col amigo container">
                                        <img src="pessoas/avatar-860235f9e778df474c0d708d2753d4c7.jpg"
                                            className="imgPessoa d-block w-100 img-fluid" alt="..."/>
                                        <p>Rogéria Severina</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <button className="btn button" type="button" id="verTudo">Ver tudo </button>
                        {/* div adicionada - alterado */}
                    </div>
                </section>

                </main>
                <aside style="display:none;" className="col-lg-2 container" id="subscription">
                    <img src="../imagens/Frame 1.png" className="img-fluid" alt=""/>
                </aside>
                </div>

            </body>
        </React.Fragment>
            )
}

export default Perfil