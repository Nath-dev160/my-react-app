import React from 'react';
import Button from '@mui/material/Button';

const Feature =()=>{
  return(
    <div className="text-center mt-28">
      <h2 className="text-2xl font-bold mb-5">Features</h2>
      <p className="font-medium text-gray-400  pr-5 pl-5">  Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.</p>

<div className="features flex flex-col mt-12 mb-16 cursor-pointer">

  <div className=" flex flex-col items-center hover:border-b-4 border-red-400">
  <hr className=""/>
  <p className="font-medium text-gray-400 p-3 border-transparent
  hover:text-blue-900 border-b-4 hover:border-red-400 ">Simple Bookmarking</p>
  </div>

   <div className=" flex flex-col items-center">
   <hr/>
   <p className="font-medium text-gray-400 p-3 border-transparent
  hover:text-blue-900 border-b-4 hover:border-red-400">Speedy Searching</p>
   </div>

    <div className=" flex flex-col items-center">
    <hr/>
    <p  className="font-medium text-gray-400 p-3 border-transparent
  hover:text-blue-900 border-b-4 hover:border-red-400">
     Easy Sharing</p>
     <hr/>
     </div>

</div>




<div className="flex flex-col text-align w-full items-center relative hidden ">
  <div className="bg-tab1 bg-contain rounded-2xl "></div>
  <div>
  <h2 className="text-2xl font-bold mt-16 mb-5">Bookmark in one click</h2>
  <p className="font-medium text-gray-400 pr-5 pl-5 mb-7">Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.</p>
  <Button 
  variant='contained' 
  color='primary'
  sx={{
    textTransform:'inherit',
    backgroundColor:'blue'
  }}
   >
   More Info
   </Button>
  </div>
</div>

<div className="flex flex-col text-align w-full items-center relative hidden">
  <div className="bg-tab2 bg-contain rounded-2xl "></div>
  <div>
  <h2 className="text-2xl font-bold mt-16 mb-5">Bookmark in one click</h2>
  <p className="font-medium text-gray-400 pr-5 pl-5 mb-7">Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.</p>
  <Button 
  variant='contained' 
  color='primary'
  sx={{
    textTransform:'inherit',
    backgroundColor:'blue'
  }}
   >
   More Info
   </Button>
  </div>
</div>

<div className="flex flex-col text-align w-full items-center relative hidden">
  <div className="bg-tab3 bg-contain rounded-2xl "></div>
  <div>
  <h2 className="text-2xl font-bold mt-16 mb-5">Bookmark in one click</h2>
  <p className="font-medium text-gray-400 pr-5 pl-5 mb-7">Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.</p>
  <Button 
  variant='contained' 
  color='primary'
  sx={{
    textTransform:'inherit',
    backgroundColor:'blue'
  }}
   >
   More Info
   </Button>
  </div>
</div>


    </div>
    );
};

export default Feature;
