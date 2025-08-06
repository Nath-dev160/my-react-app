import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
const Header =({openNav})=>{
  return(
    <div className="glass-card h-24 flex flex-row items-center justify-between  mb-10 fixed top-0 z-10 px-5">
      <div className="Toplogo h-14 w-28  "></div>
      <MenuIcon onClick={openNav}/>

    </div>
    )
} 

export default Header;
