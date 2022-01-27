import React, {useContext} from 'react'
import '../styles/Projet.css';
import '../styles/index.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../styles/slideshow.css";
import PopUpImgContext from '../context/contextPopUpimg';

const Projet = (data) => {
  const { setSource, setPicture, picture } = useContext(PopUpImgContext);
  return (
    <div className="container-projet">
    <div className="container-title">
      <h1>● {data.data.titre}</h1>
      </div>
      <div className="container-subtit">
      <div className="container-information">
      <h2>{data.data.catégorie}</h2>
      <h2>{data.data.technique}</h2>
      <p>{data.data.descritpion}</p> 
     { data.data.liensSite ? <a href={data.data.liensSite} className="btn-vers-site">Site déployé</a> : null}
      {data.data.liensProto ? <a href={data.data.liensProto} className="btn-vers-proto">Prototype</a> : null}
      </div>
      <Slide easing="ease">
      { data.data.videos ? 
        <div className="each-slide">
           <video src={data.data.videos} width="100%"  height="100%" controls></video>
          </div>
         : null}
    { data.data.images.map((image) =>
          <div className="each-slide" onClick={() => setSource(image)}>
            <div style={{'backgroundImage': `url(${image})`}} onClick={()=> setPicture(!picture)}>
            </div>
          </div> )}
        </Slide> 
        </div>
   </div>
  )
}

export default Projet;
