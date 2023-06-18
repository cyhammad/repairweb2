'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CallButton from "./buttons/CallButton";
import { useRouter } from "next/navigation";

const Service = ({ name, imageUrl, description, dark }) => {
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
        dark ? "bg-base-100 text-black" : "bg-base-100 text-black"
      } shadow-xl rounded-none`}
      onClick={() => {
        router.push(`/services/${slugify(name)}`);
      }}
    >
      <figure>
        <Image
          src={imageUrl}
          className="w-full"
          width={300}
          height={300}
          alt="repair"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base">{name}</h2>
        <p className="text-start text-sm">{description}</p>
        <div className="card-actions justify-end">
          <CallButton dark />
        </div>
      </div>
    </div>
  );
};

export default Service;
