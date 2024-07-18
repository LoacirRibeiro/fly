import React from "react";

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

function Pesquisar(){
    return(
        <div className="search container section">
            <div className="sectionContainer grid">

                <div className="btns flex">
                    <div className="singleBtn">
                        <span>Econômica</span>
                    </div>

                    <div className="singleBtn">
                        <span>Classe executiva</span>
                    </div>

                    <div className="singleBtn">
                        <span>Primeira Classe</span>
                    </div>

                </div>

                <div className="searchInputs flex">
                    {/* entradas únicas */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Localização</h4>
                            <input type="text" placeholder="Onde você quer ir"></input>
                        </div>
                    </div>

                    {/* entradas únicas */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RiAccountPinCircleLine className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Viajantes</h4>
                            <input type="text" placeholder="Adicionar convidados"></input>
                        </div>
                    </div>

                    {/* entradas únicas */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Check-in</h4>
                            <input type="text" placeholder="Adicionar data"></input>
                        </div>
                    </div>

                    {/* entradas únicas */}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Check-out</h4>
                            <input type="text" placeholder="Adicionar data"></input>
                        </div>
                    </div>

                    <button className="btn btnBlock flex">Pesquisar vôo</button>
                </div>
            </div>
        </div>
    );
}

export default Pesquisar;