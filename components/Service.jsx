"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CallButton from "./buttons/CallButton";
import { useRouter } from "next/navigation";

const Service = ({ name, imageUrl, description, dark, callButtonColor="default" }) => {
  const router = useRouter();
  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  };
  return (
    <div
      className={`card w-60 sm:w-[16rem] ${
        dark ? "bg-base-100 text-info-content" : "bg-base-100 text-info-content"
      } shadow hover:shadow-md duration-300 rounded-none`}
    >
      <figure
        onClick={() => {
          router.push(`/services/${slugify(name)}`);
        }}
      >
        <Image
          src={imageUrl}
          className="w-full hover:scale-105 duration-300 cursor-pointer"
          width={300}
          height={300}
          alt="repair"
        />
      </figure>
      <div className="card-body">
        <h2
          className="card-title text-base cursor-pointer hover:scale-105 duration-300"
          onClick={() => {
            router.push(`/services/${slugify(name)}`);
          }}
        >
          {name}
        </h2>
        <p
          className="text-start text-sm cursor-pointer"
          onClick={() => {
            router.push(`/services/${slugify(name)}`);
          }}
        >
          {description}
        </p>
        <div className="card-actions justify-end">
          <CallButton color={callButtonColor} />
        </div>
      </div>
    </div>
  );
};

export default Service;
