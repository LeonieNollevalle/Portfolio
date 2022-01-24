import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';

const typographies  = [
  {
    titre:"GarageType",
    date:2020,
    catégorie:"Workshop",
    technique:"Esquisse numérique",
    descritpion:"Workshop confiné, où il nous a été demandé de choisir un lieu dans notre logement afin d’en ressortir des modules qui nous ont par la suite servi a créer des grilles modulaires pour finalement réaliser des caractères modulaires.",
    images:["https://freight.cargo.site/t/original/i/e99125962a4b9d4699d7184f1f655ab16ee8a6455c25a555519855c10dd09038/IMG_8364.jpg",
  "https://freight.cargo.site/t/original/i/23d5852b6cfc7eecd59d635251ddc5b18ab681d51e9c27520a3ccb0dcff9ae11/YEAH.jpg",
"https://freight.cargo.site/t/original/i/c5d1afc61e9fc15d2df3022e5bc845f94edc9f297ba51c7eb38645beb5357b9e/mockup7.jpg",
"https://freight.cargo.site/t/original/i/a944f4191cc58bb6f9129e6eeb353ecef48e80c7562cd6a453a4755f530226aa/mockup6.jpg",
"https://freight.cargo.site/t/original/i/792fb9abdb19d0cd57785252ce9d0ba015c88bff67dd596946786daf93064f17/mockup2.jpg",
"https://freight.cargo.site/t/original/i/97945137504cf9c698b3169b789621f67547946d3dd1c2b1702e88183b1e9938/mockup1.jpg",
"https://freight.cargo.site/t/original/i/3f7ac218345d453ca519a1aa3e3931bc5b15ddd99deb9c6ca898b2c43338b177/mockup-3.jpg",
"https://freight.cargo.site/t/original/i/25243dfeb9f4ced24ef3deabb0ab9f70df68ab6423eeea08fb91bdd120b9dfcb/IMG_8354.jpg",
"https://freight.cargo.site/t/original/i/5023d837565558c63b4f47a1a60cc65da49859eb2bb220f58772fa31e861cf88/DSC08428.jpg",
"https://freight.cargo.site/t/original/i/beb76a34589a29c91729fa09011be2543cc14f1d67e6a9fbddf9aff01ba29a9a/DSC08408.jpg"]
   
  },
  {
    titre:"Le zéphire",
    date:2021,
    catégorie:"Workshop",
    technique:"Esquisse numérique",
    descritpion:"Sur la témathique liberticide. Il nous a été demandé de concevoir un ensemble de caractère afin de composé des slogant avec ces derniers. Ici la thématique à été traiter sous l'angle du football. Un lieu liberticide pour le genre car centré sur la fraternité d'avantage que sur l'inclusivité. ",
    images:["https://freight.cargo.site/t/original/i/3686fdc6f7a963a5b191caf954bb021c32f3052f888e5d41350973f83c9d39ac/A35e.jpg",
  "https://freight.cargo.site/t/original/i/a67832e8e76e9ebfccb9a3aca86b962f2bdbea71191dbeb06304809cc1cc0323/Precomp--1_1.gif",
"https://freight.cargo.site/t/original/i/2114359c4bace1a505ef8eef20a0a76529ffe2c6523190587e586ca6b8b372b6/motify-09.jpg",
"https://freight.cargo.site/t/original/i/45c47776d375a88e1df16bc0002cf0cf552f5640ce1c347d90a0589003cf4cc5/Flag_mockup_4.jpg",
"https://freight.cargo.site/t/original/i/ea20a9c1cc864158a79f26b487bba7ffeae71731f0a2b25ddcb0e0e42e6c36f0/DSC09958-2.jpg",
"https://freight.cargo.site/t/original/i/a133977b1ff8405fcd8123a5234fdc78b2a896d202e6bf246a2188b9482890cf/DSC09916.jpg",
"https://freight.cargo.site/t/original/i/b9c6289c6c628b7e19fe6ff86273b73d3f61e43ebc6ee86163856a0ec4877d60/DSC00135.jpg",
"https://freight.cargo.site/t/original/i/1ec70c7346308b4ee81497365344e70918b6c1a5ccecaf9b09a2827f7afc70d7/DSC00089.jpg",
"https://freight.cargo.site/t/original/i/966942bd4fb04a7d99a8d0609eac08e97facd5322ace7eede2c2833bcf26f10c/DSC00070.jpg"]
   
  },

];
const Catégorie = () => {
  return (
    <div className="container-catégorie">
   <Menus />
   <div className="container-ifram">
   <button className="btn-Typographie-intro" >
      <p>Typographie</p>
    </button>
    <iframe title="typo" src='https://my.spline.design/typographiecopy-0e370d637f1825b6f1e6df1524758259/' frameborder='0' width='100%' height='100%'></iframe>     </div>
   {typographies.map((typographies, index)=>(
    <Projet key={index} data={typographies} />
   ))}
   
    </div>
  )
}

export default Catégorie
