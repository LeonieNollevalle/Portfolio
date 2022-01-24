import React from 'react'
import '../styles/popupimg.css';

const PopUpImage = ({source, setPicture, picture}) => {
  return (
    <div className="container-popupimg">
    <div className="container-cross">
     <p onClick={()=> setPicture(!picture)}>✕</p>
     </div>
     <div className="container-img">

      <img src={source} alt=""/>
      </div>
    </div>
  )
}

export default PopUpImage
