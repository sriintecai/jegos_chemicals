import { Button, Image, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
export default function SpecialistChemicals() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col py-5 lg:px-0 items-center justify-center w-full lg:w-11/12 2xl:w-10/12 ">
      <div className="flex w-full lg:justify-between ">
        <div className="lg:pt-28 space-y-2">
          <h1 className="font-bold text-[28px] text-center lg:text-start lg:text-[36px]">
            Specialist Chemicals
          </h1>
          <p className="font-bold text-[28px] text-center lg:text-start lg:text-[36px] text-[#3657C3]">
            Manufacturers & Service Provider
          </p>
          <div className="space-y-2">
            <p className="lg:text-xl text-sm lg:text-start text-center">
              Leading the way with superior products and services for
              industrial,
              <br className="lg:block hidden" /> automobile, and household
              applications. Choose Jegos Chemicals
              <br className="lg:block hidden" /> for quality you can trust.
            </p>
            <div className="flex flex-col justify-center lg:items-start items-center lg:border-2 border-[#D8D9E0] rounded-md p-2 lg:p-4">





              <div className="lg:hidden md:hidden border w-full space-y-4 rounded-lg p-4">
                <h1 className="lg:text-xl text-[20px] lg:text-[16px] font-bold">
                  What Are You Looking For?
                </h1>
                
                <div className="flex w-full gap-4 justify-between">
                <Link
                  className=" rounded-lg"
                  onClick={() => navigate("/products")}
                >
                  <Image
                    className="border-blue-200 min-w-24 border-1 rounded-lg "
                    radius="none"
                    src={"/PRODUCTS_CARD.svg"}
                  />
                </Link>

                <Link className="" onClick={() => navigate("/services")}
                >
                  <Image
                    className="border-blue-200 min-w-24 border-1 rounded-lg "
                    radius="none"
                    src={"/SERVICE_CARD.svg"}
                  />
                </Link>
                </div>


              </div>

              <div className="flex w-full gap-4 justify-between ">
                <Link
                  className=" rounded-lg"
                  onClick={() => navigate("/products")}
                >
                  <Image
                    className="lg:block md:block hidden hover:border border-blue-500 min-w-72 max-w-80 rounded-lg "
                    radius="none"
                    src={"/PRODUCTS_CARD.svg"}
                  />
                </Link>

                <Link className="" onClick={() => navigate("/services")}>
                  <Image
                    className="lg:block md:block hidden hover:border border-blue-500 min-w-72 max-w-80 rounded-lg "
                    radius="none"
                    src={"/SERVICE_CARD.svg"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pl-20  pt-12 lg:block hidden">
          <Image src={"/MAN_3.svg"} className=":w-50 h-50" radius="none" />
        </div>
      </div>
    </div>
  );
}
