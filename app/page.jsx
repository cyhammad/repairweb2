import Slider from "@/components/slider/Slider";
import StatsBar from "@/components/stats/StatsBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <div className="pr-10">
            <p className="text-4xl">A technician you can trust</p>
            <p className="mt-3">
              When it comes to repairing your home appliances, you need a
              technician you can trust to deliver exceptional service. With our
              extensive knowledge, expertise, and commitment to customer
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
    </main>
  );
}
