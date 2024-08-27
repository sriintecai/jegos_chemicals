import { Image } from "@nextui-org/react";

export default function Why() {
  return (
    <div className="bg-[#EDF2FE] flex flex-col w-full lg:mt-14 lg:py-8 py-5 items-center justify-center">
      <div className="flex lg:w-11/12 2xl:w-10/12 px-4 flex-col space-y-5 lg:py-10 lg:pb-20 bg-[#EDF2FE]">
        <h1 className="text-[20px] lg:text-[40px] font-bold">
          Why Choose Jegos Chemicals?
        </h1>
        <p className="lg:text-[20px] text-[14px] pb-5">
          At Jegos Chemicals, we are committed to providing products and
          services that meet the highest standards of quality and reliability.
          Our rigorous quality control processes ensure that every product we
          manufacture and service we deliver is of superior quality, giving you
          peace of mind and consistent results.
        </p>
        <div className="lg:flex items-center md:flex lg:space-x-0 space-y-10 justify-around w-full">
          <div className="flex lg:w-4/6 gap-3  lg:text-xl text-[14px] flex-col items-center justify-center">
            <Image src={`WHY COMPONENTS/ACHI.svg`} radius="none" />
            <p className="text-center font-semibold ">
              We guarantee the highest quality standards for all our products.
            </p>
          </div>
          <div className="flex lg:w-4/6 gap-3 lg:text-xl text-[14px] flex-col items-center justify-center">
            <Image src={`WHY COMPONENTS/IDEA.svg`} radius="none" />
            <p className="text-center font-semibold ">
              Constantly innovating to provide the best solutions for our
              clients.
            </p>
          </div>
          <div className="flex lg:w-4/6 gap-3 lg:text-xl text-[14px] flex-col items-center justify-center">
            <Image src={`WHY COMPONENTS/GOAL.svg`} radius="none" />
            <p className="text-center font-semibold ">
              Your satisfaction is our top priority. We strive to exceed your
              expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
