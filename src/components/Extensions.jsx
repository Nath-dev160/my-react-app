import React from 'react';
import Button from '@mui/material/Button';


const Extensions =()=>{
  return(
    <div className="extensions text-center">

<div className=""> 
  <h2 className="text-2xl font-bold mb-5">Download the extension</h2>
  <p className="font-medium text-gray-400 ">We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.</p>
</div>

<div className="flex flex-col gap-10 mt-12">
      <div className="shadow-2xl h-96 rounded-2xl pt-16 ">
      <div className="logo-chrome"></div>
      <h2 className="text-2xl font-bold mb-1 mt-7">Add to Chrome</h2>
      <p className="font-medium text-gray-400 mb-6 ">Minimum version 62</p>
     <div className="custom-hr"></div>
      <Button 
      variant='contained' 
  color='primary'
  sx={{
    textTransform:'inherit',
    backgroundColor:'blue',
    marginTop:'10px',
    width:'80%',height:'50px',
    fontSize:'16px',fontWeight:'bold'
  }}> Add & Install Extension</Button>
      </div>

 <div className="shadow-2xl h-96 rounded-2xl pt-16">
      <div className="logo-firefox"></div>
      <h2 className="text-2xl font-bold mb-1 mt-7">Add to Firefox</h2>
      <p className="font-medium text-gray-400 mb-6 "> Minimum version 55</p>
      <div className="custom-hr"></div>
      <Button 
      variant='contained' 
  color='primary'
  sx={{
    textTransform:'inherit',
    backgroundColor:'blue',
    marginTop:'10px',
    width:'80%',height:'50px',
    fontSize:'16px',fontWeight:'bold'
  }}> Add & Install Extension</Button>
      </div>

 <div className="shadow-2xl h-96 rounded-2xl pt-16">
      <div className="logo-opera"></div>
      <h2 className="text-2xl font-bold mb-1 mt-7">Add to Opera</h2>
      <p className="font-medium text-gray-400 mb-6 ">Minimum version 46</p>
      <div className="custom-hr"></div>
      <Button 
      variant='contained' 
  color='primary'
  sx={{
    textTransform:'inherit',
    backgroundColor:'blue',
    marginTop:'10px',
    width:'80%',height:'50px',
    fontSize:'16px',fontWeight:'bold'
  }}> Add & Install Extension</Button>
      </div>
</div>

    </div>
    );
};

export default Extensions;
