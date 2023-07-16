import React from "react";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";
import phoneNumber from "../../content/phoneNumber";

const Samsung_call_Whatsapp = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer"
        >
          <div className="p-4 bg-neutral-focus rounded-full">
            <PhoneIcon className="h-6 w-6 text-white" />
          </div>
          <div className="text-lg font-medium">{phoneNumber}</div>
        </a>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <div className="flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer">
          <a
            href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`}
            target="_blank"
            className="p-[0.9rem] bg-neutral-focus rounded-full"
          >
            <Image src="/whatsapp.svg" width={30} height={30} alt="WhatsApp" />
          </a>
          <div className="text-lg font-medium">Whatsapp Us</div>
        </div>
      </div>
    </div>
  );
};

export default Samsung_call_Whatsapp;
