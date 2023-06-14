import React from 'react'
import "./rotator.css"
 
 import ElderRingImg from "../assets/Elder ring.jpg"
 import HadesImg from '../assets/HADES.png'
 import CallistoProtImg from '../assets/the-callisto-protocol.jpg'

function Rotator() {
  return (
    <>

        <div className="rotator">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            
            <div className='carrouseu-space'>
            <div id="carouselExampleCaptions" className="carousel slide"  data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={ElderRingImg} className="" alt="Elder Ring"></img>
                    </div>
    
                    <div className="carousel-item">
                    <img src={HadesImg} className="" alt="HADES"></img>
                    </div>
    
                    <div className="carousel-item">
                    <img src={CallistoProtImg} className="" alt="The Callisto Protocol"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
            </div>
        </div>
    </div>       
    </>
  )
}

export default Rotator