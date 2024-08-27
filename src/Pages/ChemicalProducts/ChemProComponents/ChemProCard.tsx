import { Button } from "@nextui-org/react";

export default function ChemProCard() {
  return (
    <div className="w-full bg-white rounded-lg z-50 lg:static sticky top-0 2xl:w-10/12 lg:w-11/12">
      <div className="flex justify-start flex-col space-y-2 lg:space-y-4">
        <div className="flex justify-evenly p-4 lg:p-2 border border-gray-300 space-x-4 rounded-lg lg:w-fit">
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
  );
}