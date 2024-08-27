import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Image,
  Button,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function NavigationBAr() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isProductsActive = location.pathname === "/products";
  const isServicesActive = location.pathname === "/services";
  const navigate = useNavigate();

  return (
    <div className="flex 2xl:w-11/12 w-full justify-center items-center">
      <div className="mx-auto w-full max-w-screen">
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="full"
          className="z-50 flex-row"
          position="static"
          classNames={{
            base: "bg-[#FDFDFE]",
          }}
        >
          <div className="flex space-x-10 lg:px-20">
            <NavbarBrand className="flex sm:">
              <Link color="foreground" href="/">
                <Image className="h-50 w-50 " src={"/LOGOS/LOGO.svg"} />
              </Link>
            </NavbarBrand>
            <NavbarItem className="hidden sm:flex">
              <Button
                className={`px-4 py-2 bg-transparent rounded-md ${
                  isProductsActive ? " text-blue-500" : " text-black"
                }`}
                onClick={() => navigate("/products")}
              >
                Products
              </Button>
            </NavbarItem>
            <NavbarItem className="hidden sm:flex">
              <Button
                className={`px-4 py-2 bg-transparent rounded-md ${
                  isServicesActive ? " text-blue-500" : " text-black"
                }`}
                onClick={() => navigate("/services")}
              >
                Services
              </Button>
            </NavbarItem>
          </div>

          <NavbarContent className="hidden sm:flex pr-16" justify="center">
            <NavbarItem>
              <Input
                classNames={{
                  base: "w-[20rem] h-10",
                  mainWrapper: "h-full",

                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-white border-1 border-gray-300",
                }}
                placeholder="Search For Products & Services"
                size="sm"
                startContent={<CiSearch size={18} />}
                type="search"
              />
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="z-50">
            <NavbarMenuItem className="flex flex-col">
              <Button
                className={`px-4 py-2  font-medium rounded-md bg-transparent ${
                  isProductsActive ? " text-blue-500" : " text-black"
                }`}
                onClick={() => navigate("/products")}
              >
                Products
              </Button>
              <Button
                className={`px-4 py-2  font-medium rounded-md bg-transparent ${
                  isServicesActive ? " text-blue-500" : " text-black"
                }`}
                onClick={() => navigate("/services")}
              >
                Services
              </Button>
            </NavbarMenuItem>
          </NavbarMenu>

          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  );
}
