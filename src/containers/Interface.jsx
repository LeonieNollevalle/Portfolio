import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';
import mano from '../asset/VidéoManoMano.mov';
import Footer from '../components/Footer';
const Interfaces = [
  {
    titre:"Jdp",
    date:2021,
    catégorie:"Application",
    technique:"Prototype numérique/motion",
    descritpion:"Création d’une application pour l’opéra de Rennes, proposant une expérience d’écoute de musique d’opéra durant la fermeture de l’opéra ainsi qu’une présentation de sa programmation à travers des playlists de promotion.",
    images:["https://freight.cargo.site/w/1500/q/75/i/c1046805cf6fa5547088a0fa40d4d67ad0ca196c97b27932ae8a871f063c6471/Sans-titre---2.png"],
    videos:"https://files.cargocollective.com/c861648/AppJp.mp4"
  },
  {
    titre:"an",
    date:2021,
    catégorie:"Trans média",
    technique:"Prototype numérique/papier impression laser",
    descritpion:"Dans le cadre de mon projet de fin d'études il m'a été proposé de réaliser une identité visuelle, une communication ainsi qu'un site web pour un professionnel de la dermographie",
    images:["https://freight.cargo.site/t/original/i/a2f9aea851d68a0c303be5a243139fa43a6bf83ece7940da707320f71dfb2873/-tel1.jpg",
  "https://freight.cargo.site/t/original/i/573a0ecb4076dc20cf158f7f8f834bc9318972aa27985c84b547afe0bfe99b67/communication.jpg",
"https://freight.cargo.site/t/original/i/e5dd414c89786938d379b6421a000cee83ff7c9479e932faf3b7d677bad9d832/Insta.jpg",
"https://freight.cargo.site/t/original/i/8f53a324c34bf925767318ac875e712a479f3f132553f7f7452efa8251bf0f57/DSC00329.jpg",
"https://freight.cargo.site/t/original/i/af512ee7bb3d3fae61924a02c9577630ab7db9dd6a00405274b17e1d20970440/DSC00309.jpg",
"https://freight.cargo.site/t/original/i/d29241e5e3904f1f31a190151307b47712ed944af23f8dca4c66d08482a42864/insta13.jpg"],
    liensProto:"https://xd.adobe.com/view/069b8600-f933-4349-b062-08aae401d9aa-53c8/?fullscreen",
    liensProto2:"https://xd.adobe.com/view/438bcaf6-2df2-489e-a10d-70485531025e-16d8/screen/0d7aafc4-54cd-4b95-b873-d72275c1ab24/",
  },
  {
    titre:"Focus",
    date:2021,
    catégorie:"Site Web",
    technique:"Site web déployé/utilisation d'une api",
    descritpion:"Création d'un site web autour du cinéma, proposant un large choix de suggestion de film aléatoire. Afin de sortir du modèle des grandes plateformes de streaming qui noie l'utilisateur dans un grand nombre de contenus",
    images:["https://freight.cargo.site/t/original/i/7aa4e6d129273f18d23e4291b2662352468fe7aaf0eb9f1038eda0f05a0b1fb1/Capture-decran-2021-12-28-a-18.16.39.png",
  "https://freight.cargo.site/t/original/i/e9996a981884e4223d59f553e456a68e210c00d3888b8e886ca191a9b36fa4cc/Capture-decran-2021-12-28-a-18.17.16.png",
"https://freight.cargo.site/t/original/i/36f32043da6344f6e4a2e4349bfa4325477451f2a993761d09f9f5626f371aac/Capture-decran-2021-12-28-a-18.16.26.png"],
liensSite:"https://focus-wcs.netlify.app/",
liensProto:"https://xd.adobe.com/view/73c92571-c22f-45dd-81bd-f07c178177e9-269a/"
  },
  {
    titre:"Discover",
    date:2021,
    catégorie:"Site Web",
    technique:"Application web déployé",
    descritpion:"Création d'un site web autour de la musique durant un hackathon. Sa fonctionnalité principale étant de faire de faire la promotion d'artistes peu connus, en proposant à l'utilisateur d'écouter des playlists par genre de ces derniers.",
    images:["https://freight.cargo.site/t/original/i/da4756a16fef5370d5e7739dc1b16411ea397aa2cb740844d61bcc1d08fedb82/Presentation.png","https://freight.cargo.site/t/original/i/3a596ba6523eed59fe1d7e7aa98c527cf6911fe5a826752c0200c6053d38b043/Sans-titre---3_Plan-de-travail-1-copie-2.png",
    "https://freight.cargo.site/t/original/i/9f43cc44b5a770a938d9b6f1e019d4b57c6e7265a6226d546999455a6de3f78c/Logo_Plan-de-travail-1.png"],
    liensSite:"https://discover-wcs.netlify.app/",
  },
  {
    titre:"Migratio",
    date:2019,
    catégorie:"Site Web",
    technique:"Prototype numérique/motion",
    descritpion:"Prototype de site web réalisé pour le musée de Bretagne, une expérience proposant un aperçu de la collection du musée autour du vêtement, dans diverses catégories telles que le vêtement de travail.",
    images:["https://freight.cargo.site/t/original/i/1a653eaf2ba13faf42bbad0ae64aa304e6b33b97264e251d2e19af6806c5e372/Capture-decran-2021-01-31-a-19.00.57.png"],
    videos:"https://files.cargocollective.com/c861648/migratio.mp4"
  },
  {
    titre:"DIY",
    date:2022,
    catégorie:"Site Web",
    technique:"Prototype numérique/site déployé",
    descritpion:"Création d'une fonctionnalité web pour le site ManoMano durant un hackathon. Cette fonctionnalité consiste à aider les personnes novices en bricolage, en leur créant automatiquement des paniers d'achats en fonction des travaux qu'elles souhaitent réaliser.",
    images:["https://freight.cargo.site/w/830/q/94/i/3c5024a5599c8475e0301f46e5bac4432c6bf55474f5c595a838358895945487/Capture-decran-2022-01-23-a-21.33.12.png"],
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
