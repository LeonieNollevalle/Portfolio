import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';


const identités = [
  {
    titre:"Ariane",
    date:2020,
    catégorie:"Identité Visuelle-Stage/Ben&Jo",
    technique:"Esquisse numérique",
    descritpion:"Proposition d’identité visuelle réalisée durant mon stage pour l’entreprise sémia incubation, qui est une entreprise d’incubation de start-up. Une identité réalisée autour du fil d’ariane.",
    images:["https://freight.cargo.site/w/1400/q/94/i/3d5ee990e99a31061be7b9d07504259b5dfd69d4e9e49491fbd74ceef6cd47dc/Identiteglobal.jpg",
  "https://freight.cargo.site/w/1500/q/94/i/0ab156ec64e277fc1ba02f7b27bb4851a114a5954d328ee28cfda3afb564a082/entete.jpg",
"https://freight.cargo.site/w/822/q/94/i/e6858343bcfaba974d771e15f7d653a363b84bfdff8249f686683b5ae2db7389/construction.jpg",
"https://freight.cargo.site/w/1200/q/94/i/cd80afc0f061b2e5ea353dcc627b2d17ca2d83620c49236d7e01d4f164c07dad/carteposte.jpg"]
   
  },
  {
    titre:"Art dans les chapelles",
    date:2021,
    catégorie:"Identité Visuelle",
    technique:"Esquisse numérique",
    descritpion:"Création d’une identité visuelle pour le festival art dans les chapelles, basé sur la mise en lumière des artistes menant à la création d’une police de caractères modulaires prélevés dans les vitraux.",
    images:["https://freight.cargo.site/w/3508/q/94/i/83af5400db117f9e2361dc76340ccbcde30b5de9d6469c89093e757fdb439cbb/typo.jpg",
  "https://freight.cargo.site/w/1756/q/94/i/405c1cc2f8a85992624da67dbcc98c8305f18ed61bf7103caf8805ef489824f0/Test-identite.jpg",
  "https://freight.cargo.site/w/550/q/94/i/914596de3c7b4038c826f4d95dd7f997bd042440b036903f2d3c0e0580e18dbe/recherche-image_.jpg",
  "https://freight.cargo.site/w/1500/q/75/i/4cbcc956d399d02f49458ba9461d5757e1075c4198807e24fe7a5f6dfac88099/typo.png",
  "https://freight.cargo.site/t/original/i/46dd52d651023d974d82732f48475839ef3c83d1114e859def99161e25a03def/Numeriser-3.jpg",
  "https://freight.cargo.site/t/original/i/767940ccdedfb580b88df1dc9afbe018c531b48fe5940cd7834ead4b7b6161db/Capture-decran-2021-02-02-a-10.50.41.png"
  ]
   
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
   
    </div>
  )
}

export default Catégorie
