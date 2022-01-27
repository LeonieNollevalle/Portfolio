import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {PopUpImgContextProvider} from './context/contextPopUpimg';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <PopUpImgContextProvider>
    <App />
  </PopUpImgContextProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
