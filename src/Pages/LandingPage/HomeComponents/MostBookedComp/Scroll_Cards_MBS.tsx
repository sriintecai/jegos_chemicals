import { useRef } from "react";
import { MostBooked, mostbooked } from "../../../../Lib/HomeData";
import { Button } from "@nextui-org/react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Scroll_Cards_MBS() {
  const feedbackRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (feedbackRef.current) {
      feedbackRef.current.scrollBy({
        left: -feedbackRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (feedbackRef.current) {
      feedbackRef.current.scrollBy({
        left: feedbackRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex w-full items-center relative">
      <Button
        isIconOnly
        radius="full"
        className="bg-white border absolute z-50"
        variant="shadow"
        onClick={handleScrollLeft}
      >
        <LuArrowLeft className="text-xl" />
      </Button>

      <div className="w-full pl-5">
        <div ref={feedbackRef} className="w-full flex gap-4 overflow-x-scroll no-scrollbar">
          {mostbooked?.map((item: MostBooked, index: number) => (
            <div
              key={index}
              className="min-w-fit w-64 border-2 items-center pt-5 flex flex-col justify-between bg-white rounded-xl"
            >
              <h1 className="lg:text-md p-5 text-sm font-bold">
                {item?.title}
              </h1>

              <img
                src={item.img}
                alt="Loading..."
                className="rounded-b-lg w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <Button
        isIconOnly
        radius="full"
        className="bg-white border z-50"
        variant="shadow"
        onClick={handleScrollRight}
      >
        <LuArrowRight className="text-xl" />
      </Button>
    </div>
  );
}
