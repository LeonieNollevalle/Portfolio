import React, {useState} from 'react'
import AccueilBg from '../components/AccueilBg';
import '../styles/home.css';
import Footer from '../components/Footer';

const Home = () => {
  const[contact, setContact]= useState(false);

  return (
    <div className="container-home">
        <AccueilBg contact={contact} setContact={setContact} />
         <div className="container-pres">
      <h1 className="Intro-hi">HI,</h1>
      <p className="txt-pres">Bienvenue, sur mon portfolio, je m’appelle Léonie, je suis graphiste et développeuse junior ! Passionnée par le graphisme, je souhaite faire partager mon expérience à travers mon travail. Que je vous invite à parcourir à votre guise. :) ↑ </p>
    </div>
    <Footer contact={contact} setContact={setContact}/>
    </div>
  )
}

export default Home;
