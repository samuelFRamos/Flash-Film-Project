import React from "react";
import Header from "../../components/header/header";
import '../home/style.css'
import Trailer from '../../assets/Video.mp4'
import Cards from "../../components/cards";
import Footer from "../../components/footer";



function Home() {
    return (
        <>
            <Header />
            <div id="banner"></div>
            <div className="trayler-content">
                <div className="container">
                    <video controls className="trailer">
                        <source src={Trailer} />
                        Seu navegador não possui suporte para videos
                    </video>

                    <div id="sinopse">
                        <p className="description">
                            Os mundos colidem quando Flash viaja no tempo para
                            mudar os eventos do passado. No entanto, quando sua
                            tentativa de salvar sua família altera o futuro, ele fica
                            preso em uma realidade na qual o General Zod voltou,
                            ameaçando a aniquilação.
                        </p>
                        <button className="button">Comprar ingresso</button>
                    </div>
                </div>
            </div>

            <Cards />
            <Footer />
        </>
    )
}

export default Home