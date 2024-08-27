import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import FeedBkCards from "./FeedBackCards/FeedBkCards";
import { Button } from "@nextui-org/react";

export default function FeedBack() {
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
            >
              <LuArrowLeft className="text-xl" />
            </Button>
            <Button
              isIconOnly
              radius="full"
              className="bg-white border"
              variant="shadow"
            >
              <LuArrowRight className="text-xl" />
            </Button>
          </div>
        </div>
        <FeedBkCards />
      </div>
    </div>
  );
}
