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

const TvPage = ({ params }) => {
  const unslugify = slug => {
    return slug.split("-").join(" ");
  };
  return (
    <main>
      <div
        className="hero min-h-[90vh] "
        style={{ backgroundImage: "url('/images/television.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60 object-fill" />
        <div className="hero-content md:w-full text-center md:text-left text-white">
          <div className="w-full ">
            <div className="w-[200px] ml-[30px] md:ml-0 md:w-[650px] ">
              <h1 className="mb-5 text-xl md:text-5xl font-bold">
                Smart LED TV Repair <span className="text-primary">
                  {" "}Dubai
                </span>{" "}
                and <span className="text-primary">Abu Dhabi</span>
              </h1>
              <p className="mb-5 text-lg">
                Are you in need of Smart LED TV Repair services in Dubai or Abu
                Dhabi? Look no further than Quick Appliances Repair.
              </p>
              <ul class="list-disc">
                <li className="text-md ">
                  {" "}Expert Smart LED TV Repair services for a wide range of
                  brands and models.
                </li>
                <li className="text-md">
                  Our technicians can efficiently identify the root causes of
                  issues such as display abnormalities, audio problems,
                  connectivity issues, or software glitches
                </li>
                <li className="text-md">
                  Whether it's addressing pixel defects, sound distortion, or
                  malfunctioning control panels, we are committed to restoring
                  the optimal performance of your smart LED TV.
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
          <h1 className=" text-xl md:text-2xl"> Smart LED TV Repair</h1>
          <div className="w-full flex md:flex-row flex-col ">
            <div className="w-[300px] bh-red-800 ml-[2px] mt-[2px] md:mt-5 md:ml-[5px] flex justify-end items-start">
              <img className="w-full" src="/images/television_2.jpg" />
            </div>
            <div className="md:w-full text-md text-justify mt-[15px] mx-2">
              <p>
                {" "}When it comes to smart LED TV repair, our services are
                expertly tailored to address a wide range of issues that can
                affect your television. Our team of highly skilled technicians
                specializes in diagnosing and resolving various problems that
                may arise. Through thorough inspection and troubleshooting, we
                identify the root cause of issues such as display abnormalities,
                audio glitches, or connectivity problems.
              </p>
            </div>
          </div>
          <div className="bg-white w-[300px] md:w-[830px] text-justify h-fit mt-[10px] ml-[8px]">
            <p>
              {" "}We are fully committed to delivering efficient and reliable
              repair services, prioritizing your comfort and safety. Whether it
              involves repairing faulty components, optimizing software
              settings, or addressing connectivity issues, our skilled
              technicians will work diligently to restore your smart LED TV to
              its optimal performance.Our thorough inspection and
              troubleshooting process ensure that we identify and address the
              underlying issues, ensuring that your TV operates smoothly and
              provides you with an immersive viewing experience. You can trust
              our experienced team to deliver high-quality repair services that
              meet your expectations.Rest assured that our focus is on providing
              efficient and reliable repairs, ensuring your comfort and safety
              as you enjoy your smart LED TV to the fullest.Our technicians
              possess extensive knowledge and expertise in repairing and
              replacing faulty components. Whether it's the display panel, audio
              system, control module, or other vital elements, we have the
              skills and resources to address these issues efficiently. We use
              high-quality replacement parts to ensure the durability and
              longevity of our repairs.Experience peace of mind knowing that
              your smart LED TV is in the hands of our dedicated professionals.
              We are passionate about restoring your TV to its optimal
              functionality and ensuring your satisfaction.
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

export default TvPage;
