import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Footer = ()=>{
  return(
    <>

    <div className="py-14 px-12 bg-blue-700 text-center">

      <div className="">
      <p className="text-white uppercase tracking-wide">35,000+ already joined</p>
      <p className="text-white font-bold text-2xl">Stay up-to-date with what we’re doing</p>
      <TextField
        label="Enter your email address" 
        size='small'
        margin='normal'
        fullwidth
        sx={{
          borderRadius:'5px',
          display:'flex',
          alignItems:'center',justifyContent:'center',
          backgroundColor:'white',
          border:'none',
        }}
        />
      <Button 
  className="h-12 w-full font-extrabold"  
  variant='contained'  
  sx={{
    textTransform:'inherit',
    backgroundColor:'hsl(0, 94%, 66%)',
    fontSize:'16px',
    fontWeight:'bold'
  }}>
  Contact Us
  </Button>

      </div>
    </div>

    <div className="footer py-9 text-center w-full flex flex-col items-center">
      <div className="footerLogo"></div>

      <li  className="transform list-none flex flex-col uppercase text-white font-bold gap-6">
        <a href="#">features</a>
        <a href="#">pricing</a>
        <a href="#">conatct</a>
      </li>

      <div className="flex flex-row items-center mt-6">
        <div className="facebook"></div>
        <div className="twitter"></div>
      </div>

      </div>
      
    </>
    );
};

export default Footer;
