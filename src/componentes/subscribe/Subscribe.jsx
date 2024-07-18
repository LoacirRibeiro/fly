import React from "react";

function Subscribe() {
  return (
    <div className="subscribe section">
      <div className="sectionContainer container">
        <h2>Assine boletins informativos & receba as últimas notícias</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Entre com seu E-mail" />
          <button className="btn"> Inscreva-se</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
