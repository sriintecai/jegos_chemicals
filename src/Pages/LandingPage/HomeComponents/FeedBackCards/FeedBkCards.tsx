import { FeedBack, feedback } from "../../../../Lib/FeedBackData";

export default function FeedBkCards() {
  return (
    <div className="flex justify-start lg:pl-0 pl-4 lg:w-7/12 tems-center">
      <div className="flex overflow-x-scroll no-scrollbar space-x-6 lg:space-x-8 flex-row">
        {
          feedback.map((item:FeedBack,index:number)=>(
        <div key={index} className="lg:min-w-[85dvh] md:min-w-[85dvh] min-w-[40dvh]  border border-blue-200 space-y-3 bg-[#F7F9FF] rounded-lg p-7">
          <h2 className="lg:text-xl text-[20px] font-bold">{item?.name}</h2>
          <h1 className="text-lg font-semibold">{item?.company}</h1>
          <p className="text-sm text-[15px]">{item?.text}</p>
        </div>
          ))
        }

      </div>
    </div>
  );
}