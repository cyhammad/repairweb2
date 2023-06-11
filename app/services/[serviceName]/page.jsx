import React from "react";

const WashingMachinePage = ({ params }) => {
  const unslugify = (slug) => {
    return slug.split("-").join(" ");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex justify-center items-center max-w-[80rem] gap-4 p-4 flex-col lg:flex-row bg-red-500">
        <img
          src="/images/washing-machine.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="ml-5">
          <h1 className="text-5xl font-bold capitalize">
            {unslugify(params.serviceName)} Repair
          </h1>
          <p className="py-6">
            Experienced and Professional Washing Machine Repair Technicians
          </p>
          <ul className="list-disc ml-5">
            <li>
              Firstly we are highly experienced and serving the whole of Dubai
              for appliances and washing machines repair. Our expert technicians
              have more than 10 years of experience in the field.
            </li>
            <li>
              Secondly, we are a team of highly professional technicians who can
              inspect, diagnose, and fix your washing machine properly to save
              you any further headaches.
            </li>
            <li>
              Thirdly and most importantly we come to your desired location
              whenever it is required, just to know we are available 24/7.
              Therefore feel free to call us now for a professional service at
              your doorstep.
            </li>
          </ul>
          <button className="btn btn-primary mt-10">Call Us</button>
        </div>
      </div>
    </div>
  );
};

export default WashingMachinePage;
