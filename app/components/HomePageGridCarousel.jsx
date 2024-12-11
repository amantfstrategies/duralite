"use client";
import React, { useState, useEffect } from "react";

const HomePageGridCarousel = () => {
  const CarouselCollection = [
    { imgurl: "./carousel/img1" },
    { imgurl: "./carousel/img2" },
    { imgurl: "./carousel/img3" },
    { imgurl: "./carousel/img4" },
    { imgurl: "./carousel/img5" },
  ];

  const [firstCarouselIndex, setFirstCarouselIndex] = useState(0);
  const [secondCarouselIndex, setSecondCarouselIndex] = useState(1);
  const [thirdCarouselIndex, setThirdCarouselIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstCarouselIndex((prevIndex) =>
        prevIndex === CarouselCollection.length - 1 ? 0 : prevIndex + 1
      );
      setSecondCarouselIndex((prevIndex) =>
        prevIndex === CarouselCollection.length - 1 ? 0 : prevIndex + 1
      );
      setThirdCarouselIndex((prevIndex) =>
        prevIndex === CarouselCollection.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const renderCarousel = (index, animationClass) => (
    <div className="relative  w-full h-full overflow-hidden">
      {CarouselCollection.map((item, idx) => (
        <img
          key={idx}
          src={`/${item.imgurl}.jpg`} 
          alt={`carousel image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            idx === index ? "opacity-100" : "opacity-0"
          } ${animationClass[idx === index ? 1 : 0]}`}
        />
      ))}
    </div>
  );

  return (
    <div className="flex md:h-screen flex-col md:flex-row h-screen montserrat">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col h-full p-6 md:p-8 bg-[#004185] items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-white font-thin text-center montserrat">
          “We push the boundaries through innovation to achieve perfection with
          the ultimate goal of heading towards zero road fatalities.”
        </h1>
        <div className="w-16 md:w-1/3 my-4 h-[2px] bg-yellow-300"></div>
        <p className="text-lg md:text-xl text-white font-thin my-2 text-center">
          Duralite Pty Ltd.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full md:w-1/2">
        <div className="col-span-1 md:col-span-2 bg-black h-48 md:h-auto">
          {renderCarousel(firstCarouselIndex, ["", "opacity-100"])}
        </div>

        <div className="row-start-2 h-48 md:h-auto">
          {renderCarousel(secondCarouselIndex, ["translate-x-full", "translate-x-0"])}
        </div>

        <div className="row-start-2 h-48 md:h-auto">
          {renderCarousel(thirdCarouselIndex, ["translate-y-full", "translate-y-0"])}
        </div>
      </div>
    </div>
  );
};

export default HomePageGridCarousel;