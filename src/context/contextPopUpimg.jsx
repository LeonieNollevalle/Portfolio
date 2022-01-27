import React, { createContext, useState } from 'react';
const PopUpImgContext = createContext();

export const PopUpImgContextProvider = ({ children }) => {
  const [picture, setPicture] = useState(false);
  const [source, setSource] = useState(false);
  console.log(picture)
  console.log(source)
  
  return (
    <PopUpImgContext.Provider
      value={{
        picture,
        setPicture,
        source,
        setSource,
      }}
    >
      {children}
    </PopUpImgContext.Provider>
  );
};

export default PopUpImgContext;
