import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';
import Footer from '../components/Footer';
import GarageType1 from '../asset/Typographie/GarageType1.jpg';
import GarageType2 from '../asset/Typographie/GarageType2.jpg';
import GarageType3 from '../asset/Typographie/GarageType3.jpg';
import GarageType4 from '../asset/Typographie/GarageType4.jpg';
import GarageType5 from '../asset/Typographie/GarageType5.jpg';
import GarageType6 from '../asset/Typographie/GarageType6.jpg';
import GarageType7 from '../asset/Typographie/GarageType7.jpg';
import GarageType8 from '../asset/Typographie/GarageType8.jpg';
import GarageType9 from '../asset/Typographie/GarageType9.jpg';
import GarageType10 from '../asset/Typographie/GarageType10.jpg';
import Zéphire1 from '../asset/Typographie/Zéphire1.jpg';
import Zéphire2 from '../asset/Typographie/Zéphire2.jpg';
import Zéphire3 from '../asset/Typographie/Zéphire3.jpg';
import Zéphire4 from '../asset/Typographie/Zéphire4.jpg';
import Zéphire5 from '../asset/Typographie/Zéphire5.jpg';
import Zéphire6 from '../asset/Typographie/Zéphire6.jpg';
import Zéphire7 from '../asset/Typographie/Zéphire7.jpg';
import Zéphire8 from '../asset/Typographie/Zéphire8.jpg';
import Zéphire9 from '../asset/Typographie/Zéphire9.gif';


const typographies  = [
  {
    titre:"GarageType",
    date:2020,
    catégorie:"Workshop",
    technique:"Esquisse numérique",
    descritpion:"Workshop confiné, où il nous a été demandé de choisir un lieu dans notre logement afin d’en ressortir des modules qui nous ont par la suite servis à créer des grilles modulaires pour finalement réaliser des caractères modulaires.",
    images:[GarageType1, GarageType2, GarageType3 ,GarageType4, GarageType5, GarageType6, GarageType7, GarageType8, GarageType9, GarageType10]
   
  },
  {
    titre:"Le zéphire",
    date:2021,
    catégorie:"Workshop",
    technique:"Esquisse numérique",
    descritpion:"Sur la thématique liberticide. Il nous a été demandé de concevoir un ensemble de caractères afin de composer des slogans avec ces derniers. Ici la thématique à été traitée sous l'angle du football. Un lieu liberticide pour le genre car centré sur la fraternité davantage que sur l'inclusivité.",
    images:[Zéphire1, Zéphire2, Zéphire3, Zéphire4, Zéphire5, Zéphire6, Zéphire7, Zéphire8, Zéphire9]
   
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
   <Footer/>
    </div>
  )
}

export default Catégorie
