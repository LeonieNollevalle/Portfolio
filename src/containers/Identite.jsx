import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';
import Footer from '../components/Footer';
import Ariane1 from "../asset/Identités/Ariane1.jpg";
import Ariane2 from "../asset/Identités/Ariane2.jpg";
import Ariane3 from "../asset/Identités/Ariane3.jpg";
import Ariane4 from "../asset/Identités/Ariane4.jpg";
import ADP1 from "../asset/Identités/ADP1.png";
import ADP2 from "../asset/Identités/ADP2.jpg";
import ADP3 from "../asset/Identités/ADP3.jpg";
import ADP4 from "../asset/Identités/ADP4.jpg";
import ADP5 from "../asset/Identités/ADP5.jpg";

const identités = [
  {
    titre:"Ariane",
    date:2020,
    catégorie:"Identité Visuelle-Stage/Ben&Jo",
    technique:"Esquisse numérique",
    descritpion:"Proposition d’identité visuelle réalisée durant mon stage pour l’entreprise Semia incubation, qui est une entreprise d’incubation de start-up. Une identité réalisée autour du fil d’ariane.",
    images:[Ariane1, Ariane2, Ariane3, Ariane4]
   
  },
  {
    titre:"Art dans les chapelles",
    date:2021,
    catégorie:"Identité Visuelle",
    technique:"Esquisse numérique",
    descritpion:"Création d’une identité visuelle pour le festival art dans les chapelles, basée sur la mise en lumière des artistes menant à la création d’une police de caractères modulaires prélevés dans les vitraux.",
    images:[ADP1, ADP2, ADP3, ADP4, ADP5]
   
  },
];
const Catégorie = () => {
  return (
    <div className="container-catégorie">
   <Menus />
   <div className="container-ifram">
   <button className="btn-Identité-intro" >
     <p> Identité </p>
    </button>
    <iframe title="identité" src='https://my.spline.design/identitcopy-c1094b4b354c0cf8bd60f57333d0d960/' frameborder='0' width='100%' height='100%'></iframe>   </div> 
   {identités.map((identités, index)=>(
    <Projet key={index} data={identités} />
   ))}
   <Footer/>
    </div>
  )
}

export default Catégorie
