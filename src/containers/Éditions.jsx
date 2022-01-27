import React from 'react';
import '../styles/catégorie.css';
import Menus from '../components/Menus';
import Projet from './Projet';
import Footer from '../components/Footer';
const editions = [
  {
    titre:"Closer",
    date:2019,
    catégorie:"Workshop",
    technique:"Impression laser livret A5 24 pages N/B",
    descritpion:"Fanzine réalisé lors d’un workshop, sur le thème de la viralité mené par Mathieu Renard issu de Lendroit Edition. Workshop qui a abouti à un fanzine composé de photographies intimistes et étouffantes,faites à partir d’un scanner pour être par la suite imprimées et photocopiées ce qui crée une dégradation de l’image.",
    images:["https://freight.cargo.site/t/original/i/420de622da195e5fba9a0d381ee2996d423cb65595a3e101c62133f4daa89aae/youu.gif",
  "https://freight.cargo.site/t/original/i/a36aac08961f1792c71cb6c5da53bc13b899f99a1009b74c52762218965ddefa/lilo.gif",
  "https://freight.cargo.site/t/original/i/baab29000b419b937c432e3c7e0387ade1da45b824c8cd8cb797b7438f445e21/o.jpg",
  "https://freight.cargo.site/t/original/i/b132376dab2b4f9c3a59b4bb7b20c166a023692da0c882362cb34b109c69c43b/C2.jpg",
  "https://freight.cargo.site/t/original/i/bb1ced25d5f159b0057bcca034ab97413c24324801592a6213bacfc042f8b6e8/4.jpg",
  "https://freight.cargo.site/t/original/i/72a85bcd7719e58ca1735e3181b27116f08599038fcc19bd8bb72f4d083481ad/9.jpg",
  ""
],
  },
  {
    titre:"Ponctué de Blanc",
    date:2021,
    catégorie:"Edition",
    technique:"Impression laser A4 plié",
    descritpion:"Sur un thème Ranger, trier, classer, il nous a été demandé de prélever des éléments de textes afin de les ranger, les trier et les classer. J’ai choisi de travailler à partir de la ponctuation; le spectateur se retrouve sans voix, le silence est la réponse apportée au classement de ce texte.",
    images:["https://freight.cargo.site/t/original/i/2524636c51daec6c0d196db1a2b1e641e45a76d000562671ffd9b9138276e883/Scan.jpg",
    "https://freight.cargo.site/t/original/i/131b5c14f3323fe3886f3fe83434a0ff9ceeb6c0b3bd7adace7c81d9596b4e10/Scan-14.jpg",
    "https://freight.cargo.site/t/original/i/f3a50de30e8a90f192e1deb90d3d0855d67fbe9d2eae2d47bdd9b2cbc116f4eb/Scan-12.jpg",
    "https://freight.cargo.site/t/original/i/53313b300d431e125e343a8f19e924f5ffe834ce675c2112b214dfa899401516/Scan-11.jpg",
    "https://freight.cargo.site/t/original/i/82d2716b0b77691175abaa2b22097f32c0b9d06861696d7155b3b3449a12b9b2/Scan-10.jpg",
    "https://freight.cargo.site/t/original/i/bb4a364e694eaa62fcc862de0ca86884d595e9b939f11d4660655d4477ef779d/Scan-9.jpg",
    "https://freight.cargo.site/t/original/i/bcceb4cd913dfb8f024625e8ae7d023ab509a6f15cb0508183207d92882c2ef1/Scan-8.jpg",
    "https://freight.cargo.site/t/original/i/552592fcea021fed554e4df740a078ebbfb99d42a6b176f976357d08b2380512/Scan-7.jpg",
    "https://freight.cargo.site/t/original/i/555b61864d497e8b9c9448f4c383d3d036da300a7b6eee2c7b0e357915829f96/Scan-6.jpg",
    "https://freight.cargo.site/t/original/i/d02b5a6a2195ba67dd579fea7b741783c9687f15e4177963132190e39dcbf810/Scan-3.jpg",
    "https://freight.cargo.site/t/original/i/832fa9b0c6234fec2ffb34e41908c1d5831bf890c5e3b3955d7a4ecf7418734f/Scan-2.jpg",
    "https://freight.cargo.site/t/original/i/eb1453d11ec2809d504c037405f395020d701c12d35c35e8c2279c1a3f80434e/Scan-1.jpg"
  ],
  },
  {
    titre:"Allié au choix",
    date:2021,
    catégorie:"Mémoire",
    technique:"Livret A5 32 pages/reliure spirale",
    descritpion:"Mémoire réalisé sur le lien entre le graphisme et la féminité.",
    images:["https://freight.cargo.site/w/860/q/94/i/1a5a4cd656f231c2165a024c95bc79f5b62f8a52f6e4ada9f29fb173aa5eb19f/yya.jpg",
    "https://freight.cargo.site/w/860/q/94/i/b94bbab1f5db7ffbe588fe56f65d3ee247bf98b9eed3775d513b3dc51291ef66/Scang.jpg",
    "https://freight.cargo.site/w/860/q/94/i/d6e01f6ce4f51940778bdf5bd9001e7d1c1f1c0b26eb61dec6a4716002c00be1/Scan--1.jpg",
    "https://freight.cargo.site/w/860/q/94/i/aceac5eaf14fc23edcbce54459858271a5d3174322962743d8d0fe4b5ef741a9/okett.jpg",
    "https://freight.cargo.site/w/942/q/94/i/92a09ee5e3e4ecd59ac5ce1bf685e3802c7357f45ac16952f5e5967ba4679c3d/okeit.jpg",
    
  ],
  },
  {
    titre:"Passage",
    date:2021,
    catégorie:"Voyage",
    technique:"Livret A5,Impression laser ",
    descritpion:"Livret réalisé suite à un voyage à Lisbonne durant lequel un matériel graphique a été collecté. Un matériel qui a donné naissance à une édition sur la thématique du passage. Une expérience passagère dans une ville de passage, où le temps passe et laisse des traces.",
    images:["https://freight.cargo.site/t/original/i/d6e0ca8f975b1ac10d33f3fac839767f093300cdd177b77b710ab6b6f8ab344a/Scan-lis.jpg",
  "https://freight.cargo.site/t/original/i/92d098921f4d15368ef5b7605a2ef9807ca01f0fadbdd51a95e253b18af82a5f/lisbi.jpg",
"https://freight.cargo.site/t/original/i/9143226018d9ec96e8006f82159cf1d0a06d6616424e8053469405cdd4362c39/lisb.jpg",
"https://freight.cargo.site/t/original/i/f1814712d180cb35032ab4841aa1efd07e3ea0295a6aa190c337012ab37bc1bd/libi.jpg",
"https://freight.cargo.site/t/original/i/62525e1bf7ed86c6cfea6d209567a0bf85298cda4863faa0e76a373a2dfbae62/lib2.jpg"
],
  },
  {
    titre:"Ne pas couvrir",
    date:2021,
    catégorie:"Personnel",
    technique:"Affiche/Livret A2,Impression Riso",
    descritpion:"Catalogue d'exposition réalisé à la demande d'Éric Choisy Bernard, Artiste, Designer Numérique, Bricodeur et enseignant.",
    images:["https://freight.cargo.site/t/original/i/4f4390035e02b0d5318a4d5bf444def6f5f44d79f13b414b959b7842a350434b/DSC00264.jpg",
    "https://freight.cargo.site/t/original/i/f7aa951f7723f84423180983708b468c7515eaf6d42c079368e275fb17e5c544/DSC00302.jpg",
    "https://freight.cargo.site/t/original/i/2bc311c1b762b3e15a7c300db7aaf69472ce5f5945c4211c7f2d8413a50c4c17/DSC00286.jpg",
    "https://freight.cargo.site/t/original/i/f172630fc4cf66ad671d4346c735a936e3a461214062cb2d119771881a38c57d/DSC00271.jpg"
],
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
