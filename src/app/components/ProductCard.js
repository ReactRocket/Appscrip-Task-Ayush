import Image from "next/image";
import Link from "next/link";
import React from "react";
import likeButton from "@/app/resourses/images/like-heart.svg";

const ProductCard = ({ title, image }) => {
  return (
    <section className="h-full w-full flex flex-col gap-5 cursor-pointer ">
      <article className="h-[90%] w-full">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-contain hover:scale-105 scale-100 transition-all duration-300"
          width={300}
          height={500}
        />
      </article>
      <article className="h-[10%] w-full flex flex-col gap-3">
        <div className="h-1/2 w-full">
          <h1 className="text-[#252020] font-bold text-lg text-nowrap text-ellipsis overflow-hidden uppercase">
            {title}
          </h1>
        </div>
        <div className="h-1/2 w-full flex justify-between items-center gap-5">
          <Link
            href={"/"}
            className="text-[#888792] text-sm text-nowrap text-ellipsis overflow-hidden"
          >
            <span className="underline">Sign in</span>
            <span> or Create an account to see pricing</span>
          </Link>
          <Image className="md:h-[] md:w-[] h-[12px] w-[14px]" src={likeButton} alt="like button" />
        </div>
      </article>
    </section>
  );
};

export default ProductCard;
