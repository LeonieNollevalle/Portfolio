import React, {useContext} from 'react'
import '../styles/popupimg.css';
import PopUpImgContext from '../context/contextPopUpimg';

const PopUpImage = () => {
  const { picture, setPicture, source } = useContext(PopUpImgContext);
  return (
    <div className={picture ? "container-popupimg" : "container-close"}>
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
