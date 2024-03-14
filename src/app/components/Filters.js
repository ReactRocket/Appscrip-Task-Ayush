"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrowLeft from "@/app/resourses/images/arrow-left.svg";
import arrowRight from "@/app/resourses/images/arrow-right.svg";
import arrowDown from "@/app/resourses/images/down-key.svg";
import ProductCard from "./ProductCard";

const filtersArray = [
  {
    text: "IDEAL FOR",
    name: "idealFor",
  },
  {
    text: "occasion",
    name: "occasion",
  },
  {
    text: "OCCASION",
    name: "occasion",
  },
  {
    text: "WORK",
    name: "work",
  },
  {
    text: "FABRIC",
    name: "fabric",
  },
  {
    text: "SEGMENT",
    name: "segment",
  },
  {
    text: "SUITABLE FOR",
    name: "suitableFor",
  },
  {
    text: "RAW MATERIALS",
    name: "rawMaterials",
  },
  {
    text: "PATTERN",
    name: "Pattern",
  },
];

const Filters = () => {
  const [filterToggal, setFilterToggal] = useState(false);
  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem("product-list")) || []
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        localStorage.setItem("product-list", JSON.stringify(json))
      );
  }, []);

  return (
    <div className="min-h-screen w-full">
      <section className="w-full h-24 border-y flex justify-between items-center p-2">
        <div className="w-1/3 flex justify-start items-center gap-14">
          <h1 className="font-bold text-xl uppercase ">3425 Items</h1>
          <button
            onClick={() => setFilterToggal(!filterToggal)}
            className="flex justify-center items-center gap-2"
          >
            {" "}
            <Image
              className="fill-[#292D32] "
              height={"10px"}
              width={"5px"}
              src={filterToggal ? arrowLeft : arrowRight}
              alt="Arrow Left"
            />{" "}
            <h2 className="font-[400] text-[#888792] underline">
              {filterToggal ? "HIDE FILTER" : "SHOW FILTER"}
            </h2>
          </button>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <select
            name="language"
            id="language"
            class="font-bold text-gray-700 uppercase"
          >
            <option value="recommended" selected>
              RECOMMENDED
            </option>
            <option value="newestFirst">Newest first</option>
            <option value="priceHighToLow">Price: high to low</option>
            <option value="priceLowToHigh">Price: low to high</option>
          </select>
        </div>
      </section>
      <section className="w-full min-h-screen flex">
        {filterToggal && (
          <aside className="w-1/4">
            <form>
              <ul class="flex flex-col gap-2 max-w-[280px] py-5 mx-auto">
                <li className="border-b flex justify-start p-2 gap-3 items-center ">
                  <input type="checkbox" name="customizble" id="Customizble" />
                  <label
                    htmlFor="Customizble"
                    className="uppercase font-bold text-[#252020]"
                  >
                    Customizble
                  </label>
                </li>
                {filtersArray?.map((item, index) => {
                  return (
                    <li key={index} className="border-b">
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span class="flex flex-col gap-2">
                            <span className="font-bold text-[#252020]">
                              {item.text}
                            </span>
                            <h2 className="font-[400] text-[#252020]">All</h2>
                          </span>
                          <Image
                            className="fill-[#292D32] transition group-open:rotate-180"
                            height={"10px"}
                            width={"5px"}
                            src={arrowDown}
                            alt="Arrow Left"
                          />{" "}
                        </summary>

                        <article class=" pb-4">
                          <ul class="flex flex-col gap-4 pl-2 mt-4">
                            <h2 className="underline text-[#BFC8CD] ">
                              Unselect all
                            </h2>
                            <li class="flex gap-2 ">
                              <input type="checkbox" name="men" id="men" />
                              <label
                                htmlFor="men"
                                className="uppercase  text-[#252020]"
                              >
                                Men
                              </label>
                            </li>

                            <li class="flex gap-2 ">
                              <input type="checkbox" name="women" id="women" />
                              <label
                                htmlFor="women"
                                className="uppercase  text-[#252020]"
                              >
                                Women
                              </label>
                            </li>
                            <li class="flex gap-2 ">
                              <input type="checkbox" name="kids" id="kids" />
                              <label
                                htmlFor="kids"
                                className="uppercase  text-[#252020]"
                              >
                                Baby & Kids
                              </label>
                            </li>
                          </ul>
                        </article>
                      </details>
                    </li>
                  );
                })}
              </ul>
            </form>
          </aside>
        )}

        <main
          className={` grid ${
            filterToggal ? "grid-cols-3 w-3/4" : "grid-cols-4 w-full"
          } gap-6 p-10`}
        >
          {productList?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                title={product.title}
                image={product.image}
              />
            );
          })}
        </main>
      </section>
    </div>
  );
};

export default Filters;
