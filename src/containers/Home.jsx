import React from 'react'
import AccueilBg from '../components/AccueilBg';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="container-home">
        <AccueilBg />
         <div className="container-pres">
      <h1 className="Intro-hi">HI,</h1>
      <p className="txt-pres">Bienvenue, sur mon portfolio, je m’appelle Léonie je suis graphiste et dévellopeuse parfois ! 
      Passionnée par le graphisme, je souhaite vous faire partager cette expérience à travers mon travail que vous pouvez parcourir à votre guise. :)</p>
    </div>
    </div>
  )
}

export default Home;
