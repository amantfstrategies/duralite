"use client";
import React from 'react';

const WelcomeSection = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center px-4 md:px-40 py-16 bg-gray-50'>
      <h1 className='text-3xl md:text-5xl font-thin text-[#004185]'>
        Welcome to Duralite Industries
      </h1>
      <div className="w-20 md:w-32 my-4 h-[2px] bg-yellow-400"></div>
      <p className="text-base md:text-xl font-[400] text-gray-600 leading-relaxed px-4 md:px-0 py-8 text-justify md:text-left">
        Duralite Industries are the leading manufacturers of the EVA floats in India. 
        We use high-quality Ethylene Vinyl Acetate (E.V.A) raw material for the production of the DF-Series floats. 
        The floats, according to their sizes, can be used for Purse-Seine Fishing as well as for Gill Netting.
        <br />
        <br />
        Duralite Industries also manufactures plastic accessories in different materials such as HDPE, PP, NYLON, PET, ABS, SAN, POLYSTYRENE, PVC, etc. 
        Customized EVA floats can also be manufactured for commercial and private applications.
      </p>
      <button className="mt-6 px-6 py-2 bg-[#004185] text-white rounded-md shadow-lg hover:bg-[#003366] transition-all">
        Learn More
      </button>
    </div>
  );
};

export default WelcomeSection;
