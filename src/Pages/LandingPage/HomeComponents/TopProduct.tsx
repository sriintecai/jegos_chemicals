import { Button } from "@nextui-org/react";
import Scroll_Cards_TP from "./TopProductsComp/Scroll_Cards_TP";
import { useNavigate } from "react-router-dom";

export default function TopProduct() {

  const navigate = useNavigate()

  return (
    <div className="bg-[#EDF2FE] flex flex-col py-4 lg:mt-14 lg:py-6 items-center justify-center w-full">
    <div className="flex w-full lg:w-11/12 2xl:w-10/12 px-4 gap-10 bg-[#EDF2FE]  flex-col">
      <div className="flex w-full justify-start flex-col space-y-4">
        <div className="flex justify-between items-center flex-row w-full">
        <h1 className="lg:text-[40px] text-[20px]  lg:px-0 font-bold">
          Top Product
        </h1>
        <Button onClick={()=>navigate(`/products`)} className="lg:hidden w-fit bg-white border border-gray-300 text-[#3657C3] " radius="sm" size="md">See All</Button>
        </div>
        <p className="lg:text-xl text-sm lg:px-0 px-2">Explore our diverse range of products tailored to meet the specific needs of various sectors</p>
        <div className="lg:flex md:flex lg:mx-0 items-center justify-between">
        <div className=" flex p-2 border border-gray-300 space-x-4 rounded-lg w-fit">
          <Button className="text-[15px] lg:text-md border-gray-300  text-white  bg-[#3657C3]" radius="sm" size="lg">Industrial Care</Button>
          <Button className="text-[15px] lg:text-md bg-white border border-gray-300 hover:text-white hover:bg-[#3657C3]" radius="sm" size="lg">House Keeping</Button>
        </div>
          <Button onClick={()=>navigate(`/products`)} className="lg:block hidden bg-white border border-gray-300 text-[#3657C3] hover:text-white text-[15px] lg:text-lg hover:bg-[#3657C3] lg:m-0 mt-4" radius="sm" size="lg">See All</Button>
        </div>
      </div>
      <div>
        <Scroll_Cards_TP/>
      </div>
    </div>
    </div>
  )
}