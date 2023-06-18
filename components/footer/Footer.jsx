import React from "react";
import Link from "next/link";
import { PhoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="footer flex justify-center p-10 bg-info-content text-base-200">
      <div className="footer w-full max-w-7xl gap-y-10">
        <Link href="/">
          <div className="flex items-center gap-x-2 text-primary-focus text-lg hover:scale-110 duration-300 hover:text-primary">
            <WrenchScrewdriverIcon className=" sm:w-12 sm:h-12 h-5 w-5 " />
            <span className="">Quick Appliances Repair</span>
          </div>
          <p className="max-w-lg">
            a company specializing in appliance repair and maintenance services
            in Dubai and Abu Dhabi. Our team consists of highly skilled and
            experienced technicians dedicated to providing professional and
            reliable service.
          </p>
        </Link>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Washing Machine Repair</a>
          <a className="link link-hover">Refrigerator Repair</a>
          <a className="link link-hover">Stove / Cooker Repair</a>
          <a className="link link-hover">Television Repair</a>
          <a className="link link-hover">Dishwasher Repair</a>
          <a className="link link-hover">Dryer Repair</a>
          <a className="link link-hover">Gas Oven Repair</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
