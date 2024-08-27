import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavigationBAr from "../Components/NavigationBar";

export default function GlobalLayout() {
  return (
    <div className="flex flex-col w-full overflow-y-scroll no-scrollbar justify-between h-screen">
      <div className="relative flex flex-col justify-center items-center top-0 border-b-1 w-full border-gray-100">
        <NavigationBAr />
      </div>
      <div className="max-w-screen-3xl ">
        <Outlet />
      </div>
      <div className="relative bottom-0">
        <Footer/>
      </div>
    </div>
  );
}