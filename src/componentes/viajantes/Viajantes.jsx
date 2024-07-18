import React from "react";

// importação de destinação ==========>
import paris from "../../assets/paris.jpg";
import NewYouk from "../../assets/newYork.jpeg";
import Londres from "../../assets/Londres.jpg";
import Dubai from "../../assets/Dubai.jpg";
// importação de viajantes ==========>
import viajante1 from "../../assets/user1.jpg";
import viajante2 from "../../assets/user2.webp";
import viajante3 from "../../assets/user3.jpg";
import viajante4 from "../../assets/user4.jpg";

// vamos usar um método de array de alta ordem chamado map para exibir todos os dados

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelersImage: viajante1,
    travelersName: "Loacir",
    socialLink: "@LoaTech8",
  },

  {
    id: 2,
    destinationImage: NewYouk,
    travelersImage: viajante2,
    travelersName: "Marcela",
    socialLink: "@MarcelaTech8",
  },

  {
    id: 3,
    destinationImage: Londres,
    travelersImage: viajante3,
    travelersName: "Marie e josh",
    socialLink: "@FamilirTech",
  },

  {
    id: 4,
    destinationImage: Dubai,
    travelersImage: viajante4,
    travelersName: "Paulo",
    socialLink: "@Paulo mass",
  },
];

const Viajantes = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>
          Principais viajantes deste mês
        </h2>
 
        <div className="travelersContainer grid">
          {
          travelers.map(({
              id,
              destinationImage,
              travelersImage,
              travelersName,
              socialLink,
            }) => {
              return (
                /*Cartão de passageiro único */
                <div key={id} className="singleTravelers">
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelersDetails">
                    <div className="travelerPicture">
                      <img src={travelersImage} className="travelersImage" />
                    </div>
                    <div className="travelersName">
                      <span>{travelersName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Viajantes;
