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
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
            </div>
          </nav>
        </>
    )
}

export default Nav

