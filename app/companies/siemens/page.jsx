"use client";

import React from "react";
import SiemensHeader from "../../../components/header/SiemensHeader";
import CallOrWhatsappButton from "../../../components/buttons/CallOrWhatsappButton";
import phoneNumber from "../../../content/phoneNumber";
import ServicesSection from "../../../components/sections/ServicesSection";
import Footer from "../../../components/footer/samsungFooter";
import Image from "next/image";
import CallButton from "../../../components/buttons/CallButton";

const SiemensPage = () => {
  return (
    <div>
      <SiemensHeader />
      {/* MAIN SECTION */}
      <div className="hero min-h-screen bg-[url(/images/backgrounds/Siemens-bg.jpg)] bg-fixed">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse mt-20 md:mt-10" style={{zIndex: 0}}>
          <Image
            src="/images/fridge/2.jpg"
            className="max-w-xs md:max-w-xl shadow-2xl"
            height={300}
            width={300}
          />
          <div>
            <h1 className="text-5xl font-bold font-raleway text-info-content leading-tight">
              Siemens Appliances Service & Repair Center
            </h1>
            <p className="py-6 text-lg font-raleway">
              UAE Repair Expert is an authorised Siemens Service Centre in Dubai and Abu Dhabi.
              Trust our well-trained technicians to deliver professional &
              reliable Siemens repairs, backed by our authorization from the brand
              itself, ensuring your appliances are in capable hands.
            </p>
            <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 bg-[#219ACD] text-white hover:bg-[#1984b1] rounded duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-5 py-4 bg-[#219ACD] text-white hover:bg-[#1984b1] rounded duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}
              >
                Whatsapp Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* SECOND SECTION */}
      <ServicesSection heading="Our Services" callButtonColor="[#219ACD]" id="Siemensservices" disableLinks  />
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">Siemens Service Center</h1>
            <p className="py-6">
              We provide Siemens Service Center in Dubai and Abu Dhabi. The best Siemens
              Service Center in Dubai and Abu Dhabi. We provide following
              services:
            </p>
            <ul>
              <li>Siemens Service Center</li>
              <li>Siemens Repair Center</li>
              <li>Siemens Service Center Dubai</li>
              <li>Siemens Service Center Abu Dhabi</li>
              <li>Siemens Repair Center Dubai</li>
              <li>Siemens Repair Center Abu Dhabi</li>
              <li>Siemens Washing Machine Repair</li>
              <li>Siemens Dishwasher Repair</li>
              <li>Siemens Refrigerator Repair</li>
              <li>Siemens TV repair</li>
              <li>Siemens Dryer repair</li>
              <li>Siemens Stove repair</li>
              <li>Siemens Cooker repair</li>
              <li>Siemens Oven repair</li>
            </ul>
            <CallButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiemensPage;
