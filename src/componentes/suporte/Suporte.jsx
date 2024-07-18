import React from "react";

// importação de imagens

import gridImage from '../../assets/Images-Grid.jpg'

function Suporte(){
    return(
        <div className="support container section">
            <div className="sectionContainer">

                <div className="tittlesDiv">
                    <small>Suporte de viagem</small>
                    <h2>Planeje sua viagem com confiança</h2>
                    <p>Quer ajuda para reservas e planos de viagem? veja o que esperar ao longo 
                    da viagem!</p>
                </div>

                <div className="infoDiv grid">

                     <div className="textDiv grid">

                        <div className="singleInfo ">
                            <span className="number"> 01</span>
                            <h4>Requisitos de viagem para Dubai</h4>
                            <p>
                            Quer ajuda para reservas e planrjar sua viagem? 
                            veja o que esperar ao longo da viagem para seu destino favorito!
                            </p>
                        </div>

                        <div className="singleInfo ">
                            <span className="number colorOne"> 02</span>
                            <h4>Serviços de motorista na sua chegada</h4>
                            <p>
                            Quer ajuda para reservas e planrjar sua viagem? 
                            veja o que esperar ao longo da viagem para seu destino favorito!
                            </p>
                        </div>

                        <div className="singleInfo ">
                            <span className="number colorTwo"> 03</span>
                            <h4>Seguro viagem </h4>
                            <p>
                                Quer ajuda para reservas e planos de viagem? 
                                veja o que esperar ao longo da viagem para seus 
                                destinos favoritos!
                            </p>
                        </div>

                    </div>

                    <div className="imgDiv">
                        <img  src={gridImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Suporte;