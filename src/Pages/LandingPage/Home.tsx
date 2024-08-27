import FeedBack from "./HomeComponents/FeedBack";
import MostBookedServices from "./HomeComponents/MostBookedServices";
import ServicesProvided from "./HomeComponents/ServicesProvided";
import SpecialistChemicals from "./HomeComponents/SpecialistChemicals";
import TopProduct from "./HomeComponents/TopProduct";
import Why from "./HomeComponents/Why";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center lg:gap-18 bg-[#FDFDFE]">
      <SpecialistChemicals/>
      <TopProduct/>
      <ServicesProvided/>
      <MostBookedServices/>
      <FeedBack/>
      <Why/>
    </div>
  )
}