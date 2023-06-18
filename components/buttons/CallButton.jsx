'use client';

import React from "react";
import Link from "next/link";

const CallButton = ({ dark }) => {
  return (
    <div className="card-actions mt-5">
      <button
        className={`btn ${dark ? "btn-primary" : "btn-white"}`}
        onClick={() => {
          window.location.href = `tel:123-456-7890`;
        }}
      >
        Call Us
      </button>
    </div>
  );
};

export default CallButton;
