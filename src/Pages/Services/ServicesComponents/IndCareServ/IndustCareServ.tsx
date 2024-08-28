import { Image, Link, useDisclosure } from "@nextui-org/react";
import ViewProducts from "../../../ChemicalProducts/ChemProComponents/ViewProducts";
import { Services, services, servpoints } from "../../../../Lib/IndusCareServProData";

export default function IndustCareServ() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex py-3 lg:py-10 items-center justify-center">
    <div className="space-y-4 flex flex-col justify-center lg:w-full w-full m-4 lg:m-0 lg:items-start items-center">
      <h1 className="lg:text-2xl text-[20px] font-bold">Industrial Care Service</h1>
      <div className="lg:grid grid-cols-4">
        {services.map((item: Services, index: number) => (
          <div key={index} className="col-span-2">
            <div className="flex justify-start">
              <div className="lg:pr-12">
                <div className="lg:flex lg:space-x-6 md:flex lg:flex-row flex flex-col bg-white justify-center items-center ">
                  <Image src={item?.img} isZoomed className="lg:h-60 lg:w-80 h-80 w-96"/>
                  <div className="">
                    <div className="">
                      <h1 className="font-bold lg:pt-0 pt-2 text-[20px] lg:text-xl">
                        {item?.title}
                      </h1>
                      <h1 className="font-bold text-lg">{item?.price}</h1>
                    </div>
                    <hr className=" border-dashed border-[#D0DFFF]" />
                    <div className="pb-4">
                      {item?.servpoints?.map((item: servpoints,index:number) => (
                        <div key={index}>
                          {item?.isDisplayable === true && (
                            <li className="lg:text-lg text-[14px]">
                              {item.label}
                            </li>
                          )}
                        </div>
                      ))}
                    </div>
                    <Link
                      className="text-[#3657C3] cursor-pointer"
                      onPress={onOpen}
                    >
                      View details
                    </Link>
                  </div>
                </div>
                <hr className="my-6 border-[#E0E1E6] sm:mx-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ViewProducts isOpen={isOpen} onClose={onClose} />
    </div>
    </div>
  );
}
