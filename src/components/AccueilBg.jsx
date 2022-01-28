import React, {useState} from 'react'
import bienvenue from '../data.jsx';
import "../styles/AcceuilBg.css";
import "../styles/index.css";
import alternance from '../asset/Noir.png';
import { Link } from 'react-router-dom';
import PopUpAltern from './PopUpAltern.jsx';
const AccueilBg = () => {
const [i, setI] = useState(1)
const [z, setZ] = useState(10)
const [x, setX] = useState(-5)
const [w, setW] = useState(4)
const [pop, setPop] = useState(false);

  const handleClickNum = (min, max) => {
     return Math.floor(Math.random() * (max - min)) 
  }

const handleClick = () => {
  setI(handleClickNum(0, 152,))
  setZ(handleClickNum(0, 152,))
  setX(handleClickNum(0, 152,))
  setW(handleClickNum(0, 152,))
} 
const handlPop = () => {
  setPop(!pop);
}

  return (
    <div className="container">
    <div className ="container-logo" onClick={handlPop}>
    <img src={alternance} alt=""/>
    </div>
    {pop ? <PopUpAltern pop={pop} handlPop={handlPop}/> : null}

     <div className="container2">

      <p className="motif">
        {bienvenue[i]}
        {bienvenue[z]}
        {bienvenue[x]}
        {bienvenue[w]}
      </p>


    </div> 
    <div className="container-btn-home">

    <button className="btn-refresh" onClick={handleClick}>
     <p>⟳</p> 
    </button>
    <button className="btn-Motion" >
<Link to="/Motions" className="Link">
    <p className="Motion">Motion</p>
</Link>
    </button>

    <button className="btn-Lab" >
    <Link  to="/Lab" className="Link">
    <p> Lab </p>
    </Link>
    </button>
    <button className="btn-about" >
    <Link  to="/about" className="Link">
    <p className="About">:)</p>
    </Link>

    </button>
    <button className="btn-edition" >
    <Link  to="/Editions" className="Link">
      <p className="Lab">Éditions</p>
      </Link>

    </button>
    <button className="btn-Typographie" >
    <Link to="/Typographie" className="Link">
      <p>Typographie</p>
      </Link>

    </button>
     <button className="btn-Interface" >
     <Link to="/Interface" className="Link">
     <p> Interfaces</p>
     </Link>

    </button> 
  <button className="btn-Identité" >
  <Link  to="/Identite" className="Link">
      <p> Identitées</p>
      </Link> 

    </button>
    </div>
  </div>
  )
}

export default AccueilBg;
