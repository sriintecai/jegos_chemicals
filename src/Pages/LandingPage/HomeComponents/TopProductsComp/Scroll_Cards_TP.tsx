import { Image } from "@nextui-org/react";
import {spclche , SpclChe } from "../../../../Lib/HomeData";
export default function Scroll_Cards_TP() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex overflow-x-scroll lg:no-scrollbar gap-6 flex-row w-full">
        {spclche?.map((item: SpclChe, index: number) => (
          <div key={index} className="min-w-max">
            <Image src={item?.img} />
            <h1 className="font-bold text-md lg:text-xl">{item?.title}</h1>
            <h1 className="text-lg">{item?.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}