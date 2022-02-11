import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';
import Footer from '../components/Footer';
import Closer1 from '../asset/Editions/Closer1.jpg';
import Closer2 from '../asset/Editions/Closer2.jpg';
import Closer3 from '../asset/Editions/Closer3.jpg';
import Closer4 from '../asset/Editions/Closer4.gif';
import Closer5 from '../asset/Editions/Closer5.jpg';
import Closer6 from '../asset/Editions/Closer6.gif';
import PDB1 from '../asset/Editions/PDB1.jpg';
import PDB2 from '../asset/Editions/PDB2.jpg';
import PDB3 from '../asset/Editions/PDB3.jpg';
import PDB4 from '../asset/Editions/PDB4.jpg';
import PDB5 from '../asset/Editions/PDB5.jpg';
import PDB6 from '../asset/Editions/PDB6.jpg';
import PDB7 from '../asset/Editions/PDB7.jpg';
import PDB8 from '../asset/Editions/PDB8.jpg';
import PDB9 from '../asset/Editions/PDB9.jpg';
import PDB10 from '../asset/Editions/PDB10.jpg';
import PDB11 from '../asset/Editions/PDB11.jpg';
import PDB12  from '../asset/Editions/PDB12.jpg';
import AAC1 from '../asset/Editions/AAC1.jpg';
import AAC2 from '../asset/Editions/AAC2.jpg';
import AAC3 from '../asset/Editions/AAC3.jpg';
import AAC4 from '../asset/Editions/AAC5.jpg';
import AAC5 from '../asset/Editions/AAC6.jpg';
import Passage1 from '../asset/Editions/Passage1.jpg';
import Passage2 from '../asset/Editions/Passage2.jpg';
import Passage3 from '../asset/Editions/Passage3.jpg';
import Passage4 from '../asset/Editions/Passage4.jpg';
import Passage5 from '../asset/Editions/Passage5.jpg';
import NPC1 from '../asset/Editions/NPC1.jpg';
import NPC2 from '../asset/Editions/NPC2.jpg';
import NPC3 from '../asset/Editions/NPC3.jpg';
import NPC4 from '../asset/Editions/NPC4.jpg';



const editions = [
  {
    titre:"Closer",
    date:2019,
    catégorie:"Workshop",
    technique:"Impression laser livret A5 24 pages N/B",
    descritpion:"Fanzine réalisé lors d’un workshop, sur le thème de la viralité mené par Mathieu Renard issu de Lendroit Edition. Workshop qui a abouti à un fanzine composé de photographies intimistes et étouffantes,faites à partir d’un scanner pour être par la suite imprimées et photocopiées ce qui crée une dégradation de l’image.",
    images:[Closer1, Closer2, Closer3, Closer4, Closer5, Closer6],
  },
  {
    titre:"Ponctué de Blanc",
    date:2021,
    catégorie:"Edition",
    technique:"Impression laser A4 plié",
    descritpion:"Sur un thème Ranger, trier, classer, il nous a été demandé de prélever des éléments de textes afin de les ranger, les trier et les classer. J’ai choisi de travailler à partir de la ponctuation; le spectateur se retrouve sans voix, le silence est la réponse apportée au classement de ce texte.",
    images:[PDB1, PDB2, PDB3, PDB4, PDB5, PDB6, PDB7, PDB8, PDB9, PDB10, PDB11, PDB12],
  },
  {
    titre:"Allié au choix",
    date:2021,
    catégorie:"Mémoire",
    technique:"Livret A5 32 pages/reliure spirale",
    descritpion:"Mémoire réalisé sur le lien entre le graphisme et la féminité.",
    images:[AAC1 ,AAC2, AAC3, AAC4, AAC5],
  },
  {
    titre:"Passage",
    date:2021,
    catégorie:"Voyage",
    technique:"Livret A5,Impression laser ",
    descritpion:"Livret réalisé suite à un voyage à Lisbonne durant lequel un matériel graphique a été collecté. Un matériel qui a donné naissance à une édition sur la thématique du passage. Une expérience passagère dans une ville de passage, où le temps passe et laisse des traces.",
    images:[Passage1, Passage2, Passage3, Passage4, Passage5],
  },
  {
    titre:"Ne pas couvrir",
    date:2021,
    catégorie:"Personnel",
    technique:"Affiche/Livret A2,Impression Riso",
    descritpion:"Catalogue d'exposition réalisé à la demande d'Éric Choisy Bernard, Artiste, Designer Numérique, Bricodeur et enseignant.",
    images:[NPC1, NPC2, NPC3, NPC4],
  },
];
const Catégorie = () => {
  return (
    <div className="container-catégorie">
   <Menus />
   <div className="container-ifram">
   <button className="btn-édition-intro" >
      <p>Éditions</p>
    </button>
    <iframe title="editon" src='https://my.spline.design/ditionscopy-f2b83b8f0f40c914db6fdae2fa9c6315/' frameborder='0' width='100%' height='100%'></iframe>       </div>
   {editions.map((edition, index)=>(
    <Projet key={index} data={edition} />
   ))}
   <Footer/>
    </div>
  )
}

export default Catégorie
