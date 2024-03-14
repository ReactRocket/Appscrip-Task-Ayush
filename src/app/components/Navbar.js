import Link from "next/link";
import React from "react";

const menuList = [
  {
    name: "SHOP",
    href: "/",
  },
  {
    name: "SKILLS",
    href: "/",
  },
  {
    name: "STORIES",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/",
  },
  {
    name: "CONTACT US",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className="h-auto w-auto ">
      <ul className="flex justify-center items-center gap-16">
        {menuList?.map((menu, index) => {
          return (
            <li key={index} className="font-[800] group relative inline-block text-[#252020] transition-all duration-300">
              <Link href={menu.href}>{menu.name}</Link>
              <div className="absolute  bottom-0 left-0 w-full bg-black h-0.5 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>

            </li> 
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
