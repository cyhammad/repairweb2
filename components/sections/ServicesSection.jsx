import React from "react";
import Service from "../Service";

const ServicesSection = ({heading}) => {
  return (
    <div className="hero min-h-screen bg-base-100 text-info-content">
      <div className="hero-content text-center w-full h-full">
        <div className="pb-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold my-12 max-w-lg">
            {heading}
          </h1>
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <Service
              dark
              name="Washing Machine Repair"
              imageUrl="/images/washing/service.jpg"
              description="Delivering top-tier, professional solutions that guarantee the optimal performance of your washing machine."
            />
            <Service
              name="Refrigerator Repair"
              imageUrl="/images/fridge/service.jpg"
              description="Whether it's a noisy compressor, a torn gasket, or a sealed door issue causing your refrigerator not to freeze properly."
            />
            <Service
              dark
              name="Stove/Cooker Repair"
              imageUrl="/images/stove/service.jpg"
              description="We offer fast and efficient repairs for all types of stoves and cookers. We only use high quality replacement parts for long lasting."
            />
            <Service
              name="Television Repair"
              imageUrl="/images/tv/service.jpg"
              description="Our professional TV repair service provides expert diagnostics and precise repairs ensuring optimal functionality."
            />
            <Service
              dark
              name="Dishwasher Repair"
              imageUrl="/images/dishwasher/service.jpg"
              description="We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning."
            />
            <Service
              dark
              name="Dryer Repair"
              imageUrl="/images/dryer/service.jpg"
              description="We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning."
            />
            <Service
              name="Gas Oven Repair"
              imageUrl="/images/oven/service.jpg"
              description="Issues like temperature inconsistencies, ignition problems, gas leaks are resolved by our professionals."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
