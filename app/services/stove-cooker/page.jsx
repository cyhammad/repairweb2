
"use client";
import React from "react";
import Image from "next/image";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Service from "../../../components/Service";
import CallButton from "../../../components/buttons/CallButton";

const stove_Page = ({ params }) => {
  const unslugify = slug => {
    return slug.split("-").join(" ");
  };
  return (
    <main>
      <div
        className="hero min-h-[90vh] "
        style={{ backgroundImage: "url('/images/stove.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60 object-fill" />
        <div className="hero-content md:w-full text-center md:text-left text-white">
          <div className="w-full ">
            <div className="w-[200px] ml-[-100px] md:ml-0 md:w-[650px] ">
              <h1 className="mb-5 text-xl md:text-5xl font-bold">
                Electric Stove-Cooker Repair{" "}
                <span className="text-primary"> Dubai</span> and{" "}
                <span className="text-primary">Abu Dhabi</span>
              </h1>
              <p className="mb-5 text-lg">
              Are you in need of Electric Stove-Cooker repair services in Dubai or Abu Dhabi? Look no further than Quick Appliances Repair.
              </p>
              <ul class="list-disc">
              <li className="text-md "> Professional stove-cooker repair services for a wide range of brands and models.</li>
              <li className="text-md">Thorough inspection and troubleshooting to identify the source of problems such as inconsistent heat, faulty burners, or oven not reaching the desired temperature.</li>
              <li className="text-md">Repairs for various stove-cooker malfunctions, including malfunctioning ignition systems, faulty thermostats, and damaged heating elements.</li>
              <li className="text-md">Cleaning and maintenance services to improve stove-cooker efficiency and prevent future issues.</li>
              <li className="text-md">Prompt and reliable service with quick response times to minimize disruption to your cooking routine.</li>
    
              </ul>
              <div className="ml-[50px] md:ml-0">
                <CallButton dark />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img
                src="/images/stove_1.jpg"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img
                src="/images/stove_2.jpg"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img
                src="/images/stove_3.jpg"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img
                src="/images/stove_4.jpg"
                className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-5 mt-0 text-xl md:text-5xl font-bold">
          Electric Stove-Cooker Repair{" "}
              <span className="text-warning"> Dubai</span> and{" "}
              <span className="text-warning">Abu Dhabi</span>
            </h1>
            <div className="flex gap-10 pt-5 flex-col sm:flex-row">
              <div className="flex items-center gap-1">
                <WrenchScrewdriverIcon className="h-10 w-10 text-primary" />
                <div className="text-lg font-bold">Expert Technician</div>
              </div>
              <div className="flex items-center gap-1">
                <CheckBadgeIcon className="h-12 w-12 text-primary" />
                <div className="text-lg font-bold">Best Service Quality</div>
              </div>
            </div>
            <p className="py-6 max-w-xl">
              Our exceptional services are the reason why we are highly regarded
              in terms of timeliness, dedication, and pricing options. Our
              skilled technicians possess extensive expertise in various aspects
              of washing machine maintenance, including assembly, disassembly,
              cleaning, pulley repairs, valve replacements, timer replacements,
              water leak repairs, switch repairs, water pump servicing, and
              general annual maintenance contracts for washing machines. If you
              require assistance with any home maintenance or home appliance
              issues in <span className="text-warning"> Dubai</span> and{" "}
              <span className="text-warning">Abu Dhabi</span>, please don't
              hesitate to contact us or call us at the following numbers:
            </p>
            <div className="divider" />
            <div className="flex gap-10 flex-col sm:flex-row">
              <div className="flex items-center gap-2">
                <div className="p-4 bg-primary rounded-full">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold">0523722012</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-4 bg-primary rounded-full">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold">info@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
      <div className="hero bg-info-content flex flex-col align-middle justify-center text-warning  md:h-[400px]">
        <div className=" mb-20 md:mb-0 md:mt-10 flex flex-col justify-center text-center align-middle">
          <div className="text-3xl mt-10 sm:mt-0 md:text-5xl font-extrabold ">
            Why Choose Us
          </div>
          <div className="text-xl font-bold md:mt-4 mb-[-60px]  md:mb-0">
            We Have More Than 13 Years Experience.
          </div>
        </div>
        <div className="w-full flex text-center md:mb-10 justify-center items-center flex-col md:flex-row h-full">
          <div className="w-[200px] h-[200x] md:w-[300px] md:mx-2 md:h-[90px] text-center bg-primary mt-2 md:mt-0 rounded">
            <p className="text-lg md:text-2xl md:mt-2  font-extrabold ml-0 text-info-content ">
              Same Day <br /> Service{" "}
            </p>
          </div>
          <div className="w-[200px] h-[300x] md:w-[300px] md:h-[90px] md:mx-2  bg-primary mt-2 md:mt-0 rounded">
            <p className="text-lg md:text-2xl md:mt-2   font-extrabold ml-0  text-info-content ">
              Always On <br /> Time{" "}
            </p>
          </div>
          <div className="w-[200px] h-[200x] md:w-[300px] md:h-[90px] md:mx-2 bg-primary mt-2 md:mt-0 rounded">
            <p className="text-lg md:text-2xl md:mt-2   font-extrabold ml-0   text-info-content">
              We are <br /> Trust Worthy{" "}
            </p>
          </div>
          <div className="w-[200px] h-[200x] md:w-[300px] md:h-[90px] md:mx-2 bg-primary mt-2 mb-2 md:mt-0 md:mb-0  rounded">
            <p className="text-lg md:text-2xl md:mt-2   font-extrabold ml-0   text-info-content">
              Certified & Trained <br /> Technician{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 sm:mt-0 bg-base-200 w-full">
        <div className="grid h-20 card bg-primary text-xl rounded place-items-center sm:text-2xl font-bold ">
          Reliable Services With Fair Rates
        </div>
        <div className="divider bg-base-200" />
        <div className="grid h-20 card  bg-primary text-xl rounded place-items-center text-center sm:text-2xl mt-3 font-bold ">
          Contact Us For Best Service!{" "}
          <span className="font-normal  text-2xl">052828829</span>
        </div>
      </div>
      <div className="w-full h-[250px] ">
        <div className="w-full bg-white h-[100px] mt-7 flex  justify-center align-middle">
          <div className="text-center flex flex-col">
            <p className=" overflow-hidden text-lg text-info-content font-extrabold mt-3">
              Brands{" "}
            </p>
            <p className=" text-lg text-info-content font-extrabold">
              We Service these Makes & Models
            </p>
          </div>
        </div>
        <div className="w-full h-[250px]  flex mt-4 flex-row text-center justify-center align-middle">
          <div>
            <img
              src="/images/1.png"
              className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
            />
          </div>
          <div className="mx-2">
            <img
              src="/images/2.png"
              className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
            />
          </div>
          <div className="mx-2">
            <img
              src="/images/5.png"
              className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
            />
          </div>
          <div className="mx-2">
            <img
              src="/images/6.png"
              className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default stove_Page;
