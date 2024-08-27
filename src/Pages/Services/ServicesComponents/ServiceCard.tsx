import { Button } from "@nextui-org/react";

export default function ServiceCard() {
  return (
    
    <div className="lg:py-2 lg:static sticky top-0 z-50">
        {/* MOBILE */}
        <div className="sm:hidden block w-full bg-white rounded-lg">
          <div className="flex justify-start pl-4 flex-col space-y-2 lg:space-y-4">
            <div className="flex p-2 border border-gray-300 space-x-4 rounded-lg w-fit">
              <Button
                className="text-white lg:text-lg text-sm bg-[#3657C3]"
                radius="sm"
                size="lg"
              >
                Industrial Care
              </Button>
              <Button
                className="bg-white lg:text-lg text-sm border border-gray-300 hover:text-white hover:bg-[#3657C3]"
                radius="sm"
                size="lg"
              >
                House Keeping
              </Button>
            </div>
          </div>
        </div>
   


      {/* TAB */}
      <div className="md:block lg:hidden hidden">
        <div className="flex p-2 border border-gray-300 space-x-4 rounded-lg w-fit">
          <Button className="text-white bg-[#3657C3] " radius="sm" size="lg">
            Industrial Care
          </Button>
          <Button className="text-white bg-[#3657C3] " radius="sm" size="lg">
            House Keeping
          </Button>
        </div>
      </div>


      {/* PC */}
      <div className="lg:block hidden">
        <div className="flex p-2 border border-gray-300 space-x-4 rounded-lg w-full">
          <Button className="text-white bg-[#3657C3]" radius="sm" size="lg">
            Industrial Care
          </Button>

          <Button
            className="hover:text-white bg-white border-2 hover:bg-[#3657C3] "
            radius="sm"
            size="lg"
          >
            House Keeping
          </Button>
        </div>
      </div>


    </div>
  );
}
