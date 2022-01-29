import React from 'react';
import '../styles/popupAlt.css';

const PopUpAltern = ({handlPop}) => {

  return <div className="containerall-popup-Alt">
  <div className="container-popup-Alt">
    <h3 onClick={handlPop}>✕</h3>
    <h1>Hi,<span className="smile">☺︎</span></h1>
    <p>Je suis actuellement à la recherche d'une alternance dans le domaine du web, notamment dans une entreprise qui possède au sein de son équipe des professionnels d'ux, ui Design ou du web Design de manière plus générale. :)</p>
    <h2>Si vous souhaitez me contacter pour en discuter ☟</h2>
    <h4>leonie.nollevalle@gmail.com</h4>

    </div>
  </div>;
};

export default PopUpAltern;
