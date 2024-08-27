import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function ServicesProvided() {
  const navigate = useNavigate();

  return (
    <div className="flex px-4 lg:space-y-4 space-y-4 flex-col  lg:mt-14 w-full lg:w-11/12 2xl:w-10/12">
      <div className="flex flex-col">
        <h1 className="font-bold py-5 text-[20px]  lg:text-[40px]">
          Services We Provide
        </h1>
        <p className="lg:text-xl text-sm">
          Jegos Chemicals provides a comprehensive suite of services designed to
          support and enhance your use of our chemicals. Our expert team is
          ready to assist you with tailored solutions and professional support.
        </p>
      </div>

      <div className="relative lg:hidden">
        <div className="flex gap-5 flex-col">
          <figure className="relative border-2 border-gray-200 rounded-large flex flex-col">
            <figcaption className="absolute flex flex-col justify-center px-4 text-lg text-black py-4">
              <h1 className="font-semibold">Industrial Care</h1>
              <p className="text-[14px] leading-5">
                Tour Industrial Care Service is designed to support the
                operational efficiency 5 and safety of your industrial
                facilities.
              </p>
              <Button
                onClick={() => navigate(`/products`)}
                className=" mt-3 w-fit text-sm bg-[#3657C3] text-white"
              >
                View Products
              </Button>
            </figcaption>
            <img
              src={`PRODUCTS/INDUS_BG.svg`}
              className="w-[580px] pt-12 rounded-xl"
            />
          </figure>

          <figure className="relative border-2 border-gray-200 rounded-large flex flex-col">
            <figcaption className="absolute flex flex-col px-4 text-lg text-black py-4">
              <h1 className="font-semibold">House Keeping</h1>
              <p className="text-[14px] leading-5">
                This Service is dedicated to maintaining a clean, healthy, and
                inviting environment in residential and commercial spaces.
              </p>
              <Button
                onClick={() => navigate(`/services`)}
                className=" mt-3 w-fit text-sm bg-[#3657C3] text-white"
              >
                View Services
              </Button>
            </figcaption>
            <img src={`MAN_BG.svg`} className="w-[580px] pt-12 rounded-xl" />
          </figure>
        </div>
      </div>

      <div className="lg:block hidden">
        <div className="flex lg:justify-between">
          <figure className="md:relative lg:relative">
            <figcaption className="lg:absolute md:absolute  px-4 space-y-2 text-lg pl-10 text-black top-6">
              <h1 className="text-[24px] font-bold">Industrial Care</h1>
              <p className="text-xl">
                Tour Industrial Care Service is designed
                <br className="md:block hidden" /> to support the operational
                efficiency <br className="lg:block hidden" />
                and safety of your industrial facilities.
              </p>
              <Button
                onClick={() => navigate(`/products`)}
                className="absolute mt-3 text-lg bg-[#3657C3] text-white"
              >
                View Products
              </Button>
            </figcaption>
            <img
              src={`PRODUCTS/INDUS_BG.svg`}
              className="lg:block lg:w-[580px] lg:h-[400px] 2xl:w-[750px] 2xl:h-[550px] md:block hidden rounded-xl"
            />
          </figure>

          <figure className="md:relative lg:relative">
            <figcaption className="lg:absolute md:absolute px-4 space-y-2 text-lg pl-10 text-black top-6">
              <h1 className="text-[24px] font-bold">House Keeping</h1>
              <p className="text-xl">
                This Service is dedicated to maintaining a<br /> clean, healthy,
                and inviting environment
                <br /> in residential and commercial spaces.
              </p>
              <Button
                onClick={() => navigate(`/services`)}
                className="absolute mt-3 text-lg bg-[#3657C3] text-white"
              >
                View Services
              </Button>
            </figcaption>
            <img
              src={`MAN_BG.svg`}
              className="lg:block lg:w-[580px] lg:h-[400px] 2xl:w-[750px] 2xl:h-[550px] md:block hidden rounded-xl"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
