"use client";

import Image from "next/image";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import CallButton from "../components/buttons/CallButton";
import ServicesSection from "../components/sections/ServicesSection";
import CallOrWhatsappButton from "../components/buttons/CallOrWhatsappButton";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-11202272766`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "AW-11202272766");
            `,
        }}
      ></script>
      {/* HERO SECTION 1 */}
      <div
        className="hero min-h-[90vh] bg-fixed"
        style={{ backgroundImage: "url('/images/mainbanner.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content md:w-full text-center md:text-left text-white">
          <div className="w-full">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Best Appliance Repair Service in Dubai & Abu Dhabi
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
              highest quality repairs for Samsung, LG, Bosch and Siemens
              Appliances.
            </p>
            <div className="divider"></div>
            <CallOrWhatsappButton />
            <div className="flex gap-10 flex-col sm:flex-row"></div>
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
              <div className="stat-value">50+</div>
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
              <div className="stat-value">18000+</div>
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
              <div className="stat-value">70+</div>
              <div className="stat-desc">services provided</div>
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
              <div className="stat-value">800+</div>
              <div className="stat-desc">technicians available</div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section 3 */}

      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img
                src="/images/oven/1.jpg"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img
                src="/images/stove/2.jpg"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img
                src="/images/dryer/2.jpeg"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img
                src="/images/tv/2.jpg"
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
      {/* HERO SECTION 4 */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">Samsung Service Center</h1>
            <p className="py-6">
              We provide Samsung Service Center in Dubai and Abu Dhabi. The best
              Samsung Service Center in Dubai and Abu Dhabi. We provide
              following services:
            </p>
            <ul>
              <li>Samsung Service Center</li>
              <li>Samsung Repair Center</li>
              <li>Samsung Service Center Dubai</li>
              <li>Samsung Service Center Abu Dhabi</li>
              <li>Samsung Repair Center Dubai</li>
              <li>Samsung Repair Center Abu Dhabi</li>
              <li>Samsung Washing Machine Repair</li>
              <li>Samsung Dishwasher Repair</li>
              <li>Samsung Refrigerator Repair</li>
              <li>Samsung TV repair</li>
              <li>Samsung Dryer repair</li>
              <li>Samsung Stove repair</li>
              <li>Samsung Cooker repair</li>
              <li>Samsung Oven repair</li>
            </ul>
            <CallButton />
          </div>
          <div>
            <h1 className="text-5xl font-bold">LG Service Center</h1>
            <p className="py-6">
              We provide LG Service Center in Dubai and Abu Dhabi. The best LG
              Service Center in Dubai and Abu Dhabi. We provide following
              services:
            </p>
            <ul>
              <li>LG Service Center</li>
              <li>LG Repair Center</li>
              <li>LG Service Center Dubai</li>
              <li>LG Service Center Abu Dhabi</li>
              <li>LG Repair Center Dubai</li>
              <li>LG Repair Center Abu Dhabi</li>
              <li>LG Washing Machine Repair</li>
              <li>LG Dishwasher Repair</li>
              <li>LG Refrigerator Repair</li>
              <li>LG TV repair</li>
              <li>LG Dryer repair</li>
              <li>LG Stove repair</li>
              <li>LG Cooker repair</li>
              <li>LG Oven repair</li>
            </ul>
            <CallButton />
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">Bosch Service Center</h1>
            <p className="py-6">
              We provide Bosch Service Center in Dubai and Abu Dhabi. The best
              Bosch Service Center in Dubai and Abu Dhabi. We provide following
              services:
            </p>
            <ul>
              <li>Bosch Service Center</li>
              <li>Bosch Repair Center</li>
              <li>Bosch Service Center Dubai</li>
              <li>Bosch Service Center Abu Dhabi</li>
              <li>Bosch Repair Center Dubai</li>
              <li>Bosch Repair Center Abu Dhabi</li>
              <li>Bosch Washing Machine Repair</li>
              <li>Bosch Dishwasher Repair</li>
              <li>Bosch Refrigerator Repair</li>
              <li>Bosch TV repair</li>
              <li>Bosch Dryer repair</li>
              <li>Bosch Stove repair</li>
              <li>Bosch Cooker repair</li>
              <li>Bosch Oven repair</li>
            </ul>
            <CallButton />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Siemens Service Center</h1>
            <p className="py-6">
              We provide Siemens Service Center in Dubai and Abu Dhabi. The best
              Siemens Service Center in Dubai and Abu Dhabi. We provide
              following services:
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

      {/* SERVICES SECTION */}
      <ServicesSection heading={"We Provide Professional Repair Services"} />
    </main>
  );
}
