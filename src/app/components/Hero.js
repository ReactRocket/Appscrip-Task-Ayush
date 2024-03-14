import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[20vh] md:min-h-[40vh] w-full flex flex-col justify-center items-center">
      <article className="w-full h-[10vh] md:hidden mx-auto flex justify-start items-center ">
        <h1 className="flex gap-2 text-sm">
        <span className="text-[#BFC8CD]">HOME</span> <span className="text-[#BFC8CD]">|</span> <span className="text-[#252020] font-[400]">SHOP</span>
        </h1>
      </article>
      <article className="md:w-[60%] w-full  mx-auto text-center">
        <h1 className="text-[#252020] font-[Simplon Norm] font-[400] leading-[76px] tracking-wide text-2xl md:text-4xl">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="text-[#252020] font-[Simplon Norm] text-lg md:text-xl ">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </article>
    </section>
  );
};

export default Hero;
