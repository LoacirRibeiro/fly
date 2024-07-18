import React from "react";


// importação de icones
import { RxCalendar } from 'react-icons/rx'
import { BsBookmarkCheck} from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";

function Informacao(){
    return(
        <div className="info section">
            <div className="infoContainer container">   

                <div className="titleDiv flex">
                    <h2>Crie memórias ao redor do Mundo</h2>
                    <button className="btn">
                    Ver Tudo
                    </button>
                </div>

                <div className="cardsDiv grid">

                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                           <RxCalendar className="icon" /> 
                        </div> 
                        <span className="cardTitle">Reserve & Relaxe</span>
                        <p>você também pode ligar para companhias 
                        aéreas e reservar uma passagem aérea!
                        </p>
                    </div>
                
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                           <BsShieldCheck className="icon" /> 
                        </div> 
                        <span className="cardTitle">Lista de verificação inteligente</span>
                        <p>você também pode ligar para companhias 
                            aéreas e reservar uma passagem aérea!
                        </p>
                    </div>
                
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                           <BsBookmarkCheck className="icon" /> 
                        </div> 
                        <span className="cardTitle">Poupar Mais</span>
                        <p>você também pode ligar para companhias 
                            aéreas e reservar uma passagem aérea!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Informacao;