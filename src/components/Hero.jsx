import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-neutral-900 h-screen flex items-center justify-center">
      <div className="relative container mx-auto px-6 py-12 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Try On Accessories Virtually
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200">
          Discover how our accessories look on you before you buy.
        </p>
      </div>
    </div>
  );
};

export default Hero;