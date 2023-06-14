import React from 'react'
import "./nav.css"


// img
 import SteamImg from '../assets/steam-logo-white.png';

const Nav = () => {

  

    return (
        <>
          <nav className="navbar navbar-dark d-flex">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <img src={SteamImg} alt="Steam img"></img> <span class="text-warning">Steam</span></a>
            </div>
          </nav>
        </>
    )
}

export default Nav

