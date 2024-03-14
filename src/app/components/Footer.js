import React from "react";
import usaIMG from "@/app/resourses/images/USA.svg";
import instaIMG from "@/app/resourses/images/instagram.svg";
import linkedIMG from "@/app/resourses/images/linkedin.svg";
import pay1 from "@/app/resourses/images/Group 136187.svg";
import pay2 from "@/app/resourses/images/Group 136190.svg";
import pay3 from "@/app/resourses/images/Group 136192.svg";
import pay4 from "@/app/resourses/images/Group 136193.svg";
import pay5 from "@/app/resourses/images/Group 136194.svg";
import pay6 from "@/app/resourses/images/Group 136195.svg";
import arrowDown from "@/app/resourses/images/arrow-down.svg";

import Image from "next/image";
import Link from "next/link";

const mettaList = [
  { text: "mettā muse", href: "/" },
  { text: "About Us", href: "/" },
  { text: "Stories", href: "/" },
  { text: "Artisans", href: "/" },
  { text: "Boutiques", href: "/" },
  { text: "Contact Us", href: "/" },
  { text: "EU Compliances Docs", href: "/" },
  { text: "Join as a Seller", href: "/" },
];

const quickLinkList = [
  { text: "Quick Links", href: "/" },
  { text: "Orders & Shipping", href: "/" },
  { text: "Join/Login as a Seller", href: "/" },
  { text: "Payment & Pricing", href: "/" },
  { text: "Return & Refunds", href: "/" },
  { text: "FAQs", href: "/" },
  { text: "Privacy Policy", href: "/" },
  { text: "Terms & Conditions", href: "/" },
];

const paymentAcceptedList = [
  {
    text: "G-Pay",
    href: "/",
    img: pay1,
  },
  {
    text: "G-Pay",
    href: "/",
    img: pay2,
  },
  {
    text: "G-Pay",
    href: "/",
    img: pay3,
  },
  {
    text: "G-Pay",
    href: "/",
    img: pay4,
  },
  {
    text: "G-Pay",
    href: "/",
    img: pay5,
  },
  {
    text: "G-Pay",
    href: "/",
    img: pay6,
  },
];

