import React from "react";
import Image from "next/image";
import CallButton from "./buttons/CallButton";

const Service = ({ name, imageUrl, description, dark }) => {
  return (
    <div
      className={`card w-52 ${
        dark ? "bg-info-content text-white" : "bg-primary text-black"
      } shadow-xl rounded-none`}
    >
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center px-6">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <CallButton dark={dark} />
      </div>
    </div>
  );
};

export default Service;
