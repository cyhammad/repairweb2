"use client";

import React from "react";
import Link from "next/link";
import phoneNumber from "../../content/phoneNumber";

const CallButton = ({ color = "default" }) => {
  return (
    <div className="card-actions">
      <button
        className={`px-3 py-2 ${
          color === "default"
            ? "bg-primary hover:bg-primary-focus"
            : "bg-" + color
        } text-white rounded duration-150 shadow-md`}
        onClick={() => {
          window.location.href = `tel:${phoneNumber}`;
        }}
      >
        Call Us
      </button>
    </div>
  );
};

export default CallButton;
