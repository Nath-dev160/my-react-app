import React from 'react';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = ()=>{
return(
  <div className="text-center px-7 mt-32 mb-16 ">
    <h2 className="text-2xl font-bold mb-5">Frequently Asked Questions</h2>
    <p className="font-medium text-gray-400">Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.</p>

  <div className="faqs h-16 w-full border-black border-b-2 border-gray-200 flex flex-row items-center text-black font-medium justify-between">
  <p>What is Bookmark?</p>
  <ExpandMoreIcon 
  color="primary"
  sx={{
    width:'40px',height:'40px'
  }}
  />
  </div>

  <div className="faqs h-16 w-full border-black border-b-2 border-gray-200 flex flex-row items-center text-black font-medium justify-between">
  <p>How can I request a new browser?</p>
   <ExpandMoreIcon 
  color="primary"
  sx={{
    width:'40px',height:'40px'
  }}
  />
  </div>

  <div className="faqs h-16 w-full border-black border-b-2 border-gray-200 flex flex-row items-center text-black font-medium justify-between">
  <p>Is there a mobile app?</p>
   <ExpandMoreIcon 
  color="primary"
  sx={{
    width:'40px',height:'40px'
  }}
  />
  </div>

  <div className="faqs h-16 w-full border-black border-b-2 border-gray-200 flex flex-row items-center text-black font-medium justify-between">
  <p className="mr-12">What about other Chromium browsers?</p>
   <ExpandMoreIcon 
  color="primary"
  sx={{
    width:'40px',height:'40px'
  }}
  />
  </div>

   <Button
   className="py-14 px-7"
  variant='contained' 
  color='primary'
  sx={{
    textTransform:'inherit',
    backgroundColor:'blue',
    marginTop:'35px',
    fontWeight:'bold'
  }}
   >
   More Info
   </Button>

  </div>
  )
};

export default FAQs;
