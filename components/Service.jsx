import React from "react";
import Image from "next/image";
import CallButton from "./buttons/CallButton";

const Service = ({ name, imageUrl, description, dark }) => {
  return (
    <div
      className={`card w-60 sm:w-[22rem] ${
        dark ? "bg-base-100 text-black" : "bg-base-100 text-black"
      } shadow-xl rounded-none`}
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
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <CallButton dark />
        </div>
      </div>
    </div>
  );
};

export default Service;
