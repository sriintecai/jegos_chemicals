import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import { feedback } from "../../../Lib/FeedBackData";
import { useRef } from "react";

export default function FeedBack() {
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
    <div className="h-full flex w-full gap-10 bg-white lg:py-10 py-6 lg:pl-16 2xl:pl-40  flex-col overflow-hidden">
      <div className="lg:flex w-full">
        <div className="flex gap-3 flex-col w-[100dvw]">
          <h1 className="lg:text-[40px] pl-4 lg:pl-0 text-[28px] font-semibold">
            Over 10,000 <br className="lg:block hidden" /> happy Feedbacks
          </h1>
          <p className="text-md lg:pl-0 pl-4 lg:w-5/6">
            Here's what they have to say about their Jegos Chemicals Products &
            Services.
          </p>
          <div className="flex justify-between pl-4 lg:pl-0 lg:my-0 my-5 gap-10 w-3/12">
            <Button
              isIconOnly
              radius="full"
              className="bg-white border"
              variant="shadow"
              onClick={handleScrollLeft}
            >
              <LuArrowLeft className="text-xl" />
            </Button>
            <Button
              isIconOnly
              radius="full"
              className="bg-white border"
              variant="shadow"
              onClick={handleScrollRight}
            >
              <LuArrowRight className="text-xl" />
            </Button>
          </div>
        </div>
      

        <div className="flex justify-start lg:pl-0 pl-4 lg:w-7/12 tems-center">
          <div
            ref={feedbackRef}
            className="flex overflow-x-scroll no-scrollbar space-x-6 lg:space-x-8 flex-row"
          >
            {feedback.map((item: any, index: number) => (
              <div
                key={index}
                className="lg:min-w-[85dvh] md:min-w-[85dvh] min-w-[40dvh]  border border-blue-200 space-y-3 bg-[#F7F9FF] rounded-lg p-7"
              >
                <h2 className="lg:text-xl text-[20px] font-bold">
                  {item?.name}
                </h2>
                <h1 className="text-lg font-semibold">{item?.company}</h1>
                <p className="text-sm text-[15px]">{item?.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
