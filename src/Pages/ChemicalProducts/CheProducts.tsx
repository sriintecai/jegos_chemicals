import ChemProCard from "./ChemProComponents/ChemProCard";
import IndustrialCarePro from "./ChemProComponents/IndusCarePro/IndustrialCarePro";
export default function CheProducts() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div>
        <h1 className="lg:text-[36px] text-[20px] font-bold lg:px-0 px-2">
          Chemical Products
        </h1>
        <p className="lg:text-xl pb-5 text-[14px] lg:px-0 px-2">
          We offer a wide array of high-quality chemical products designed to
          meet the diverse needs of industrial, automobile, and household
          applications.
        </p>
        <ChemProCard />
        <IndustrialCarePro />
      </div>
    </div>
  );
}