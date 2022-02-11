import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';
import Footer from '../components/Footer';



const identités = [
  {
    titre:"Ariane",
    date:2020,
    catégorie:"Identité Visuelle-Stage/Ben&Jo",
    technique:"Esquisse numérique",
    descritpion:"Proposition d’identité visuelle réalisée durant mon stage pour l’entreprise Semia incubation, qui est une entreprise d’incubation de start-up. Une identité réalisée autour du fil d’ariane.",
    images:["https://i.pinimg.com/originals/65/2e/32/652e32d5aab49b748117d46335a30e0e.jpg", "https://i.pinimg.com/originals/17/f7/60/17f760685982ac319329670503b69af2.jpg", "https://i.pinimg.com/564x/e7/8a/29/e78a29c3d137b61114a89fc4606701e0.jpg", "https://i.pinimg.com/originals/1d/da/7c/1dda7c5497390064de2897989ced2b0c.jpg"]
   
  },
  {
    titre:"Art dans les chapelles",
    date:2021,
    catégorie:"Identité Visuelle",
    technique:"Esquisse numérique",
    descritpion:"Création d’une identité visuelle pour le festival art dans les chapelles, basée sur la mise en lumière des artistes menant à la création d’une police de caractères modulaires prélevés dans les vitraux.",
    images:["https://i.pinimg.com/originals/87/ae/4d/87ae4d624fd25e627f5494118f257877.jpg", "https://i.pinimg.com/564x/76/4e/6b/764e6b8045faa14c0935291515d61a4a.jpg", "https://i.pinimg.com/564x/72/17/a1/7217a1860e083b0705986c5436fcebe3.jpg", "https://i.pinimg.com/564x/72/17/a1/7217a1860e083b0705986c5436fcebe3.jpg", "https://i.pinimg.com/originals/ef/b6/3a/efb63a43858557ac401ee9335f6a69ad.jpg"]
   
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
