"use client"; 

import React from "react";

const AboutTitle = () => {
  return (
    <div>
      <div className="w-full h-fit ">
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: "url('./f-bg.jpg')",
            backgroundAttachment: "fixed", 
          }}
        />

        <h1 className="text-5xl text-white/70 bg-black/25 flex items-center justify-center py-20 font-thin z-10 relative">
          About
        </h1>

        <div className="bg-white py-20 h-fit shadow-xl w-full px-40">
          <h1 className="text-5xl text-[#F2BE37] font-[700]">
          Drawing on years of experience
          </h1>
          <p className="text-3xl text-[#6F6D70] py-8">
          Duralite focus is to provide exceptionally engineered road safety crash barrier systems and solutions to reduce repair costs and assist in reducing road fatalities globally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <h2 className="text-3xl font-[700] text-gray-800 mb-4">About Us</h2>
              <p className="text-lg text-gray-600 font-thin">
                We are a passionate team dedicated to bringing innovative solutions to the world. With years of experience in the industry, we focus on delivering quality services that meet the needs of our clients. Our team is built on the foundation of trust, collaboration, and integrity.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl font-[700] text-gray-800 mb-4">Our Experience</h2>
              <p className="text-lg font-thin text-gray-600">
                With extensive experience in various domains, we bring deep expertise in delivering top-notch products and services. Our track record speaks for itself, and we are constantly evolving to stay ahead of the curve. Join us in transforming ideas into reality with our proven solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTitle;
