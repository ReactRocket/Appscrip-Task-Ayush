import React from "react";
import Filters from "./components/Filters";
import Hero from "./components/Hero";


const Home = () => {
  return (
    <main className="min-h-screen w-[90%] mx-auto">
      <Hero/>
      <Filters />
    </main>
  );
};

export default Home;
