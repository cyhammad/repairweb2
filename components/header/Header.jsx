import React from "react";
import { PhoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link
        href="#"
        className="flex items-center justify-between md:justify-center gap-2 px-3 py-3 bg-info-content text-white text-sm"
      >
        <span>Hire an expert</span>
        <span className="hidden md:block">:</span>
        <div className="flex items-center">
          <PhoneIcon className="h-4 w-4 mr-1" />
          +91 9876543210
        </div>
      </Link>
      <div className="bg-primary flex justify-center text-black font-raleway">
        <div className="navbar max-w-7xl">
          <div className="navbar-start">
            <div className="dropdown m-0">
              <label tabIndex={0} className="btn btn-ghost px-2 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box z-50"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Services</a>
                  <ul className="p-2">
                    <li>
                      <a>Washing Machine Repair</a>
                    </li>
                    <li>
                      <a>Refrigerator Repair</a>
                    </li>
                    <li>
                      <a>Dishwasher Repair</a>
                    </li>
                    <li>
                      <a>TV Repair</a>
                    </li>
                    <li>
                      <a>Dryer Repair</a>
                    </li>
                    <li>
                      <a>Stove / Cooker Repair</a>
                    </li>
                    <li>
                      <a>Gas & Electric Oven Repair</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-lg hidden">
              <WrenchScrewdriverIcon className="h-6 w-6 text-black" />
              Best Appliances Repair
            </a>
            <a className="btn btn-ghost normal-case text-lg px-1">
              <WrenchScrewdriverIcon className="h-6 w-6 text-black" />
              Best Appliances Repair
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Services</summary>
                  <ul className="p-2">
                    <li>
                      <a>Washing Machine Repair</a>
                    </li>
                    <li>
                      <a>Refrigerator Repair</a>
                    </li>
                    <li>
                      <a>Dishwasher Repair</a>
                    </li>
                    <li>
                      <a>TV Repair</a>
                    </li>
                    <li>
                      <a>Dryer Repair</a>
                    </li>
                    <li>
                      <a>Stove / Cooker Repair</a>
                    </li>
                    <li>
                      <a>Gas & Electric Oven Repair</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
