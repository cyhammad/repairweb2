"use client";

import Image from "next/image";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Service from "../components/Service";
import CallButton from "../components/buttons/CallButton";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION 1 */}
      <div
        className="hero min-h-[90vh]"
        style={{ backgroundImage: "url('/images/slider/img-1.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content md:w-full text-center md:text-left text-white">
          <div className="w-full">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                A technician you can trust
              </h1>
              <p className="mb-5">
                When it comes to repairing your home appliances, you need a
                technician you can trust to deliver exceptional service.
              </p>
              <CallButton dark />
            </div>
          </div>
        </div>
      </div>
      {/* HERO SECTION 2 */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img
                src="/images/tv-repair.png"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img
                src="/images/washing-machine-repair.png"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img
                src="/images/cooker-repair.png"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img
                src="/images/fridge-repair.png"
                className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold max-w-xl">
              Welcome To The Best Home Appliance Repair
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
              With our extensive knowledge, expertise, and commitment to
              customer satisfaction. We are dedicated to providing you with the
              highest quality repairs and ensuring your appliances work
              flawlessly.
            </p>
            <div className="divider"></div>
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
      {/* STATS */}
      <div className="hero bg-primary">
        <div className="flex flex-wrap px-2 md:px-10 justify-center lg:justify-between items-center py-5 w-full max-w-6xl gap-1">
          <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
            <div className="stat place-items-center">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">More than</div>
              <div className="stat-value">10</div>
              <div className="stat-desc">years of field experience</div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
            <div className="stat place-items-center">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Around</div>
              <div className="stat-value">1800</div>
              <div className="stat-desc">clients satisfied by service</div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
            <div className="stat place-items-center">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">More than</div>
              <div className="stat-value">7</div>
              <div className="stat-desc">provided by our techs</div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px]">
            <div className="stat place-items-center">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">More than</div>
              <div className="stat-value">50</div>
              <div className="stat-desc">technicians available</div>
            </div>
          </div>
        </div>
      </div>
      {/* SERVICES SECTION */}
      <div className="hero min-h-screen bg-info-content text-white">
        <div className="hero-content text-center w-full h-full">
          <div className="pb-10">
            <h1 className="text-5xl font-bold my-12">SERVICES</h1>
            <div className="flex flex-wrap gap-y-2 items-center justify-center">
              <Service dark name="Washing Machine Repair" imageUrl="/images/washing-machine-repair.png" description="Delivering top-tier, professional solutions that guarantee the optimal performance of your washing machine." />
              <Service name="Refrigerator Repair" imageUrl="/images/fridge-repair.png" description="Whether it's a noisy compressor, a torn gasket, or a sealed door issue causing your refrigerator not to freeze properly, we can fix it all." />
              <Service dark name="Stove/Cooker Repair" imageUrl="/images/stovetech.png" description="We offer fast and efficient repairs for all types of stoves and cookers. We only use high quality replacement parts for long lasting." />
              <Service name="Television Repair" imageUrl="/images/tv-repair.png" description="Our professional TV repair service provides expert diagnostics and precise repairs ensuring optimal functionality." />
              <Service dark name="Dishwasher/Dryer Repair" imageUrl="/images/dishwasher.png" description="We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning." />
              <Service name="Gas Oven Repair" imageUrl="/images/cooker-repair.png" description="Issues like temperature inconsistencies, ignition problems, gas leaks are resolved by our professionals." />
            </div>
          </div>
        </div>
      </div>
      {/* HERO SECTION 4 */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img
                src="/images/kitchen.png"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img
                src="/images/trustytech.png"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img
                src="/images/stovetech.png"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img
                src="/images/tools.png"
                className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold max-w-xl">
              Reasons To Choose Us
            </h1>
            <p className="py-6 max-w-xl">
              With our extensive knowledge, expertise, and commitment to
              customer satisfaction. We are dedicated to providing you with the
              highest quality repairs and ensuring your appliances work
              flawlessly.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start gap-5 max-w-xl">
                <div className="flex justify-center items-center p-2 min-w-[100px] md:w-[150px] min-h-[100px] bg-primary rounded-full">
                  <Image src="/hand-shake.svg" height={90} width={90} />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <div className="text-xl font-bold">
                    Trusted and Reliable Technicians
                  </div>
                  <div>
                    We have a team of highly trained and experienced
                    technicians, dedicated to providing the best service.
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start gap-5 max-w-xl">
                <div className="flex justify-center items-center p-2 min-w-[100px] md:w-[150px] min-h-[100px] bg-primary rounded-full">
                  <Image src="/pricetag.svg" height={70} width={70} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xl font-bold">
                    Experience and Expertise
                  </div>
                  <div>
                    Our company understands the inconvenience caused by
                    malfunctioning appliances.
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start gap-5 max-w-xl">
                <div className="flex justify-center items-center p-2 min-w-[100px] md:w-[150px] min-h-[100px] bg-primary rounded-full">
                  <Image src="/technician.svg" height={60} width={60} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xl font-bold">
                    Customer Satisfaction and Value
                  </div>
                  <div>
                    We prioritize delivering exceptional service and ensuring
                    that your customer's needs are met.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
