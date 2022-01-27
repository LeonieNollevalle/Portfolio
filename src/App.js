import Home from './containers/Home.jsx';
import About from './containers/About.jsx';
import {
	Routes,
  Route,
} 
from "react-router-dom";
import Éditions from './containers/Éditions.jsx';
import Interface from './containers/Interface.jsx';
import Typographie from './containers/Typographie.jsx';
import Identite from './containers/Identite.jsx';
import Motion from './containers/Motion.jsx';
import Lab from './containers/Lab.jsx';
import PopUpImage from './components/popUpImage.jsx';

function App() {
  return (
    <div className="App">
       <PopUpImage/> 

<Routes>
		<Route path="/Lab" element={<Lab />} />
		<Route path="/Motions" element={<Motion />} />
		<Route path="/Identite" element={<Identite />} />
		<Route path="/Typographie" element={<Typographie />} />
    <Route path="/Interface" element={<Interface/>} />
    <Route path="/Editions" element={<Éditions />} />
	  <Route path="/about" element={<About />} />
    <Route exact path="/" element={<Home />} />
</Routes>

    </div>
  );
}

export default App;
