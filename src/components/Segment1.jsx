import React from 'react';

const Segment1 =()=>{
  return(
    <div className="flex flex-col gap-10 mt-32">
    <div className='relative' >
      <div className="Segment1bg overflow-hidden h-60  z-10 "></div>
      </div>
      <div className="Segment1descr text-center">

      <h1 className="text-3xl font-bold mb-5"> A Simple Bookmark Manager </h1>
      <p className="font-medium text-gray-400  pr-5 pl-5"> A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.</p>

  <div className="Get flex flex-row  justify-between gap-4 mt-8">
    <div className="h-12 border-2 border-transparent w-28 text-white bg-blue-700 flex items-center justify-center font-medium shadow-2xl cursor-pointer hover:text-blue-600 hover:bg-transparent hover:border-blue-600 ">Get it on Chrome</div>
    <div className="h-12 border-2 w-28 text-black bg-gray-50 flex items-center justify-center font-medium shadow-2xl cursor-pointer hover:bg-transparent">Get it on Firefox</div>
  </div>

      </div>
    </div>
    );
};

export default Segment1;