const Footer = () => {
  return (
    <footer className="min-h-screen w-full text-white bg-black">
      <section className="w-[90%] h-full mx-auto ">
        <article className="w-full h-[45%] md:flex py-10 md:border-b">
          <div className="w-full md:w-[60%] h-[90%] py-3  flex flex-col justify-start items-start gap-3 md:gap-5">
            <h1 className="font-bold text-sm md:text-xl uppercase">
              Be the first to know
            </h1>
            <p className="font-[400] text-sm">
              Sign up for updates from mettā muse.
            </p>
            <div className="flex justify-between items-center w-full md:w-[90%] gap-3 md:gap-5 md:pt-5">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="rounded-sm py-2 px-4 w-2/3 h-full"
              />
              <button className="w-1/3 h-full bg-black hover:bg-gray-800 text-[#FFFFFF] font-[500] text-lg py-1 md:py-2 px-4 rounded  border border-gray-400 shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
          <div className="md:w-[40%] w-full py-3 h-[90%]  flex flex-col justify-start items-start gap-3">
            <div className="flex flex-col justify-start items-start gap-3 py-3  border-y md:border-none w-full">
              <h1 className="text-xl font-bold uppercase">CONTACT US</h1>

              <p className="font-[400] text-sm">
                <a href="tel:+44 221 133 5360"> +44 221 133 5360 </a>
              </p>
              <p className="font-[400] text-sm">
                <a href="mailto:customercare@mettamuse.com">
                  {" "}
                  customercare@mettamuse.com
                </a>
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 py-5  border-b md:border-none w-full">
              <h1 className="text-xl font-bold uppercase">Currency</h1>
              <p className="flex justify-center items-center gap-2">
                <Image src={usaIMG} alt="USA Img" height={24} width={24} />*{" "}
                <span>USD</span>
              </p>
              <p className="md:inline-block hidden w-full font-[400] text-sm text-nowrap overflow-hidden text-ellipsis ">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </article>

        {/* desktop view  */}
        <article className="hidden w-full h-[50%] md:flex py-10">
          <div className="w-[60%] h-[90%]  flex justify-start items-start gap-5">
            <ul className="w-full h-full flex flex-col gap-3">
              {mettaList?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${index === 0 ? "font-bold text-2xl" : ""}`}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className="w-full h-full flex flex-col gap-3">
              {quickLinkList?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${index === 0 ? "font-bold text-2xl" : ""}`}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[40%] h-[90%] flex flex-col justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-start gap-3 h-1/2 w-full">
              <h1 className="text-xl font-bold uppercase">Follow Us</h1>
              <p className="flex justify-center items-center gap-2">
                <Link
                  href={"/"}
                  className="border rounded-full p-2 cursor-pointer"
                >
                  <Image src={instaIMG} alt="USA Img" height={24} width={24} />
                </Link>
                <Link
                  href={"/"}
                  className="border rounded-full p-2 cursor-pointer"
                >
                  <Image src={linkedIMG} alt="USA Img" height={24} width={24} />
                </Link>
              </p>
            </div>
            <div className="flex flex-col justify-end items-start gap-3 h-1/2 w-full">
              <h1 className="text-xl font-bold ">mettā muse Accepts</h1>
              <p className="flex justify-center items-center gap-2">
                {paymentAcceptedList?.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`${
                        index === 0 ? "py-1.5 px-1" : ""
                      } border rounded-sm bg-white  cursor-pointer`}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={35}
                        width={56}
                      />
                    </Link>
                  );
                })}
              </p>
            </div>
          </div>
        </article>

        {/* mobile view  */}

        <article className="md:hidden w-full min-h-[50%] block">
          <details className="group border-b pb-10">
            <summary className="flex items-center justify-between gap-2  font-medium marker:content-none hover:cursor-pointer">
              <h1 className="font-bold text-lg text-white">mettā muse</h1>
              <Image
                className="fill-white text-white transition group-open:rotate-180"
                height={"10px"}
                width={"5px"}
                src={arrowDown}
                alt="Arrow Left"
              />{" "}
            </summary>

            <article className=" pb-4">
              <ul className="flex flex-col gap-4 pl-2 mt-4">
                {mettaList?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${index === 0 ? "hidden" : ""}`}
                    >
                      <Link href={item.href}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          </details>
          <details className="group border-b py-10">
            <summary className="flex items-center justify-between gap-2  font-medium marker:content-none hover:cursor-pointer">
              <h1 className="font-bold text-lg text-white uppercase">
                Quick Links
              </h1>
              <Image
                className="fill-white text-white transition group-open:rotate-180"
                height={"10px"}
                width={"5px"}
                src={arrowDown}
                alt="Arrow Left"
              />{" "}
            </summary>

            <article className=" pb-4">
              <ul className="flex flex-col gap-4 pl-2 mt-4">
                {quickLinkList?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${index === 0 ? "hidden" : ""}`}
                    >
                      <Link href={item.href}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          </details>
          <details className="group border-b py-10">
            <summary className="flex items-center justify-between gap-2  font-medium marker:content-none hover:cursor-pointer">
              <h1 className="font-bold text-lg text-white uppercase">
                Follow Us
              </h1>
              <Image
                className="fill-white text-white transition group-open:rotate-180"
                height={"10px"}
                width={"5px"}
                src={arrowDown}
                alt="Arrow Left"
              />{" "}
            </summary>

            <article className=" pt-4">
              <p className="flex justify-start items-center gap-2">
                <Link
                  href={"/"}
                  className="border rounded-full p-2 cursor-pointer"
                >
                  <Image src={instaIMG} alt="USA Img" height={24} width={24} />
                </Link>
                <Link
                  href={"/"}
                  className="border rounded-full p-2 cursor-pointer"
                >
                  <Image src={linkedIMG} alt="USA Img" height={24} width={24} />
                </Link>
              </p>
            </article>
          </details>
          <div className="flex flex-col justify-end py-10 items-start gap-3 h-1/2 w-full">
              <h1 className="text-xl font-bold ">mettā muse Accepts</h1>
              <p className="flex justify-center items-center gap-2">
                {paymentAcceptedList?.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`${
                        index === 0 ? "py-1.5 px-1" : ""
                      } border rounded-sm bg-white  cursor-pointer`}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={35}
                        width={56}
                      />
                    </Link>
                  );
                })}
              </p>
            </div>
        </article>

        <article className="w-full h-[5%] text-center">
          <h2 className="font-[400] text-sm py-3">
            Copyright © 2023 mettamuse. All rights reserved.
          </h2>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
