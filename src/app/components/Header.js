import Image from "next/image";
import React from "react";
import element4 from "@/app/resourses/images/element-4.svg";
import Vector from "@/app/resourses/images/Vector.svg";
import searchNormal from "@/app/resourses/images/search-normal.svg";
import shoppingBag from "@/app/resourses/images/shopping-bag.svg";
import heart from "@/app/resourses/images/heart.svg";
import profile from "@/app/resourses/images/profile.svg";
import hamburgerMenu from "@/app/resourses/images/solar_hamburger-menu-linear.svg";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="min-h-[10vh] md:min-h-[20vh] w-full border-b ">
      <section className="w-full h-[20%]">
        <ul className="text-[#EB4C6B] font-extralight py-1 text-sm bg-black h-full w-full flex justify-around items-center">
          <li className="flex justify-center items-center gap-2.5 ">
            <Image
              height={"16px"}
              width={"16px"}
              className="fill-[#EB4C6B]"
              src={element4}
              alt="element-4"
            />{" "}
            <span>Lorem ipsum dolor</span>
          </li>
          <li className="hidden md:flex justify-center items-center gap-2.5 ">
            <Image
              height={"16px"}
              width={"16px"}
              src={element4}
              alt="element-4"
            />{" "}
            <span>Lorem ipsum dolor</span>
          </li>
          <li className="hidden md:flex justify-center items-center gap-2.5 ">
            <Image
              height={"16px"}
              width={"16px"}
              src={element4}
              alt="element-4"
            />{" "}
            <span>Lorem ipsum dolor</span>
          </li>
        </ul>
      </section>
      <section className="w-[90%] mx-auto h-[60%] flex justify-around  items-center py-5">
        <div className="h-full w-1/3 flex justify-start items-center">
          <Image src={hamburgerMenu} className="md:hidden h-[20px] md:h-[36px] "  alt="Vector" />
          <Image src={Vector} className="h-[20px] md:h-[36px] "  alt="Vector" />
        </div>
        <div className="h-full w-1/3 flex justify-center items-center">
          <h1 className="font-[inter] font-[800] md:text-3xl text-xl ">LOGO</h1>
        </div>
        <div className="h-full w-1/3 flex justify-end items-center">
          <ul className="flex justify-center items-center gap-3 md:gap-5">
            <li>
              <Image
                className="h-[16px] md:h-[24px] "
                src={searchNormal}
                alt="search-normal"
              />
            </li>
            <li>
              <Image
                className="h-[16px] md:h-[24px] "
                src={heart}
                alt="heart"
              />
            </li>
            <li>
              <Image
                className="h-[16px] md:h-[24px] "
                src={shoppingBag}
                alt="shopping-bag"
              />
            </li>
            <li className="hidden md:inline-block">
              <Image
                className="h-[16px] md:h-[24px] "
                src={profile}
                alt="profile"
              />
            </li>
            <li className="hidden md:inline-block">
              <select name="language" id="language" className="font-bold">
                <option defaultValue={"English"}>ENG</option>
                <option value="Russian">RUS</option>
                <option value="French">FRA</option>
                <option value="German">GER</option>
              </select>
            </li>
          </ul>
        </div>
      </section>
      <section className="hidden md:flex w-full h-[20%]  justify-center items-center py-5">
        <Navbar />
      </section>
    </header>
  );
};

export default Header;
