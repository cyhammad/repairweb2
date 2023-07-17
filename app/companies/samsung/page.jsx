"use client";
import React from "react";
import SamsungHeader from "../../../components/header/SamsungHeader";
import ServicesSection from "../../../components/sections/ServicesSection";
import Footer from "../../../components/footer/samsungFooter";
import Image from "next/image";
import CallOrWhatsappButton from "../../../components/buttons/Samsung_call_Wahtaspp.jsx";
import phoneNumber from "../../../content/phoneNumber";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const SamsungPage = () => {
  return (
    <div>
      <div>
        <SamsungHeader />

        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url('/images/samsung.jpg')" }}
        >
          <div className="hero-overlay bg-opacity-60" />
          <div className="hero-content text-center md:text-left text-white">
            <div>
              <h1 className="text-5xl font-bold font-raleway text-white leading-tight">
                Samsung Appliances Service & Repair Center
              </h1>
              <p className="py-6 text-lg font-raleway">
                Quick Appliances Repairs is a Samsung Service Centre in Dubai
                and Abu Dhabi. Trust our well-trained technicians to deliver
                professional & reliable Samsung repairs ensuring your appliances
                are in capable hands.
              </p>
              <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
                <button
                  className="px-5 py-4 bg-[black] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
                  onClick={() => {
                    window.location.href = `tel:${phoneNumber}`;
                  }}
                >
                  {phoneNumber}
                </button>
                <button
                  className="px-5 py-4 bg-[black] text-white hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md"
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
      </div>

      {/* special Features */}
      <div className="w-full h-[100px] flex justify-center mt-5 md:mt-12">
        <div className="w-[500px] h-[80px] md:h-full  md:mt-0 flex flex-col text-center align-middle">
          <h5 className="text-base font-bold">Our Features</h5>
          <h1 className="text-4xl font-extrabold">Special Features</h1>
        </div>
      </div>

      <div className="w-auto mx-2 mt-3 md:mt-0 md:mx-0 md:w-full h-[800px] md:h-[350px]  flex flex-col md:flex-row justify-evenly items-center ">
        <div className="w-full    md:w-[300px] h-[300px]">
          <div className="w-full  drop-shadow-xl h-[250px] bg-white border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20  hover:scale-110 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <h1 className="text-xl font-extrabold">Reasonable Price</h1>

            <h1 className="p-1 md:p-0">
              We do offer a reasonable price for repair & service of Samsung
              Appliances.
            </h1>
          </div>
        </div>

        <div className="w-full md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl bg-white  border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20  hover:scale-110 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <h1 className="text-xl font-extrabold">Customer Satisfaction</h1>

            <h1 className="p-1 md:p-0">
              We maintain a professional workflow for excellent customer
              relationships.
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl bg-white  border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20  hover:scale-110 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            <h1 className="text-xl font-extrabold">24*7 Services</h1>

            <h1 className="p-1 md:p-0">
              We are available 24*7, Call us for get repair any Samsung
              Appliances.
            </h1>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img
                src="/images/tv/1.jpg"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img
                src="/images/washing/1.jpg"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img
                src="/images/stove/1.jpg"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img
                src="/images/fridge/1.jpg"
                className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold max-w-xl">
              Welcome To Quick Appliances Repair Samsung Service Center
            </h1>
            <div className="flex gap-10 pt-5 flex-col sm:flex-row">
              <div className="flex items-center gap-1">
                <WrenchScrewdriverIcon className="h-10 w-10 text-neutral-focus hover:scale-110 duration-300" />
                <div className="text-lg font-bold">Expert Technician</div>
              </div>
              <div className="flex items-center gap-1">
                <CheckBadgeIcon className="h-12 w-12 text-neutral-focus hover:scale-110 duration-300" />
                <div className="text-lg font-bold">Best Service Quality</div>
              </div>
            </div>
            <p className="py-6 max-w-xl">
              Samsung Service Center Dubai is dedicated to providing
              high-quality service and repairs of Samsung kitchen appliances. We
              provide repair services for all kinds of Samsung kitchen
              appliances, including fridges, cooking ranges, dishwashers,
              microwaves, and more. Our experienced technicians are available
              24/7 to provide fast and efficient repairs for both residential
              and commercial customers. With our reliable Samsung service center
              in Dubai, you can rest assured that your appliance will be fixed
              quickly and efficiently with the highest quality parts available.
              We guarantee a fast response time for any repair requests and aim
              to ensure complete customer
            </p>
            <div className="divider" />
            <CallOrWhatsappButton />
            <div className="flex gap-10 flex-col sm:flex-row" />
          </div>
        </div>
      </div>

      {/* services */}
      <div id="washing" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full md:w-[400px] h-full"
                  src="/images/washing/2.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body"> 
                <h2 className="card-title  hover:scale-110 duration-300 hover:cursor-pointer">
                  Washing Machine Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    Delivering top-tier, professional solutions that guarantee
                    the optimal performance of your washing machine. Our Samsung
                    Washing Machine Repair Service is your reliable partner for
                    all your Samsung washing machine repair needs. We understand
                    the importance of a fully functional washing machine in your
                    daily life, which is why our team of experienced technicians
                    is dedicated to providing prompt, efficient, and
                    professional repair solutions.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral text-white mt-3 hover:scale-110 duration-300 "  onClick={() => {
          window.location.href = `tel:${phoneNumber}`
        }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="refrigerator" className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full md:w-[400px] h-full"
                  src="/images/fridge/3.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Refrigerator Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our Samsung Refrigerator Repair Service, we take pride in
                    delivering top-tier, professional solutions that guarantee
                    the optimal performance of your refrigerator. We understand
                    the vital role a fully functional refrigerator plays in your
                    daily life, preserving food and beverages, which is why our
                    team of experienced technicians is committed to providing
                    prompt, efficient, and professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral text-white mt-3 hover:scale-110 duration-300 "   onClick={() => {
          window.location.href = `tel:${phoneNumber}`
        }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="stove" className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full md:w-[400px] h-full"
                  src="/images/stove/2.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Stove/Cooker Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our Samsung Stove Cooker Repair Service, we take immense
                    pride in delivering top-tier, professional solutions that
                    ensure the optimal performance of your stove cooker.
                    Recognizing the crucial role a fully functional stove cooker
                    plays in your daily life, cooking and preparing meals, our
                    team of skilled technicians is dedicated to offering prompt,
                    efficient, and professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral text-white mt-3 hover:scale-110 duration-300 "   onClick={() => {
          window.location.href = `tel:${phoneNumber}`
        }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="tv" className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full md:w-[400px] h-full"
                  src="/images/tv/2.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Television Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our Samsung TV Repair Service, we take pride in
                    delivering top-tier, professional solutions that guarantee
                    the optimal performance of your TV. Understanding the vital
                    role a fully functional TV plays in your daily life,
                    providing entertainment and information, our team of
                    experienced technicians is committed to providing prompt,
                    efficient, and professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral text-white mt-3 hover:scale-110 duration-300 "   onClick={() => {
          window.location.href = `tel:${phoneNumber}`
        }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="dishwasher" className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full md:w-[400px] h-full"
                  src="/images/dishwasher/2.png"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Dishwasher Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our Samsung Dishwasher Repair Service, we take pride in
                    delivering top-tier, professional solutions that ensure the
                    optimal performance of your dishwasher. Understanding the
                    vital role a fully functional dishwasher plays in your daily
                    life, cleaning and sanitizing your dishes, our team of
                    experienced technicians is dedicated to providing prompt,
                    efficient, and professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral text-white mt-3 hover:scale-110 duration-300 "  onClick={() => {
          window.location.href = `tel:${phoneNumber}`
        }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="dryer" className="mt-5 mb-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full md:w-[400px] h-full"
                  src="/images/dryer/1.jpeg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Dryer Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our Samsung Dryer Repair Service, we take pride in
                    delivering top-tier, professional solutions that ensure the
                    optimal performance of your dryer. Understanding the vital
                    role a fully functional dryer plays in your daily life,
                    efficiently drying your clothes, our team of experienced
                    technicians is dedicated to providing prompt, efficient, and
                    professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral text-white mt-3 hover:scale-110 duration-300 "   onClick={() => {
          window.location.href = `tel:${phoneNumber}`
        }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="oven" className="mt-5 mb-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full md:w-[400px] h-full"
                  src="/images/oven/1.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title  hover:scale-110 duration-300  hover:cursor-pointer ">
                  Gas Oven Repair
                </h2>
                <div className="sm:w-[200px] md:w-[400px] h-auto">
                  <p>
                    At our Samsung Gas Oven Repair Service, we take pride in
                    delivering top-tier, professional solutions that ensure the
                    optimal performance of your gas oven. Understanding the
                    vital role a fully functional gas oven plays in your daily
                    life, cooking and baking meals, our team of experienced
                    technicians is dedicated to providing prompt, efficient, and
                    professional repair services.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral text-white mt-3 hover:scale-110 duration-300 "  onClick={() => {
          window.location.href = `tel:${phoneNumber}`
        }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}

      <Footer color="#219ACD" />
    </div>
  );
};

export default SamsungPage;
