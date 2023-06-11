import React from "react";
import Link from "next/link";

const CallButton = ({dark}) => {
  return (
    <Link href="/contact" className="card-actions mt-5">
      <button className={`btn ${dark ? "btn-primary" : "btn-white"}`}>
        Call Us
      </button>
    </Link>
  );
};

export default CallButton;
