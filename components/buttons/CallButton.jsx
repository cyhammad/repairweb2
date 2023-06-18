'use client';

import React from "react";
import Link from "next/link";
import phoneNumber from "../../content/phoneNumber";

const CallButton = ({ dark }) => {
  return (
    <div className="card-actions">
      <button
        className={`btn ${dark ? "btn-primary" : "btn-white"}`}
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
