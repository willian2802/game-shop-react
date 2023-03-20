import React from 'react'
import "./destaque.css"
import forza from "../assets/Forza-img.png"
import DarkestDungeon from '../assets/DarkestDungeon-img.jpg';
import Battlefield from '../assets/battlefield.jpg'

 


function SpaceDestaque() {

  

  return (
    <>
      <div className='title'>
        <h2>Best rated:</h2>
      </div>
        <div className='space container row'>
          <div className='img-space col-md'>
              <img src={forza} alt="" />
            </div>
            <div className='img-space col-md'>
              <img src={DarkestDungeon} alt="" />
            </div>
            <div className='img-space col-md'>
              <img src={Battlefield} alt="" />
            </div>
        </div>

        <div className='space container row'>
          <div className='img-space col-md'>
              <img src={forza} alt="" />
            </div>
            <div className='img-space col-md'>
              <img src={DarkestDungeon} alt="" />
            </div>
            <div className='img-space col-md'>
              <img src={Battlefield} alt="" />
            </div>
        </div>

        
    </>
  )
}

export default SpaceDestaque