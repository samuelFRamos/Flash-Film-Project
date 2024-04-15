import React, { useState } from "react";
import './style.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer";


function Comentarios() {
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")

    function nomeValue(evento) {
        setNome(evento.target.value)
    }
    function mensagemValue(evento) {
        setMensagem(evento.target.value)
    }

    function enviar() {
        const coment_aria = document.querySelector('.coment_aria')
        const newuser = document.querySelector('.newuser')
        const user1 = document.querySelector('.user1')
        const user2 = document.querySelector('.user2')
        user1.style.width = '352px'
        user1.style.height = '352px'
        user2.style.height = '352px'
        user2.style.width = '352px'
        newuser.style.width = '352px'
        newuser.style.height = '352px'
        newuser.style.display = 'inline'
        coment_aria.style.display = 'none'

    }

    function fazerComentario() {
        const coment_aria = document.querySelector('.coment_aria')
        const textAria = document.querySelector('.textAria')
        textAria.value = ''
        coment_aria.style.display = 'block'

    }


    return (
        <>
            <Header />

            <div className="coment_aria">
                <div className="inputAria">
                    <input className="textAria" onChange={nomeValue} type="text" placeholder="Seu Nome" />:
                    <input className="textAria" onChange={mensagemValue} type="text" placeholder="Sua Mensagem" />
                    <button onClick={() => enviar()} className="botao"> Enviar </button>
                    <div className="comentarioPrevius">
                        <p id="comentPrevius">{`${nome} :    ${mensagem}`}</p>
                    </div>
                </div>
            </div>
            <h1> Comentários</h1>
            <div className="comentario-content">
                <div className="newuser">
                    <h3>{nome}</h3>
                    <ion-icon className="user-icon" name="contact"></ion-icon><br></br>
                    <span className="comentario">
                        {mensagem}
                    </span>
                </div>
                <div className="user1">
                    <h3>User 1</h3>
                    <ion-icon className="user-icon" name="contact"></ion-icon><br></br>
                    <span className="comentario">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Placeat a in dicta laudantium.
                        Cupiditate impedit soluta inventore mollitia, unde
                        natus culpa similique necessitatibus repudiandae
                        exercitationem reiciendis maiores accusantium
                        quisquam temporibus.
                    </span>


                </div>
                <div className="user2">
                    <h3>User 2</h3>
                    <ion-icon className="user-icon" name="contact"></ion-icon><br></br>
                    <span className="comentario">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Placeat a in dicta laudantium.
                        Cupiditate impedit soluta inventore mollitia, unde
                        natus culpa similique necessitatibus repudiandae
                        exercitationem reiciendis maiores accusantium
                        quisquam temporibus.
                    </span>


                </div>

            </div>
            <div className="fazerComentarioAria">
                <button onClick={() => fazerComentario()} className="button">Fazer Comentario</button>
            </div>


            <Footer />

        </>
    )
}


export default Comentarios