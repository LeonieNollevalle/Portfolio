import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';
import mano from '../asset/Interface/Mano2.mp4';
import Footer from '../components/Footer';
import JDP1 from '../asset/Interface/JDP.png';
import JDP2 from '../asset/Interface/JDP.mp4';
import AN1 from '../asset/Interface/AN1.jpg';
import AN2 from '../asset/Interface/AN2.jpg';
import AN3 from '../asset/Interface/AN3.jpg';
import AN4 from '../asset/Interface/AN4.jpg';
import AN5 from '../asset/Interface/AN5.jpg';
import AN6 from '../asset/Interface/AN6.jpg';
import Focus1 from '../asset/Interface/FOCUS1.png';
import Focus2 from '../asset/Interface/FOCUS2.png';
import Focus3 from '../asset/Interface/FOCUS3.png';
import Discover1 from '../asset/Interface/Discover1.png';
import Discover2 from '../asset/Interface/Discover2.png';
import Discover3 from '../asset/Interface/Discover3.png';
import Migratio1 from '../asset/Interface/Migratio1.png';
import Migratio2 from '../asset/Interface/Migratio2.mp4';
import Mano1 from '../asset/Interface/Mano1.png';


const Interfaces = [
  {
    titre:"Jdp",
    date:2021,
    catégorie:"Application",
    technique:"Prototype numérique/motion",
    descritpion:"Création d’une application pour l’opéra de Rennes, proposant une expérience d’écoute de musique d’opéra durant la fermeture de l’opéra ainsi qu’une présentation de sa programmation à travers des playlists de promotion.",
    images:[JDP1],
    videos:JDP2
  },
  {
    titre:"an",
    date:2021,
    catégorie:"Trans média",
    technique:"Prototype numérique/papier impression laser",
    descritpion:"Dans le cadre de mon projet de fin d'études il m'a été proposé de réaliser une identité visuelle, une communication ainsi qu'un site web pour un professionnel de la dermographie",
    images:[AN1, AN2, AN3, AN4, AN5, AN6],
    liensProto:"https://xd.adobe.com/view/069b8600-f933-4349-b062-08aae401d9aa-53c8/?fullscreen",
    liensProto2:"https://xd.adobe.com/view/438bcaf6-2df2-489e-a10d-70485531025e-16d8/screen/0d7aafc4-54cd-4b95-b873-d72275c1ab24/",
  },
  {
    titre:"Focus",
    date:2021,
    catégorie:"Site Web",
    technique:"Site web déployé/utilisation d'une api",
    descritpion:"Création d'un site web autour du cinéma, proposant un large choix de suggestion de film aléatoire. Afin de sortir du modèle des grandes plateformes de streaming qui noie l'utilisateur dans un grand nombre de contenus",
    images:[Focus1, Focus2, Focus3],
liensSite:"https://focus-wcs.netlify.app/",
liensProto:"https://xd.adobe.com/view/73c92571-c22f-45dd-81bd-f07c178177e9-269a/"
  },
  {
    titre:"Discover",
    date:2021,
    catégorie:"Site Web",
    technique:"Application web déployé",
    descritpion:"Création d'un site web autour de la musique durant un hackathon. Sa fonctionnalité principale étant de faire de faire la promotion d'artistes peu connus, en proposant à l'utilisateur d'écouter des playlists par genre de ces derniers.",
    images:[Discover1, Discover2, Discover3],
    liensSite:"https://discover-wcs.netlify.app/",
  },
  {
    titre:"Migratio",
    date:2019,
    catégorie:"Site Web",
    technique:"Prototype numérique/motion",
    descritpion:"Prototype de site web réalisé pour le musée de Bretagne, une expérience proposant un aperçu de la collection du musée autour du vêtement, dans diverses catégories telles que le vêtement de travail.",
    images:[Migratio1],
    videos:Migratio2
  },
  {
    titre:"DIY",
    date:2022,
    catégorie:"Site Web",
    technique:"Prototype numérique/site déployé",
    descritpion:"Création d'une fonctionnalité web pour le site ManoMano durant un hackathon. Cette fonctionnalité consiste à aider les personnes novices en bricolage, en leur créant automatiquement des paniers d'achats en fonction des travaux qu'elles souhaitent réaliser.",
    images:[Mano1],
    videos:mano,
    liensProto:"https://xd.adobe.com/view/af05e7ac-7ecb-41b2-a073-11baee551b80-fa56/?fullscreen"

  },
];
const Catégorie = () => {
  return (
    <div className="container-catégorie">
   <Menus />
   <div className="container-ifram">
   <button className="btn-Iterface-intro" >
     <p> Interface </p>
    </button>
    <iframe title="interface" src='https://my.spline.design/accueil-96cbf2a8c9c0f2a851055e77d9ed2868/' frameborder='0' width='100%' height='100%'></iframe>    </div>

   {Interfaces.map((Interfaces, index)=>(
    <Projet key={index} data={Interfaces}/>
   ))}
   <Footer/>
    </div>
  )
}

export default Catégorie
