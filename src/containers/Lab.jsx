import React from 'react';
import '../styles/lab.css';
import Menus from '../components/Menus';
import Footer from '../components/Footer';
const lab  = ["https://freight.cargo.site/w/800/q/75/i/0b71a390ffcc1b8d5eb02ef0810c4db1491aa46b0dda1e1eb9c18d4229b81313/logo.jpg",
"https://freight.cargo.site/w/800/q/75/i/9db959fe76437d612e0a951fd1cfcd865adb8ddb8d169eacf21471aa2680f623/pochette.jpg",
"https://freight.cargo.site/w/800/q/75/i/0c259b1b496cf510ceb6c1fd1b9e3f152629706f6e35721875e1e456fb4cb996/Stickers.jpg",
"https://freight.cargo.site/w/800/q/75/i/e113ada09d2c1b2d14c2f91bdec8bef0fb90da335d029e2ee562ca12bb4bf7bc/Numeriser.jpg",
"https://freight.cargo.site/w/800/q/75/i/741b5a1729cbc8129b6e02691dcca5786b4616c98f7eecfefc46755f38cd73b0/1.gif",
"https://freight.cargo.site/w/800/q/75/i/cde3abc12536a508ab4437aa216d08f52197b141787c7d4c55630dbf0be3e40c/Numeriser-5.png",
"https://freight.cargo.site/w/800/q/75/i/a06b9bed89c77bcf625af19e991b39601deb68ccaf3c40b9b52bcdf45ca63e74/Numeriser-1.jpg",
"https://freight.cargo.site/w/720/q/75/i/23e2d71ebe3125f3a905f121707378c114af7ac9935239a0746e1d5e8deeb7d8/fesse.gif",
"https://freight.cargo.site/w/800/q/75/i/6febe5a6a9e7a4f7b7316bf6e13abbc3c887507bf2e90a3208ce68e6228708da/Numeriser-4.jpg",
"https://freight.cargo.site/w/800/q/75/i/ac23f7900f2f719d7567bdb941812fceda792696a3b835e818024dccb98a5359/Numeriser-2.jpg",
"https://freight.cargo.site/w/800/q/75/i/544ee606b575ddaf8f4653b8568b6aa21ca7d7d4e6a43a795aff0c5baa56e097/5.gif",
"https://freight.cargo.site/w/800/q/75/i/1221caf72700a8038658f52745580cf1ccee53cdc3353d94f0c53eda1bdd175e/3.gif",
"https://freight.cargo.site/w/800/q/75/i/f8950c6a6aed8012a301e883f959d79b7c3d2717eef2742f3c1eccef8a2af016/Insta1.jpg",
"https://freight.cargo.site/w/600/q/75/i/2a7e1935aadb3d2157498465bffdd51c50b20251efe254f55aa2097a6dee1ece/jupe.png",
"https://freight.cargo.site/w/1000/q/75/i/60a7a155ddbf379a872a03f930591b1936b50726670d621bb6eca7a7c26c9285/metro.png",
"https://freight.cargo.site/w/1500/q/75/i/19023c4078f4545bab8c45446dcec4c06bf09559167b1e654f1f5da41a8da50a/MISE-EN-GARDE.jpg",
"https://freight.cargo.site/w/1500/q/75/i/905ea5445a1e02b8b2d7de9cb0039611dccfee3b0052a2ed776c3854224973bb/essais1.gif",
"https://freight.cargo.site/w/800/q/75/i/a5eecd2d0429302efc1cda8692a3fae3a1d9fc1f677be59def80b99adb053f5d/11.jpg",
"https://freight.cargo.site/w/800/q/75/i/ee34cb5e23a10b2fc826873625b001be315c254eb6fe5cf0c1a203170a6481ec/dg.jpg",
"https://freight.cargo.site/w/1500/q/75/i/03d10d47ee0ec509a0549a84a7080c648707ad56c645766b6f8537eb9d1f8fc3/zoom.jpg",
"https://freight.cargo.site/w/800/q/75/i/52786b450b0b408a7a13528cb2b2e753d7bd98307111b33b0f2a9ab16e7a3eca/AP.TABE.gif",
"https://freight.cargo.site/w/720/q/94/i/caa219c184c8bda40790548226a14a46cbd3c0b9cc08f5c29643261393749334/ouais.gif",
"https://freight.cargo.site/t/original/i/8c6b9c4b59923e43307e65fefc3c76094c1377e174f2f0bf349ac3d217243640/kckdsjdsfl.jpg",
"https://freight.cargo.site/t/original/i/781a8ba043c3e316dfda8a27311ca942097cda88219ff8942117830abe853d88/jhhk.jpg",
"https://freight.cargo.site/w/840/q/75/i/a15749b177b7ef015993788e9cff8b17b69f91875f7b6d5c93f6f754789593f6/Gif-2.gif"];

const labvid =["https://files.cargocollective.com/c861648/Composition-1.mp4"];

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
