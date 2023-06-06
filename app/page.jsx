import Slider from "@/components/slider/Slider";
import StatsBar from "@/components/stats/StatsBar";
import Image from "next/image";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

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
              <button className="btn btn-primary">Explore More</button>
            </div>
          </div>
        </div>
      </div>
      {/* HERO SECTION 2 */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img
                src="/images/tv-repair.png"
                className="max-w-[6rem] md:max-w-[15rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img
                src="/images/washing-machine-repair.png"
                className="max-w-[7rem] md:max-w-[19rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img
                src="/images/cooker-repair.png"
                className="max-w-[4rem] md:max-w-[12rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img
                src="/images/fridge-repair.png"
                className="max-w-[5.5rem] md:max-w-[16rem] shadow-2xl"
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
                <div className="text-lg font-bold">+913562225555</div>
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
    </main>
  );
}
{
  /* <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/slider/img-1.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */
}
{
  /* <div className="max-w-7xl flex min-h-screen flex-col items-center justify-between">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <div className="pr-10">
              <p className="text-4xl">A technician you can trust</p>
              <p className="mt-3">
                When it comes to repairing your home appliances, you need a
                technician you can trust to deliver exceptional service. With
                our extensive knowledge, expertise, and commitment to customer
                satisfaction, we are dedicated to providing you with the highest
                quality repairs and ensuring your appliances work flawlessly.
              </p>
            </div>
            <div className="px-5 pt-10">
              <StatsBar />
            </div>
          </div>
          <div className="w-full">
            <Slider />
          </div>
        </div>
      </div> */
}
