import React from "react";
import './style.css'


function Cards() {
    return (

        <div className="actor-cads-container">
            <div className="cards-content">
                <div className="cards banner1">
                    <h1>Ezra Miller - Flash</h1>
                    <p className="biografia">
                        Ezra Matthew Miller é um ator estadunidense que trabalha
                        como intérprete de artes cênicas, cancionista, musicista e
                        modelo. Participou do primeiro episódio de uma pequena 
                        web-série humorística chamada Cakey! The Cake from 
                        Outer Space, e foi um dos jogadores do curta Critical Hit.
                    </p>
                </div>

                <div className="cards banner2">
                    <h1>Sasha Calle - Supergirl</h1>
                    <p className="biografia">
                    Sasha Marie Calle é uma atriz norte-americana, que ficou conhecida por seu trabalho na novela The Young and the Restless, além de ter dado vida a super-heroína Supergirl no filme The Flash.
                    </p>
                </div>

                <div className="cards banner3">
                    <h1>Ben Affleck - Batman</h1>
                    <p className="biografia">
                    Benjamin Géza "Ben" Affleck-Boldt é um ator, diretor, roteirista e produtor norte-americano. Começou sua carreira como ator mirim, protagonista na série educativa The Voyage of the Mimi e The Second Voyage of the Mimi da PBS.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards;