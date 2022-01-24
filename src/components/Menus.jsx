import React from "react";
import { slide as Menu } from 'react-burger-menu';
import '../styles/Menus.css';
import {
  Link
} from "react-router-dom";


const Menus = () => {

  return (
    <>
       <div className="bg-menus"></div>
       <Link to="/" className="link"><div className="logo"><h1>home</h1></div></Link>
       <Menu>
       <Link to="/Lab" className="link"> <a id="home" className="menu-item" href="/Lab">Lab</a></Link>
       <Link to="/Motions" className="link"><a id="about" className="menu-item" href="/Motions">Motions</a></Link>
       <Link to="/Editions" className="link"><a id="contact" className="menu-item" href="/Editions">Éditions</a></Link>
       <Link to="/Identite" className="link"><a className="menu-item--small" href="/Identite">Identitées</a></Link>
       <Link to="/Interface" className="link"><a className="menu-item--small" href="/Interface">Interfaces</a></Link>
       <Link to="/Typographie" className="link"><a className="menu-item--small" href="/Typographie">Typographie</a></Link>
       <Link to="/about" className="link"><a className="menu-item--small" href="/about">À propos</a></Link>
      </Menu>
      </>
  )
}

export default Menus;
