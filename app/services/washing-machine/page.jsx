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

const washing_Page = ({ params }) => {
  const unslugify = slug => {
    return slug.split("-").join(" ");
  };
  return (
    <main>
      <div
        className="hero min-h-[90vh] "
        style={{ backgroundImage: "url('/images/washing.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60 object-fill" />
        <div className="hero-content md:w-full text-center md:text-left text-white">
          <div className="w-full ">
            <div className="w-[200px] ml-[30px] md:ml-0 md:w-[650px] ">
              <h1 className="mb-5 text-xl md:text-5xl font-bold">
                Washing Machine Repair{" "}
                <span className="text-primary"> Dubai</span> and{" "}
                <span className="text-primary">Abu Dhabi</span>
              </h1>
              <p className="mb-5 text-lg">
                Are you in need of Washing Machine Repair services in Dubai or
                Abu Dhabi? Look no further than Quick Appliances Repair.
              </p>
              <ul class="list-disc">
                <li className="text-md ">
                  {" "}Expert Refrigerator Repair services for a wide range of
                  brands and models. We are expert in repairing of
                </li>
                <li className="text-md">
                  Fully Automatic Washing Machine and Semi-Automatic Washing
                  Machines
                </li>
                <li className="text-md">
                  Top Loading Washing Machines and Front Loading Washing
                  Machines
                </li>
                <li className="text-md">
                  Compact Washing Machines and Combination Units
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
                <p className="md:mt-5 mt-3 font-extrabold">
                  Washing Machine Repair
                </p>
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
                <p className="md:mt-5 mt-3 font-extrabold">
                  Refrigerator Repair
                </p>
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
                <p className="md:mt-5 mt-3 font-extrabold">
                  Smart LED TV Repair
                </p>
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
                <p className="md:mt-5 mt-3 font-extrabold">
                  Stove/ Cooker Repair
                </p>
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
                <p className="md:mt-5 mt-3 text-left font-extrabold">
                  Gas Oven Repair
                </p>
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
          <h1 className=" text-xl md:text-2xl"> Washing Machine Repair</h1>
          <div className="w-full flex md:flex-row flex-col ">
            <div className="w-[300px] bh-red-800 ml-[2px] mt-[2px] md:mt-5 md:ml-[5px] flex justify-end items-start">
              <img className="w-full" src="/images/dryer_1.png" />
            </div>
            <div className="md:w-full text-md text-justify mt-[15px] mx-2">
              <p>
                {" "}Our washing machine repair services cater to both
                residential and commercial customers.we are equipped to tackle
                any challenge your washing machine may face.When you choose our
                services, we conduct a thorough inspection and troubleshooting
                process to identify the root cause of the problem. Whether your
                washing machine is not spinning, leaking, making unusual noises,
                or displaying error codes, we leave no stone unturned in our
                quest for a solution.
              </p>
            </div>
          </div>
          <div className="bg-white w-[300px] md:w-[830px] text-justify h-fit mt-[10px] ml-[8px]">
            <p>
              {" "}Our technicians are well-versed in repairing and replacing
              faulty components, including motors, belts, pumps, timers, and
              control panels. We understand the importance of using high-quality
              replacement parts to ensure long-lasting repairs that restore your
              washing machine's optimal functionality.From addressing common
              issues like clogged filters, malfunctioning valves, or unbalanced
              loads to providing prompt and reliable service, our aim is to
              minimize laundry disruptions and inconvenience for our customers.
              We know how vital a functioning washing machine is to your daily
              routine, and we strive to deliver efficient repairs that get your
              appliance back in action swiftly.In addition to repairs, we offer
              cleaning and maintenance services that help optimize the
              performance of your washing machine while preventing future
              breakdowns. Regular maintenance can extend the lifespan of your
              appliance and ensure it operates at its best.With transparent
              pricing and no hidden costs, you can trust us to provide upfront
              and fair pricing for our services. Our friendly and professional
              customer service team is available to address any questions or
              concerns you may have throughout the repair process, ensuring your
              satisfaction from start to finish.We are committed to delivering
              effective solutions for your washing machine repair needs and
              prioritizing customer satisfaction.
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

export default washing_Page;
