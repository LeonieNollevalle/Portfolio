import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';
import Footer from '../components/Footer';
import FDD1 from '../asset/Motion/FDD1.mp4';
import FDD3 from '../asset/Motion/FDD2.gif';
import FDD2 from '../asset/Motion/FDD3.jpg';
import StillMoving1 from '../asset/Motion/StillMoving1.jpg';
import StillMoving2 from '../asset/Motion/StillMoving2.jpg';
import StillMoving3 from '../asset/Motion/StillMoving3.jpg';
import StillMoving4 from '../asset/Motion/StillMoving4.jpg';
import StillMoving5 from '../asset/Motion/StillMoving5.jpg';
import StillMoving6 from '../asset/Motion/StillMoving6.jpg';
import StillMoving7 from '../asset/Motion/StillMoving7.jpg';
import StillMoving8 from '../asset/Motion/StillMoving8.gif';
import StillMoving9 from '../asset/Motion/StillMoving9.mp4';

const motions = [
 
  {
    titre:"Fou de danse",
    date:2019,
    catégorie:"Workshop",
    technique:"Affiche animée",
    descritpion:"Workshop réalisé avec le Jardin graphique sur la thématique de la danse à partir d’univers colorimétriques imposés. À la fin de ce workshop une affiche animée a été réalisée.",
    images:[FDD3,FDD2],
    videos:FDD1
   
  },
  {
    titre:"StillMoving",
    date:2020,
    catégorie:"Workshop",
    technique:"Motion",
    descritpion:"Durant ce Workshop il nous a été demandé de prélever des éléments dans des livres qui allaient être jetés et qui étaient donc par conséquent “saccageables”.  Ces éléments nous ont par la suite aidés à monter une vidéo, avec comme fil narratif un haïku.",
    images:[StillMoving1, StillMoving2, StillMoving3, StillMoving4, StillMoving5, StillMoving6, StillMoving7, StillMoving8],
    videos:StillMoving9
   
  },
];

	
const Catégorie = () => {
  return (
    <div className="container-catégorie">
   <Menus />
   <div className="container-ifram">
   <button className="btn-motion-intro" >
      <p>Motion</p>
    </button>
    <iframe title="motion" src='https://my.spline.design/motioncopy-1963f8a9049591a2a0c92495f33882c0/' frameborder='0' width='100%' height='100%'></iframe>     </div>
   {motions.map((motions, index)=>(
    <Projet key={index} data={motions} />
   ))}
   <Footer/>
    </div>
  )
}

export default Catégorie
