import { Image, Link, useDisclosure } from "@nextui-org/react";
import { IoCallOutline } from "react-icons/io5";
import ViewProducts from "../ViewProducts";
import ViewProContact from "../ViewProContact";
import { points, SpclChe, spclche } from "../../../../Lib/HomeData";

export default function IndustrialCarePro() {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  return (
    <div className="lg:w-11/12 z-10 relative 2xl:w-10/12 flex flex-col pt-5 lg:pt-10">
      <h1 className="lg:text-2xl text-[20px] lg:text-start text-center font-bold">Industrial Care Products</h1>
      <div className="lg:flex pt-5 lg:pt-10">
        {/* Scroll height */}
        <div className="flex lg:overflow-y-scroll lg:h-[90dvh] gap-6 flex-col border-r">
          {spclche.map((item: SpclChe,index:number) => (
            <div key={index} className="w-full">
              <div className="lg:flex lg:w-full w-11/12 mx-auto md:flex justify-center items-center ">
                <Image src={item?.img} isZoomed className="lg:w-72 lg:h-60 w-96 "/>
                <div className="lg:space-y-4 space-y-2 lg:px-8">
                  <div className="space-y-2 ">
                    <h1 className="font-bold lg:pt-0 pt-2 text-[20px] lg:text-2xl">{item?.title}</h1>
                    <h1 className="font-bold text-lg">{item?.price}</h1>
                  </div>
                  <hr className=" border-dashed border-[#D0DFFF]" />
                  <div className="pb-4">
                    {item?.points?.map((item: points, index:number) => (
                      <div key={index}>
                        {item?.isDisplayable === true && (
                          <li className="lg:text-lg text-[14px]"> {item.label} </li>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    className="text-[#3657C3] cursor-pointer"
                    onPress={onOpen1}
                  >
                    View details
                  </Link>
                </div>
              </div>
              <hr className="my-4 border-[#E0E1E6] mx-auto" />
            </div>
          ))}
        </div>
        <div className="lg:w-4/12 border-2 h-fit p-4 rounded-lg lg:mx-10">
          <h1 className="font-bold text-[24px]">Contact For Orders</h1>
          <p>Want to order products us for details</p>
          <div className="flex items-center gap-5 border-2 rounded-lg p-4 border-[#D8D9E0]">
            <IoCallOutline
              color={"#8B8D98"}
              size={40}
              className="p-2 border-2 border-[#D8D9E0] bg-[#EFF0F3] rounded-lg"
            />
            <Link className="cursor-pointer flex flex-col" onPress={onOpen2}>
              <h1 className="text-lg text-[#62636C] font-semibold">
                Contact Number
              </h1>
              <h1 className="text-[#62636C]">+91 12345 67890</h1>
            </Link>
          </div>
        </div>
      </div>
      <div>
      <ViewProducts isOpen={isOpen1} onClose={onClose1} />
      </div>
      <div className="lg:w-full">
        <ViewProContact isOpen={isOpen2} onClose={onClose2} />
      </div>
    </div>
  );
}