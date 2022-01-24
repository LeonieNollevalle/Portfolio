import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';

const motions = [
 
  {
    titre:"Fou de danse",
    date:2019,
    catégorie:"Workshop",
    technique:"Affiche animé",
    descritpion:"Workshop réalisé avec le Jardin graphique sur la thématique de la danses à partir d’univers colorimétriques imposés, une affiche animée a été réalisée.",
    images:["https://freight.cargo.site/t/original/i/19512e18c0474849731ceafc3b815a468b68bb5d2ca99ad2627324278696d3dc/teste-pour-moi_.jpg",
  "https://freight.cargo.site/t/original/i/c21c614a2a4d38cf079ec6b02d659424238ead85b622d90f97dc27472cffafb9/Composition-1_1.gif"],
    videos:"https://files.cargocollective.com/c861648/c-ca.mp4"
   
  },
  {
    titre:"StillMoving",
    date:2020,
    catégorie:"Worshop",
    technique:"Motion",
    descritpion:"Workshop où il nous a été demandé de prélever des éléments dans des livres qui allaient être jetés et qui étaient donc par conséquent saccageables, afin de créer une vidéo à partir de ce matériau avec un haïku comme fil conducteur.",
    images:["https://freight.cargo.site/t/original/i/17507c4b6c6fdd96cd2f303a53e1ec06cfa0d0afd71cadb38c2250a8b5425b0f/1.jpg",
    "https://freight.cargo.site/t/original/i/7d1a68e2eac9e6f2ddd926029c3867c0d88f331bcfc5cae84679df03352e4bf0/DSC00627.jpg",
  "https://freight.cargo.site/t/original/i/cee7e40ef0f16e161c7434b52704929c79e6289c28ac7bd234357c26b03d72ab/DSC09046.jpg",
"https://freight.cargo.site/t/original/i/e6bab70624f54f2fb51ed87de3e5155282d7f7c2097af8bcf0a2d03be8c1d7f2/Ma-partie.gif",
"https://freight.cargo.site/t/original/i/9282b2573133897266a2b939095e4da0cf9ef3501b6ad329307f2d0928918389/25.jpg",
"https://freight.cargo.site/t/original/i/b10a95fe9f94ea634fc2260ca097407a5c060239afad954d337b16e5704bdbdc/11.jpg",
"https://freight.cargo.site/t/original/i/9bfd2cb942e9655d067ef0b47bd464bb21215523696260e622224d2e587fe529/2.jpg",
"https://freight.cargo.site/t/original/i/e5ed601b2af94a25d1402fa834dcf6aa1bb48b15e0c26fad9eaec2061f305bbe/10.jpg"],
    videos:"https://files.cargocollective.com/c861648/stillmoving.mp4"
   
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
   
    </div>
  )
}

export default Catégorie
