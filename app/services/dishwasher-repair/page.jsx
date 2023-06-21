"use client";

import React from "react";
import Image from "next/image";
import CallButton from "../../../components/buttons/CallButton";
import CallOrWhatsappButton from "../../../components/buttons/CallOrWhatsappButton";

const DishwasherPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/dishwasher/2.png"
            className=" rounded-lg shadow-2xl"
            height={500}
            width={500}
          />
          <div className="md:mr-20">
            <h1 className="text-3xl md:text-5xl font-bold">
              Dishwasher Repair Specialists in{" "}
              <span className="text-secondary">Dubai</span> and{" "}
              <span className="text-secondary">Abu Dhabi</span>
            </h1>
            <p className="py-6">
              Welcome to{" "}
              <span className="text-secondary font-bold text-lg">
                Quick Appliances Repair
              </span>
              - Your Trusted Dishwasher Repair Service Provider! Is your
              dishwasher causing you headaches with its performance? Quick
              Appliances Repairs is here to provide you with reliable and
              efficient dishwasher repair services. We specialize in repairing a
              wide range of popular dishwasher brands, including Samsung, Bosch,
              Siemens, and LG.
            </p>
            <CallButton dark />
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div
        className="hero min-h-screen bg-fixed"
        style={{ backgroundImage: "url('/images/dishwasher/1.jpeg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-base-100 bg-black bg-opacity-60 md:p-10">
          <div className="max-w-md md:max-w-3xl lg:max-w-5xl">
            <h1 className="mb-5 text-2xl md:text-3xl font-bold">
              Why Choose Quick Appliances Repairs for Your Dishwasher Repairs?
            </h1>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Expert Technicians: Our team consists of highly skilled and
                certified technicians who have extensive experience in handling
                dishwasher repairs. They are well-versed in the intricacies of
                Samsung, Bosch, Siemens, and LG models, enabling them to
                diagnose and fix any issue with precision and expertise.
              </li>
              <li>
                Prompt and Reliable Service: We understand the importance of a
                fully functional dishwasher in maintaining a smooth and
                efficient kitchen routine. That's why we prioritize prompt and
                reliable service. Our technicians will arrive at your location
                on time, equipped with the necessary tools and expertise to
                diagnose and resolve the problem quickly, ensuring your
                dishwasher is back to its optimal performance.
              </li>
              <li>
                Genuine Parts and Quality Repairs: At Quick Appliances Repairs,
                we believe in using only genuine parts for all our repairs. We
                source our parts directly from the manufacturers to ensure
                optimal performance and longevity for your Samsung, Bosch,
                Siemens, or LG dishwasher. Our skilled technicians are trained
                to deliver meticulous repairs that address the root cause of the
                issue, ensuring your dishwasher operates flawlessly.
              </li>
              <li>
                Transparent Pricing: We offer competitive and transparent
                pricing for our dishwasher repair services. We provide upfront
                quotes, so you know exactly what to expect before we commence
                any repairs. Our goal is to provide affordable solutions without
                compromising on the quality of our work.
              </li>
              <li>
                Customer Satisfaction: Your satisfaction is our utmost priority.
                We strive to deliver exceptional customer service and ensure
                that you are delighted with the results. Our friendly and
                knowledgeable technicians are always ready to address any
                questions you may have, and we go the extra mile to make your
                dishwasher repair experience hassle-free.
              </li>
              <li>
                Warranty: We stand behind our workmanship and the parts we use.
                That's why we offer a warranty on all our dishwasher repairs. If
                you encounter any issues after the repair, simply reach out to
                us, and we'll make it right.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold">
              Contact Quick Appliances Repair Today!
            </h1>
            <p className="py-6">
              Don't let a malfunctioning dishwasher disrupt your kitchen
              routine. Trust Quick Appliances Repairs to restore your Samsung,
              Bosch, Siemens, or LG dishwasher to optimal working condition.
              Schedule an appointment with us today by calling our hotline or
              filling out the contact form on our website.
              <br />
              <br /> With Quick Appliances Repairs, you can expect professional
              and reliable dishwasher repair services that exceed your
              expectations. We are your go-to partner for all your appliance
              repair needs!
            </p>
            <div className="flex justify-center">
              <CallOrWhatsappButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishwasherPage;
