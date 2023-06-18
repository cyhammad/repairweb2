import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import phoneNumber from "../../content/phoneNumber";

const FixedCallButtons = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-center justify-center gap-2 p-5">
      <a
        href={`tel:${phoneNumber}`}
        className="btn btn-primary btn-circle btn-lg"
      >
        <PhoneIcon className="h-6 w-6 text-white" />
      </a>
      <a
        href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`}
        target="_blank"
        className="btn btn-primary btn-circle btn-lg"
      >
        <Image src="/whatsapp.svg" width={30} height={30} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FixedCallButtons;
