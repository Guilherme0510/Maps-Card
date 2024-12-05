import React from "react";
import { images } from "../Assets/assets";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row p-7 justify-center">
      <div className="flex items-center">
        <h1>Encontre aqui o melhor modo de alavancar sua visibilidade</h1>
      </div>
      <div>
        <img src={images.img_banner} alt="" className="w-[50%]" />
      </div>
    </div>
  );
};

export default Banner;
