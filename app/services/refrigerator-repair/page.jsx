"use client";

import React from "react";
import Image from "next/image";
import CallButton from "../../../components/buttons/CallButton";
import CallOrWhatsappButton from "../../../components/buttons/CallOrWhatsappButton";

const RefrigeratorPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/fridge/1.jpg"
            className=" rounded-lg shadow-2xl"
            height={500}
            width={400}
          />
          <div className="md:mr-20">
            <h1 className="text-3xl md:text-5xl font-bold">
              Refrigerator Repair Specialists in{" "}
              <span className="text-secondary">Dubai</span> and <br />
              <span className="text-secondary">Abu Dhabi</span>
            </h1>
            <p className="py-6">
              Welcome to{" "}
              <span className="text-secondary font-bold text-lg">
                Quick Appliances Repair
              </span>
              - Your Reliable Refrigerator Service Provider! Is your
              refrigerator acting up and causing food spoilage? Look no further!
              Quick Appliances Repairs is here to provide you with exceptional
              refrigerator repair services. We specialize in repairing a wide
              range of popular refrigerator brands, including Samsung, Bosch,
              Siemens, and LG.
            </p>
            <CallButton dark />
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div
        className="hero min-h-screen bg-fixed"
        style={{ backgroundImage: "url('/images/fridge/2.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-base-100 bg-black bg-opacity-60 md:p-10">
          <div className="max-w-md md:max-w-3xl lg:max-w-5xl">
            <h1 className="mb-5 text-2xl md:text-3xl font-bold">
              Why Choose Quick Appliances Repairs for Your Refrigerator Repairs?
            </h1>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Expert Technicians: Our team comprises highly skilled and
                certified technicians with extensive experience in handling
                refrigerator repairs. They possess in-depth knowledge of
                Samsung, Bosch, Siemens, and LG models, enabling them to
                diagnose and fix any issue with precision and efficiency.
              </li>
              <li>
                Prompt and Reliable Service: We understand the urgency of
                refrigerator repairs to prevent food waste and inconvenience.
                That's why we prioritize prompt and reliable service. Our
                technicians will promptly arrive at your location, equipped with
                the necessary tools and expertise to diagnose and resolve the
                problem quickly, ensuring your refrigerator is up and running
                smoothly.
              </li>
              <li>
                Genuine Parts and Quality Repairs: At Quick Appliances Repairs,
                we believe in using only genuine parts for all our repairs. We
                source our parts directly from the manufacturers to ensure
                optimal performance and longevity for your Samsung, Bosch,
                Siemens, or LG refrigerator. Our skilled technicians are trained
                to deliver meticulous repairs that address the root cause of the
                issue, ensuring your refrigerator functions flawlessly.
              </li>
              <li>
                Transparent Pricing: We offer competitive and transparent
                pricing for our refrigerator repair services. You can expect
                upfront quotes, so you know exactly what to anticipate before we
                begin any repairs. Our goal is to provide affordable solutions
                without compromising on the quality of our work.
              </li>
              <li>
                Customer Satisfaction: Your satisfaction is our utmost priority.
                We strive to deliver exceptional customer service and ensure
                that you are delighted with the results. Our friendly and
                knowledgeable technicians are always ready to address any
                questions you may have, and we go the extra mile to make your
                refrigerator repair experience hassle-free.
              </li>
              <li>
                Warranty: We stand behind our workmanship and the parts we use.
                That's why we offer a warranty on all our refrigerator repairs.
                If you encounter any issues after the repair, simply reach out
                to us, and we'll make it right.
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
              Don't let a malfunctioning refrigerator ruin your food and disrupt
              your daily routine. Trust Quick Appliances Repairs to restore your
              Samsung, Bosch, Siemens, or LG refrigerator to optimal working
              condition. Schedule an appointment with us today by calling our
              hotline or filling out the contact form on our website.
              <br />
              <br /> With Quick Appliances Repairs, you can expect professional
              and reliable refrigerator repair services that exceed your
              expectations. We are your trusted partner for all your appliance
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

export default RefrigeratorPage;
