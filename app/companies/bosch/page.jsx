"use client";

import React from "react";
import BoschHeader from "../../../components/header/BoschHeader";
import CallOrWhatsappButton from "../../../components/buttons/CallOrWhatsappButton";
import phoneNumber from "../../../content/phoneNumber";
import ServicesSection from "../../../components/sections/ServicesSection";
import Footer from "../../../components/footer/Footer";

const BoschPage = () => {
  return (
    <div>
      <BoschHeader />
      {/* MAIN SECTION */}
      <div className="hero min-h-screen bg-[url(/images/backgrounds/bosch-bg.jpg)] bg-fixed">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse mt-20 md:mt-10" style={{zIndex: 0}}>
          <img
            src="/images/kitchen.jpg"
            className="max-w-xs md:max-w-xl shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold font-raleway text-info-content leading-tight">
              Bosch Appliances Service & Repair Center
            </h1>
            <p className="py-6 text-lg font-raleway">
              Quick Appliances Repairs is an authorised Bosch Service Centre in Dubai and Abu Dhabi.
              Trust our well-trained technicians to deliver professional &
              reliable Bosch repairs, backed by our authorization from the brand
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
      <ServicesSection heading="Our Services" callButtonColor="[#219ACD]" />
      {/* Footer */}
      <Footer color="#219ACD" />
    </div>
  );
};

export default BoschPage;
