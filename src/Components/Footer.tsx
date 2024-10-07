import { MdOutlineCall } from "react-icons/md";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* pc */}

      <footer className="bg-[#1E1F24] flex justify-center items-center">
        <div className="bg-[#1E1F24] 2xl:w-10/12 lg:w-10/12 py-8 text-white lg:block hidden">
          <div className="flex justify-between">
            <div>
              {/* <Image src={"/LOGOS/LOGO_BLACK.svg"} /> */}
              <h1 className="font-semibold text-lg">Jegos Eco Chemicals</h1>
            </div>
            <div className="flex flex-col lg:text-2xl justify-between ">
              <div>
                <Link to="/products" className="cursor-pointer">
                  Products
                </Link>
              </div>
              <div>
                <Link to="/services" className="cursor-pointer">
                  Services
                </Link>
              </div>
              <div>
                <Link to="/" className="cursor-pointer">
                  About Us
                </Link>
              </div>
              <div>
                <Link to="/" className="cursor-pointer">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-6 items-start">
              <div className="flex justify-center items-center gap-5">
                <CiLocationOn
                  width={3}
                  height={3}
                  size={50}
                  className="lg:p-3 md:p-2 p-2 rounded-md border "
                />
                <h1>
                  Old No.1/238, New No.2/123, Police Commissioner
                  <br /> Colony, 3rd street, Polichalur, Chennai - 600074.
                </h1>
              </div>
              <div className="flex justify-center items-center gap-5">
                <MdOutlineCall
                  width={30}
                  height={30}
                  size={50}
                  className="lg:p-3 md:p-2 p-2 rounded-md border "
                />
                <h1>+91 87540 06902</h1>
              </div>
              <div className="flex justify-center items-center gap-5">
                <CiMail
                  width={30}
                  height={30}
                  size={50}
                  className="lg:p-3 md:p-2 p-2 rounded-md border "
                />
                <Link to={``} className="cursor-pointer">
                  jegoeco2019@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <p className="text-start mt-10 border-t pt-8 border-gray-700">
            © Copyright 2024 <a href="/">Jegos Chemicals</a>. All rights
            reserved.
          </p>
        </div>
      </footer>
      {/* mobile -- 1 */}

      {/* <footer className="bg-[#1E1F24] max-w-screen p-2 py-4 w-full text-white sm:hidden block">
        <div className="space-y-6">
          <div>
            <a href="/">
              <Image src={"/LOGOS/LOGO_BLACK"} />
            </a>
          </div>
          <div className="flex">
            <div className="flex flex-col w-4/6 text-xl justify-center space-y-8 ">
              <div>
                <a href="/products" className="">
                  Products
                </a>
              </div>
              <div>
                <a href="/services" className="">
                  Services
                </a>
              </div>
              <div>
                <h3 className="">About Us</h3>
              </div>
              <div>
                <h3 className="">Contact Us</h3>
              </div>
            </div>

            <div className="flex flex-col space-y-6 w-4/6 text-sm items-start">
              <div className="flex justify-center items-center gap-5">
                <CiLocationOn size={100} />
                <h1>
                  Old No.1/238, New No.2/123, Police Commissioner Colony, 3rd
                  street, Polichalur, Chennai - 600074.{" "}
                </h1>
              </div>
              <div className="flex justify-center items-center gap-5">
                <MdOutlineCall size={30} />
                <h1>
                  +91 98945 84160
                  <br />
                  +91 98501 09847
                </h1>
              </div>
              <div className="flex justify-center items-center gap-5">
                <CiMail size={30} />
                <a href="jegos.chemicals@gmail.com">
                  jegos.chemicals@gmail.com
                </a>
              </div>
            </div>
          </div>
          <p className="text-start mt-10 border-t pt-8 border-gray-700">
            © Copyright 2024 <a href="/">Jegos Chemicals</a>. All rights
            reserved.
          </p>
        </div>
      </footer> */}

      {/* mobile -- 2 */}

      <footer className="bg-[#1E1F24] px-5  max-w-screen p-2 py-4 w-full text-white  lg:hidden">
        <div className="flex justify-center items-center flex-col space-y-6">
          <div>
            <a href="/">
              {/* <Image src={"/LOGOS/LOGO_BLACK.svg"} /> */}
              <h1 className="font-semibold text-lg">Jegos Eco Chemicals</h1>
            </a>
          </div>
          <div className="flex">
            <div className="flex flex-col w-4/6 lg:text-xl justify-center space-y-8 ">
              <div>
                <Link to="/products" className="cursor-pointer">
                  Products
                </Link>
              </div>
              <div>
                <Link to="/services" className="cursor-pointer">
                  Services
                </Link>
              </div>
              <div>
                <h3 className="">About Us</h3>
              </div>
              <div>
                <h3 className="">Contact Us</h3>
              </div>
            </div>

            <div className="flex flex-col space-y-6 w-4/6 text-[14px] lg:text-sm items-start">
              <div className="flex justify-center items-center gap-5">
                <CiLocationOn size={100} />
                <h1>
                  Old No.1/238, New No.2/123, Police Commissioner Colony, 3rd
                  street, Polichalur, Chennai - 600074.{" "}
                </h1>
              </div>
              <div className="flex justify-center items-center gap-5">
                <MdOutlineCall size={30} />
                <h1>+91 87540 06902</h1>
              </div>
              <div className="flex justify-center items-center gap-5">
                <CiMail size={30} />
                <a href="jegoeco2019@gmail.com">jegoeco2019@gmail.com</a>
              </div>
            </div>
          </div>
          <p className="text-start mt-10 border-t pt-8 border-gray-700">
            © Copyright 2024 <a href="/">Jegos Chemicals</a>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
