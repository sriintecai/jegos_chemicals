import IndustCareServ from "./ServicesComponents/IndCareServ/IndustCareServ";
import ServiceCard from "./ServicesComponents/ServiceCard";

export default function Services() {
  return (
    <div className="flex mt-4 lg:mt-0 lg:py-20 justify-center items-center">
    <div className="lg:w-11/12 lg:px-0 px-2 2xl:w-10/12  flex flex-col items-start justify-center">
        <h1 className="lg:text-[36px] text-[20px] font-bold  lg:px-0 px-2">
        Service
        </h1>
        <p className="lg:text-xl pb-5 text-[14px] lg:px-0 px-2">
          Jegos Chemicals provides a comprehensive suite of services designed to
          support and enhance your use of our chemicals. Our expert team is
          ready to assist you with tailored solutions and professional support.
        </p>
      <ServiceCard />
      <IndustCareServ />
    </div>
    </div>
  );
}