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

const DryerPage = ({ params }) => {
  const unslugify = slug => {
    return slug.split("-").join(" ");
  };
  return (
    <main>
      <div
        className="hero min-h-[90vh] "
        style={{ backgroundImage: "url('/images/dryer.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60 object-fill" />
        <div className="hero-content md:w-full text-center md:text-left text-white">
          <div className="w-full ">
            <div className="w-[200px] ml-[30px] md:ml-0 md:w-[650px] ">
              <h1 className="mb-5 text-xl md:text-5xl font-bold">
                Dryer Repair <span className="text-primary"> Dubai</span> and{" "}
                <span className="text-primary">Abu Dhabi</span>
              </h1>
              <p className="mb-5 text-lg">
                Are you in need of Dryer Repair services in Dubai or Abu Dhabi?
                Look no further than Quick Appliances Repair.
              </p>
              <ul class="list-disc">
                <li className="text-md ">
                  {" "}Expert Dryer services for a wide range of brands and
                  models.
                </li>
                <li className="text-md">
                  Skilled technicians with specialized knowledge in diagnosing
                  and fixing dryer issues.
                </li>
                <li className="text-md">
                  Repair and replacement of faulty components such as heating
                  elements, thermostats, and control panels.
                </li>
              </ul>
              <div className="ml-[50px] md:ml-0">
                <CallButton dark />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-fit md:h-[800px] flex flex-col md:flex-row ">
        <div className="w-[300px] md:w-[450px]  ml-[35px] sm:ml-[40px] h-[300px] mt-[30px] sm:mt-[40px] mb-[40px] md:h-[700px] bg-base-200 flex-col justify-center align-middle md:flex-row">
          <div className="md:w-[350px] w-[300px] h-[50px] md:ml-[20px] md:mr-[20px] md:mt-[35px] md:h-[60px]  hover:bg-white bg-primary align-middle">
            <div className="md:w-[345px] md:h-[30px] flex flex-row justify-evenly ">
              <a href="#" className="cursor-pointer">
                <p className="md:mt-5 mt-3 font-extrabold">Washing Machine Repair</p>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:mt-6 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-[350px] w-[300px] h-[50px]  md:ml-[20px] md:mr-[20px] md:mt-[35px] md:h-[60px] mt-[10px] hover:bg-white bg-primary align-middle">
            <div className="md:w-[345px] md:h-[30px] flex flex-row justify-evenly ">
              <a href="#" className="cursor-pointer">
                <p className="md:mt-5 mt-3 font-extrabold">Refrigerator Repair</p>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:mt-6 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-[350px] w-[300px] h-[50px] mt-[10px] md:ml-[20px] md:mr-[20px] md:mt-[35px] md:h-[60px]  hover:bg-white bg-primary align-middle">
            <div className="md:w-[345px] md:h-[30px] flex flex-row justify-evenly ">
              <a href="#" className="cursor-pointer">
                <p className="md:mt-5 mt-3 font-extrabold">Dishwasher Repair</p>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:mt-6 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-[350px] w-[300px] h-[50px] mt-[10px] md:ml-[20px] md:mr-[20px] md:mt-[35px] md:h-[60px]  hover:bg-white bg-primary align-middle">
            <div className="md:w-[345px] md:h-[30px] flex flex-row justify-evenly ">
              <a href="#" className="cursor-pointer">
                <p className="md:mt-5 mt-3 font-extrabold">Smart LED TV Repair</p>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:mt-6 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-[350px] w-[300px] h-[50px] mt-[10px] md:ml-[20px] md:mr-[20px] md:mt-[35px] md:h-[60px]  hover:bg-white bg-primary align-middle">
            <div className="md:w-[345px] md:h-[30px] flex flex-row justify-evenly ">
              <a href="#" className="cursor-pointer">
                <p className="md:mt-5 mt-3 font-extrabold">Dryer Repair</p>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:mt-6 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-[350px] w-[300px] h-[50px] mt-[10px] md:ml-[20px] md:mr-[20px] md:mt-[35px] md:h-[60px]  hover:bg-white bg-primary align-middle">
            <div className="md:w-[345px] md:h-[30px] flex flex-row justify-evenly ">
              <a href="#" className="cursor-pointer">
                <p className="md:mt-5 mt-3 font-extrabold">Stove/ Cooker Repair</p>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:mt-6 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-[350px] w-[300px] h-[50px]  mt-[10px] md:ml-[20px] md:mr-[20px] md:mt-[35px] md:h-[60px]  hover:bg-white bg-primary align-middle">
            <div className="md:w-[345px] md:h-[30px]  flex flex-row justify-evenly  ">
              <a href="#" className="cursor-pointer ">
                <p className="md:mt-5 mt-3 text-left font-extrabold">Gas Oven Repair</p>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:mt-6 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:w-full md:mr-[20px] mr-5 w-[300px] ml-[30px]  sm:ml-[40px] h-fit mt-[95px] sm:mt-[40px] mb-[40px] md:h-fit bg-white flex flex-col">
          <h1 className=" text-xl md:text-2xl"> Dryer Repair</h1>
          <div className="w-full flex md:flex-row flex-col ">
            <div className="w-[300px] bh-red-800 ml-[2px] mt-[2px] md:mt-5 md:ml-[5px] flex justify-end items-start">
              <img className="w-full" src="/images/dryer_3.jpg" />
            </div>
            <div className="md:w-full text-md text-justify mt-[15px] mx-2">
              <p>
                {" "}Our dryer repair services are expertly designed to address
                a wide range of dryer issues. Our highly skilled technicians
                specialize in diagnosing and fixing various problems that may
                arise with your dryer. Thorough inspection and troubleshooting
                are conducted to identify the root cause of issues such as
                inconsistent heating, burner ignition failures, or other
                malfunctions.We are fully committed to delivering efficient and
                reliable repair services to ensure your comfort and safety.
              </p>
            </div>
          </div>
          <div className="bg-white w-[300px] md:w-[830px] text-justify h-fit mt-[10px] ml-[8px]">
            <p>
              {" "}When it comes to dryer repair, we understand the importance
              of a fully functional and efficient appliance in your home. Our
              comprehensive dryer repair services are designed to address a wide
              range of issues you may encounter.We start by conducting a
              thorough inspection and troubleshooting process to identify the
              root cause of the problem. Our knowledgeable technicians have the
              expertise to efficiently malfunctioning thermostats, damaged
              valves, and other components that may be affecting the performance
              of your dryer. Our priority is to ensure the safe and efficient
              operation of your appliance. Whether you're dealing with
              inconsistent heating, burner ignition failures, or even gas leaks,
              our experienced team is here to help.We also prioritize the safety
              of your home and family by offering gas leak detection and repair
              services. Our skilled professionals will diligently detect and
              address any gas leaks, providing you with peace of mind and
              ensuring a secure environment.When you schedule a service with us,
              our friendly and knowledgeable customer service team will be
              available to assist you with any questions or concerns you may
              have. Trust us to restore your dryer to its optimal functionality,
              ensuring enjoyable and hassle-free laundry experiences for years
              to come.
              <br />
              <br />
              If you have any problem regarding any type of home maintenance or
              home appliances in Dubai and Abu Dhabi, please contact us or call
              at <br />
              <span className="text-md font-bold">055-6 300 904</span>
            </p>
          </div>
          <CallButton dark />
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
          <span className="font-normal  text-2xl">{phoneNumber}</span>
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

export default DryerPage;