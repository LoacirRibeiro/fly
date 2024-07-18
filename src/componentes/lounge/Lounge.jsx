import React from "react";

// importaçao de imagens

import imagesGrid from "../../assets/images-grid2.jpg";

function Lounge() {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imagesGrid} />
        </div>

        <div className="textDiv">
          <h2>Menor desacompanhado</h2>
          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">
              Ajuda através do aeroporto
              </span>
              <p>
              você também pode ligar para companhias aéreas do seu telefone e
              reservar uma passagem aérea para um de seus destinos favoritos
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Embarque Prioritário
              </span>
              <p>
                você também pode ligar para companhias aéreas do seu telefone e
                reservar uma passagem aérea para um de seus destinos favoritos
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Cuidados no voo</span>
              <p>
                você também pode ligar para companhias aéreas do seu telefone e
                reservar uma passagem aérea para um de seus destinos favoritos
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">serviço de motorista</span>
              <p>
                você também pode ligar para companhias aéreas do seu telefone e
                reservar uma passagem aérea para um de seus destinos favoritos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lounge;
