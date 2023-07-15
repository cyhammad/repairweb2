"use client";

import React from "react";
import { PhoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import phoneNumber from "../../content/phoneNumber";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  if (pathname.startsWith("/companies")) {
    return null;
  }
  return (
    <header className="z-50">
      <Link
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-between md:justify-center gap-2 px-3 py-3 bg-info-content text-white text-sm hover:text-base duration-300"
      >
        <span>Hire an expert</span>
        <span className="hidden md:block">:</span>
        <div className="flex items-center">
          <PhoneIcon className="h-4 w-4 mr-1" />
          {phoneNumber}
        </div>
      </Link>
      <div className="bg-primary flex justify-center py-1 sm:py-0 text-black font-raleway z-50">
        <div className="navbar max-w-7xl">
          <div className="navbar-start">
            <div className="dropdown m-0">
              <label tabIndex={0} className="btn btn-ghost px-3 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <summary>Services</summary>
                  <ul className="p-2 z-50 focus:!bg-base-100 hover:!bg-base-100">
                    <li>
                      <Link href="/services/washing-machine-repair">
                        Washing Machine Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/refrigerator-repair">
                        Refrigerator Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/dishwasher-repair">
                        Dishwasher Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/television-repair">TV Repair</Link>
                    </li>
                    <li>
                      <Link href="/services/dryer-repair">Dryer Repair</Link>
                    </li>
                    <li>
                      <Link href="/services/stovecooker-repair">
                        Stove / Cooker Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/gas-oven-repair">
                        Gas Oven Repair
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <Link
              href="/"
              className="btn btn-ghost normal-case sm:text-lg hidden"
            >
              <WrenchScrewdriverIcon className="h-6 w-6 text-black" />
              Quick Appliances Repairs
            </Link>
            <Link
              href="/"
              className="btn btn-ghost normal-case sm:text-lg px-1"
            >
              <WrenchScrewdriverIcon className="h-6 w-6 text-black" />
              Quick Appliances Repairs
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex z-50">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Services</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/services/washing-machine-repair">
                        Washing Machine Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/refrigerator-repair">
                        Refrigerator Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/dishwasher-repair">
                        Dishwasher Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/television-repair">TV Repair</Link>
                    </li>
                    <li>
                      <Link href="/services/dryer-repair">Dryer Repair</Link>
                    </li>
                    <li>
                      <Link href="/services/stovecooker-repair">
                        Stove / Cooker Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/gas-oven-repair">
                        Gas Oven Repair
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
