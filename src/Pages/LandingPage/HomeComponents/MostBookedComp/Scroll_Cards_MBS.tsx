import { MostBooked, mostbooked } from "../../../../Lib/HomeData";

export default function Scroll_Cards_MBS() {
  return (
    <div className="grid grid-cols-1 ">
      <div className=" flex overflow-x-auto sm:no-scrollbar lg:pb-0 pb-5">
        <div className="flex gap-4">
          {mostbooked?.map((item: MostBooked, index: number) => (
            <div
              key={index}
              className="border-2 items-center pt-5 flex flex-col justify-between bg-white w-64 rounded-xl">
              <h1 className="lg:text-md p-5 text-sm font-bold">
                {item?.title}
              </h1>

              <img
                src={item.img}
                alt="Loading..."
                className="rounded-b-lg w-full "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}