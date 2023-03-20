import React from "react";
import "./twoChoose.css"
import Produtos_img from "../assets/Produtos-img.jpg"
import Promoçao_img from "../assets/Promoçao.jpg"

import { useContext } from "react";
import {SeletorContexto} from "./loja"
import {inicialState} from './loja';


import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function twoChoose() {

    const [inicialState, dispatch] = useContext(SeletorContexto);

    const handlePromoClick = () => {
        const action = { type: "Destaque", payload: "Destaque" };
        dispatch(action);
    };

    const handleSearchClick = () => {
        const action = { type: "Loja", payload: "Loja" };
        dispatch(action);
    };

    return (
        <>
        <div className="container d-flex box">
            <div className="products box-choose" onClick={handlePromoClick}>
                <img src={Promoçao_img}  class="darken" alt="" />
                <div className="icon-layer">
                <i className="fa-solid fa-cart-shopping fa-10x"></i>
                </div>
            </div>
            <div className="search box-choose" onClick={handleSearchClick}>
                <img src={Produtos_img}  class="darken" alt="" />
                <div className="icon-layer">
                <i className="fa-solid fa-magnifying-glass fa-10x"></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default twoChoose