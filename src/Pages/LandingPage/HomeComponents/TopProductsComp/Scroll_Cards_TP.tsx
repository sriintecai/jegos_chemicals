import { Button, Image } from "@nextui-org/react";
import { spclche, SpclChe } from "../../../../Lib/HomeData";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { useRef } from "react";
export default function Scroll_Cards_TP() {
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
    <div className="flex w-full justify-between items-center relative">
      <Button
        isIconOnly
        radius="full"
        className="bg-white border absolute z-50"
        variant="shadow"
        onClick={handleScrollLeft}
      >
        <LuArrowLeft className="text-xl" />
      </Button>
      <div className="relative pl-5">
        <div ref={feedbackRef} className="flex max-w-[175vh] overflow-x-scroll lg:no-scrollbar gap-6 flex-row w-full overflow-hidden">
          {spclche?.map((item: SpclChe, index: number) => (
            <div key={index} className="min-w-fit border-1 rounded-xl bg-white">
              <Image className="w-[35vh] h-[35vh]" src={item?.img} />
              <h1 className="ml-4 mt-1 font-bold text-md lg:text-xl">{item?.title}</h1>
              <h1 className="ml-4 mt-1 text-lg">{item?.price}</h1>
            </div>
          ))}
        </div>
      </div>
      <Button
        isIconOnly
        radius="full"
        className="bg-white border absolute right-0 z-50"
        variant="shadow"
        onClick={handleScrollRight}
      >
        <LuArrowRight className="text-xl" />
      </Button>
    </div>
  );
}
