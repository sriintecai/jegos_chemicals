import { Button } from "@nextui-org/react";
import Scroll_Cards_MBS from "./MostBookedComp/Scroll_Cards_MBS";
import { useNavigate } from "react-router-dom";

export default function MostBookedServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#EDF2FE] flex flex-col w-full lg:mt-14 py-6 items-center justify-center">
      <div className="flex lg:w-11/12 2xl:w-10/12 px-4 gap-5 lg:gap-10 bg-[#EDF2FE]  flex-col">
        <div className="flex justify-start flex-col space-y-4">
          <div className="flex justify-between items-center flex-row w-full">
            <h1 className="lg:text-[40px] text-[20px]  lg:px-0 font-bold">
              Most Booked Services
            </h1>
            <Button
              onClick={() => navigate(`/services`)}
              className="lg:hidden w-fit bg-white border border-gray-300 text-[#3657C3] "
              radius="sm"
              size="md"
            >
              See All
            </Button>
          </div>

          <div className="lg:flex md:flex items-center justify-between">
            <div className="flex p-2 border border-gray-300 space-x-4 rounded-lg w-fit">
              <Button
                className=" text-[15px] border-gray-300 text-white bg-[#3657C3]"
                radius="sm"
                size="lg"
              >
                Industrial Care
              </Button>
              <Button
                className="border text-[15px] border-gray-300 text-[#3657C3] bg-white"
                radius="sm"
                size="lg"
              >
                House Keeping
              </Button>
            </div>
            <Button
              onClick={() => navigate(`/services`)}
              className="lg:block hidden mt-4 text-[15px] bg-white border border-gray-300 text-[#3657C3] hover:text-white text-lg hover:bg-[#3657C3]"
              radius="sm"
              size="lg"
            >
              See All
            </Button>
          </div>
        </div>
        <div>
          <Scroll_Cards_MBS />
        </div>
      </div>
    </div>
  );
}
