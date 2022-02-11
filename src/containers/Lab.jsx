import React from 'react';
import '../styles/lab.css';
import Menus from '../components/Menus';
import Footer from '../components/Footer';
import LAB1 from '../asset/Lab/LAB1.gif';
import LAB2 from '../asset/Lab/LAB2.gif';
import LAB3 from '../asset/Lab/LAB3.gif';
import LAB4 from '../asset/Lab/LAB4.jpg';
import LAB5 from '../asset/Lab/LAB5.gif';
import LAB6 from '../asset/Lab/LAB6.mp4';
import LAB7 from '../asset/Lab/LAB7.jpg';
import LAB8 from '../asset/Lab/LAB8.gif';
import LAB9 from '../asset/Lab/LAB9.gif';
import LAB10 from '../asset/Lab/LAB10.gif';
import LAB11 from '../asset/Lab/LAB11.jpg';
import LAB12 from '../asset/Lab/LAB12.jpg';
import LAB13 from '../asset/Lab/LAB13.png';
import LAB14 from '../asset/Lab/LAB14.jpg';
import LAB15 from '../asset/Lab/LAB15.jpg';
import LAB16 from '../asset/Lab/LAB16.png';
import LAB17 from '../asset/Lab/LAB17.jpg';
import LAB18 from '../asset/Lab/LAB18.jpg';
import LAB19 from '../asset/Lab/LAB19.jpg';
import LAB20 from '../asset/Lab/LAB20.jpg';
import LAB21 from '../asset/Lab/LAB21.png';
import LAB22 from '../asset/Lab/LAB22.jpg';
import LAB23 from '../asset/Lab/LAB23.gif';
import LAB24 from '../asset/Lab/LAB24.jpg';
import LAB25 from '../asset/Lab/LAB25.jpg';
import LAB26 from '../asset/Lab/LAB26.jpg';

const lab  = [LAB1, LAB2, LAB3, LAB4, LAB5, LAB7, LAB8, LAB9, LAB10, LAB11, LAB12, LAB13, LAB14, LAB15, LAB16, LAB17, LAB18, LAB19, LAB20, LAB21, LAB22, LAB23, LAB24, LAB25, LAB26];

const labvid =LAB6;

const Catégorie = () => {

  return (
    <div >
   <Menus />
   <div className="container-lab">
   {lab.map((lab, index)=>(
     <img key= {index} src={lab} alt="img"  />

   ))}
   <video src={labvid} width="15%"  height="15%" controls></video>

   </div>
   <Footer/>
    </div>
  )
}

export default Catégorie
