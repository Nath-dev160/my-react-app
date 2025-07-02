import React, {createContext, useState} from "react";

export const navContext = createContext();
export const navProvider = ({children}) =>{
  const [isActive,SetisActive] = useState(false);

  const toggleNav =()=>{
    SetisActive(prev=>!prev);
  }

  return(
    <navContext.Provider value={{isActive,SetisActive}}>
    {children}
    </navContext.Provider>
    );
}
