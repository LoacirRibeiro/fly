import React from "react";

import video from '../../assets/video.mp4'
import aeroplane from '../../assets/aeroplane.png'

function Home(){
    return(
        <div className="home flex container">

            <div className="mainText">
                <h1>Crie memórias etérnas conosco</h1>
            </div>

            <div className="homeImages flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>

                <img src={aeroplane} className="plane"></img>
            </div>
        </div>
    );
}

export default Home;