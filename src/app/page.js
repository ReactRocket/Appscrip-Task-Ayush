import React from "react";
import Filters from "./components/Filters";


const Home = () => {
  return (
    <main className="min-h-screen w-[90%] mx-auto">
      <section className="h-[40vh] w-full flex justify-center items-center">
        <article className="w-[60%] mx-auto text-center">
          <h1 className="text-[#252020] font-[Simplon Norm] font-[400] leading-[76px] tracking-wide		 text-4xl">
            DISCOVER OUR PRODUCTS
          </h1>
          <p className="text-[#252020] font-[Simplon Norm] text-xl">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </article>
      </section>
      <Filters />
    </main>
  );
};

export default Home;
