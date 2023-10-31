"use client";
import React from "react";
import LgHeader from "../../../components/header/LgHeader";
import ServicesSection from "../../../components/sections/ServicesSection";
import Footer from "../../../components/footer/samsungFooter";
import Image from "next/image";
import Lg_Call_or_Whatsapp from "../../../components/buttons/Lg_Call_or_Whatsapp";
import phoneNumber from "../../../content/phoneNumber";
import Lg_Carousel from "../lg/Lg_Carousel";
import Lg_Services from "../lg/lg_services";
import Lg_Footer from "../../../components/footer/Lg_Footer";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

const LgPage = () => {
  return (
    <div>
      <div>
        <LgHeader />

        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url('/images/lg.jpg')" }}
        >
          <div className="hero-overlay bg-opacity-50" />
          <div className="hero-content text-center md:text-left text-white">
            <div>
              <h1 className="text-5xl font-bold font-raleway text-white leading-tight">
                UAE Repair Expert LG Appliances Service Center a
                Best Washing Machine Repair Company in Dubai and Abu Dhabi.
              </h1>
              <p className="py-6 text-lg font-raleway">
                We offer the best in Dubai and Abu Dhabi, Affordable,
                Professional LG Washing Machine Repair Dubai. We offer our
                services 24/7. We are experts for LG Washing Machine Repair
                service in Duba and Abu Dhabi.
              </p>
              <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
                <button
                  className="px-5 py-4 bg-[#C6004D] text-white hover:text-neutral-focus hover:text-lg hover:bg-[white] rounded-lg duration-200 shadow-md"
                  onClick={() => {
                    window.location.href = `tel:${phoneNumber}`;
                  }}
                >
                  {phoneNumber}
                </button>
                <button
                  className="px-5 py-4 bg-[#C6004D] rounded-lg text-white hover:text-neutral-focus hover:text-lg hover:bg-[white]  duration-200 shadow-md"
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

      <div className="w-full h-[100px] flex justify-center mt-5 md:mt-12">
        <div className="w-[500px] h-[80px] md:h-full  md:mt-0 flex flex-col text-center align-middle">
          <h5 className="text-base text-[#be123c] font-bold">Our Features</h5>
          <h1 className="text-4xl text-[#be123c] font-extrabold">
            Special Features
          </h1>
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

            <h1 className="text-xl  font-extrabold">Reasonable Price</h1>

            <h1 className="p-1 text-[#0a0a0a] md:p-2">
              We do offer a reasonable price for repair & service of LG
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
              className="w-20 h-20 hover:scale-110 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <h1 className="text-xl  font-extrabold">Customer Satisfaction</h1>

            <h1 className="p-1 md:p-2">
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
              className="w-20 h-20   hover:scale-110 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            <h1 className="text-xl  font-extrabold">24*7 Services</h1>

            <h1 className="p-1 md:p-2">
              We are available 24*7, Call us for get repair any LG Appliances.
            </h1>
          </div>
        </div>
      </div>

      <Lg_Carousel />

      {/* features */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img loading="lazy"                src="/images/tv/1.webp"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img loading="lazy"                src="/images/washing/1.webp"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img loading="lazy"                src="/images/stove/1.webp"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img loading="lazy"                src="/images/fridge/1.webp"
                className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
              />
            </div>
          </div>
          <div>
          <h1 className="text-3xl font-bold max-w-xl">
              UAE Repair Expert in Dubai and Abu Dhabi knowing all the
              quality, reliability, and functionality standers provide you the
              best LG Washing Machine Repair Service.
            </h1>
            <div className="flex gap-10 pt-5 flex-col sm:flex-row">
              <div className="flex items-center gap-1">
                <WrenchScrewdriverIcon className="h-10 w-10  hover:scale-110 duration-300" />
                <div className="text-lg font-bold">Expert Technician</div>
              </div>
              <div className="flex items-center gap-1">
                <CheckBadgeIcon className="h-12 w-12  hover:scale-110 duration-300" />
                <div className="text-lg font-bold">Best Service Quality</div>
              </div>
            </div>
            <p className="py-6 max-w-xl">
            <h1 className="text-lg font-bold max-w-xl">
                UAE Repair Expert in Dubai & Abu Dhabi offers guaranteed
                LG washing machine repair. Our company is a quality
                conscious company, so we always provide guaranteed services. As
                our customers trust us so we never like to lose our trust.
              </h1>
              LG Appliances are renowned for their resource-efficient operation,
              consuming less water, energy, and detergent. Therefore, you can
              always rely on LG Customer Care as the ultimate destination for
              repairing your home appliances. Simply get in touch with us via a
              call or WhatsApp to schedule an appointment. Our service center is
              equipped to deliver top-quality repair and maintenance services
              for the entire range of LG appliances, including LG washing
              machines, dishwashers, fridges, dryers, and all other electrical
              home appliances. Our commitment is to have a technician arrive and
              repair your machine on the same day. At the LG Service Center
              Dubai, our goal is to provide our customers with the finest repair
              and maintenance services. Our professionals possess the expertise
              to repair all models of LG washing machines, equipped with
              cutting-edge tools for maintenance and repair tasks. If anything
              goes awry with your LG home appliance, bring it to us, and one of
              our specialists will promptly rectify the issue. We also offer
              preventative maintenance solutions that can extend the lifespan of
              your LG appliances. Our customer support operates round the clock,
              ensuring that you can reach out to us at any time. LG Service
              Center Dubai takes pride in delivering exceptional repair services
              for LG home appliances, right at your doorstep. We guarantee a
              satisfactory experience for every customer, and we remain
              committed to our promise of round-the-clock support. For all your
              LG home appliance repair needs, LG Service Center Dubai is the
              ultimate destination."
            </p>
            <div className="divider" />
            <Lg_Call_or_Whatsapp />
            <div className="flex gap-10 flex-col sm:flex-row" />
          </div>
        </div>
      </div>

      <div className=" w-full bg-black h-auto md:h-[500px] ">
        <div className="hero min-h-screen bg-[#fafafa]">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <img loading="lazy"              src="/images/washing/1.webp"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-base-content">
                We Provide Repairing Servies In Areas OF Dubai and Abu Dhabi!
              </h1>
              <p className="py-6 text-black">
                So, if you are looking for professional LG Repair Technicians in
                Dubai and Abu Dhabi, then contact us today.We provide repair
                services for all kinds of LG kitchen appliances, including
                washing machines,dishwashers,dryers,Fridges, cooking ranges,
                dishwashers, microwaves, and more. We have years of success in
                this industry We offer excellent customer service We have many
                satisfied customers Offer comprehensive Appliance repair
                insurance We do deal anywhere in Dubai and Abu Dhabi plan to
                save a couple of dirhams We are the timely service provider We
                do deal delivery, installation, repair, and maintenance for All
                LG appliances We use high-quality, genuine, and original spare
                parts We have well-trained technicians Our professionals used to
                latest repair tools for the best diagnosis At 24/7 Customer
                Care, we are committed to providing our clients with the highest
                quality of service.
              </p>
              <button
                className="btn btn-info-content bg-[#be123c] text-white hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-black h-auto mt-12 ">
        <div className="hero min-h-screen bg-[#fafafa] bg-[url(/images/mainbanner.webp)] bg-fixed">
          <div className="hero-overlay bg-black bg-opacity-70" />
          <div className="hero-content  flex-col lg:flex-row-reverse ">
            <img loading="lazy"              src="/images/lg.jpg"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white">
                "LG Appliances REPAIR IN DUBAI AND ABU DHABI"
              </h1>
              <p className="py-12 text-md px-4 font-semibold text-white">
                "We recognize the uniqueness of every repair task, which is why
                we offer tailor-made solutions designed to meet the specific
                requirements of our clients.{" "}
                <span className="text-lg text-primary-focus font-extrabold">
                  {" "}Our primary objective is to ensure the efficient and
                  effective repair of our clients' appliances, allowing them to
                  seamlessly resume their daily routines without interruptions
                </span>
                .Therefore, you can always rely on LG Customer Care as the
                ultimate destination for repairing your home appliances. Simply
                get in touch with us via a call or WhatsApp to schedule an
                appointment. Our service center is equipped to deliver
                top-quality repair and maintenance services for the entire range
                of LG appliances, including LG washing machines, dishwashers,
                fridges, dryers, and all other electrical home appliances."
              </p>
              <button
                className="btn btn-info-content bg-[#be123c] text-white hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* services */}
      <div id="washing" className="w-full h-auto mb-10 flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img loading="lazy"                  className="w-full md:w-[400px] h-full"
                  src="/images/washing/2.webp"
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
                    the optimal performance of your washing machine. Our LG
                    Washing Machine Repair Service is your reliable partner for
                    all your LG washing machine repair needs. We understand
                    the importance of a fully functional washing machine in your
                    daily life, which is why our team of experienced technicians
                    is dedicated to providing prompt, efficient, and
                    professional repair solutions.
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn bg-[#be123c] text-white mt-3 hover:scale-110 duration-300 "
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgPage;
