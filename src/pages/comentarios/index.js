import React, { useState } from "react";
import './style.css'

import { useForm } from "react-hook-form";



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
        const newuser = document.querySelector('.newuser')
        const user1 = document.querySelector('.user1')
        const user2 = document.querySelector('.user2')
        const coment_aria = document.querySelector('.coment_aria')
        const textAria = document.querySelectorAll('.textAria')
        if(textAria.value = ''){
            alert('preencha os campos para enviar')
        } else {
            user1.style.width = '352px'
            user1.style.height = '352px'
            user2.style.height = '352px'
            user2.style.width = '352px'
            newuser.style.width = '352px'
            newuser.style.height = '352px'
            newuser.style.display = 'inline'
            coment_aria.style.display = 'none'
        }
        

    }

    function fazerComentario() {
        const coment_aria = document.querySelector('.coment_aria')
        const textAria = document.querySelector('.textAria')
        textAria.value = ''
        coment_aria.style.display = 'flex'

    }


    return (
        <>
            

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
            <div className="coment_aria">
                <h2 className="doComment">Fazer comentario</h2>
                <div className="inputAria">
                <div className="form-group">
              
            </div>
            <label>Nome</label>
               <input className="textAria" onChange={nomeValue} type="text" placeholder="Seu Nome" /><br></br>
            <label>Mensagem</label>
                <input className="textAria" onChange={mensagemValue} type="text" placeholder="Sua Mensagem" /><br></br>
                     <button onClick={() => enviar()}>Enviar</button>
                    <div className="comentarioPrevius">
                        <h3 className="name">{ `${nome}` }</h3>
                        <p id="comentPrevius">{`${mensagem}`}</p>
                    </div>
                </div>
            </div>
            <div className="fazerComentarioAria">
                <button onClick={() => fazerComentario()} className="button">Fazer Comentario</button>
            </div>


            

        </>
    )
}


export default Comentarios