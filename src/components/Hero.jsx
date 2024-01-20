import React, { useState } from "react";

const Hero = () => {
  return (
    <header
      className={`w-full h-96 bg-[url('https://erikschlegel.files.wordpress.com/2015/06/maxresdefault.jpg?w=1440')]
        bg-cover bg-center flex justify-center items-center`}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">
          WELCOME TO
          <span className="text-amber-500"> MY REACT PROJECT</span>
        </h1>
        <p className="mt-5 text-center text-lg text-white opacity-70">
          This webiste is about programming and things like that
        </p>

        <span className="mt-8 px-12 py-3  text-white/80 uppercase hover:font-serif">
          Created by Aymen Ben Tekfa
        </span>
      </div>
    </header>
  );
};

export default Hero;
