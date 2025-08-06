import React,{useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';



const Nav =({closeNav,navClass})=>{

  return(
    <div className={`Nav glass-card ${navClass} fixed top-0 overflow-hidden `}>

    <div className='flex flex-row w-full h-14 justify-between items-center mb-7'>
      <div className="Navlogo "></div>
      <CloseIcon className="text-white " onClick={closeNav}
      />
    </div>

    <div className='flex flex-col text-white text-2xl uppercase font-medium w-full  text-center'>
      <div className='border-t-2 border-gray-500 py-4 cursor-pointer'> 
      <a href="#" className='navLink decoration-0'>Features</a>
      </div>
      <div className='border-t-2 border-gray-500 py-4 cursor-pointer'> 
      <a href="#"className='navLink decoration-0'>Pricing</a>
      </div>
      <div className='border-t-2 border-gray-500 py-4 cursor-pointer'> 
      <a href="#"className='navLink decoration-0'>Contact</a>
      </div>
      <div className='border-t-2 border-gray-500 py-4 border-b-2  cursor-pointer'>
      <a href="#"className='navLink decoration-0'>Login</a>
      </div>
    </div>

     <div className="flex flex-row items-center mt-52 w-full justify-center">
        <div className="facebook"></div>
        <div className="twitter"></div>
      </div>

    </div>
    );
};

export default Nav;
