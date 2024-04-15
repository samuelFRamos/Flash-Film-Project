import React from "react";
import './style.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer";


function Contato() {

    function enviar() {

        const textAria1 = document.getElementById('textAria1')
        const textAria2 = document.getElementById('textAria2')
        const textAria3 = document.getElementById('textAria3')
        const erroTextAria1 = document.querySelector('.erroTextAria1')
        const erroTextAria2 = document.querySelector('.erroTextAria2')
        const erroTextAria3 = document.querySelector('.erroTextAria3')
        const form = document.querySelector('.form')


        if (!textAria1.value) {
            erroTextAria1.style.display = 'flex'
        }
        if (!textAria2.value) {
            erroTextAria2.style.display = 'flex'
        }
        if (!textAria3.value) {
            erroTextAria3.style.display = 'flex'
        }
        if (textAria3.value && textAria2.value && textAria1.value) {
            alert('ok')
        }


    }

    return (
        <>
            <Header />
            <form className="form">
                <h2>CONTATE-NOS</h2>
                <div className="formAria">
                    <input id="textAria1" type="text" placeholder="Digite seu nome" /> <br></br>
                    <div className="erroTextAria1">
                        Campo em branco
                    </div>
                    <input id="textAria2" type="email" placeholder="Digite um E-mail valido" /> <br></br>
                    <div className="erroTextAria2">
                        Campo em branco
                    </div>
                    <input id="textAria3" type="text" placeholder="Digite a Mensagem" /> <br></br>
                    <div className="erroTextAria3">
                        Campo em branco
                    </div>
                    <input type="button" id="button" onClick={() => enviar()} value={'Enviar'} />
                    <p id="concluido"></p>
                </div>
            </form>
            <div className="obg">
                <h2>Obrigado!</h2>
            </div>
            <Footer />
        </>
    )
}


export default Contato