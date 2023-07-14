import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import phoneNumber from "../../content/phoneNumber";

const FixedCallButtons = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-center justify-between gap-2 p-5">
      <a
        href={`tel:${phoneNumber}`}
        className="btn btn-circle btn-lg bg-blue-400 border-none hover:bg-blue-500"
      >
        <PhoneIcon className="h-8 w-8 text-white" />
      </a>
      <a
        href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`}
        target="_blank"
        className="btn btn-circle btn-lg bg-green-500 border-none hover:bg-green-600"
      >
        <Image src="/whatsapp.svg" width={45} height={45} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FixedCallButtons;
