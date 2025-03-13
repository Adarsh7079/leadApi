import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../assets/images/logo.png";
import MobileNav from "./MobileNav";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";

const Navbar = () => {
  const [open, setOpne] = useState(false);
  return (
    <nav className="w-full flex justify-center bg-white fixed top-0 z-50  ">
      <div className="  sm:w-full md:w-full lg:w-4/5 xl:w-5/6 px-2 md:px-0">
        <div className="flex  items-center font-medium w-full  xl:gap-36 md:gap-20">
          <div className=" z-50  md:w-auto  w-full flex justify-between ">
            <Link to="/">
              <img
                src={Logo}
                alt=""
                className="md:w-[180px] hidden md:flex h-[75px] md:cursor-pointer py-1"
              />
            </Link>
          </div>
          <div>
            <div>
              {" "}
              <ul className=" md:flex hidden  items-center md:gap-8 text-gray-800 mt-3">
                <NavLinks />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white text-black fixed top-0 w-full z-50">
        <div className="w-full items-center flex justify-between">
          <div className=" md:hidden">
            <Link to="/">
              <img src={Logo} alt="" className=" h-[50px] px-2" />
            </Link>
          </div>
          <div>
            {open ? (
              <div
                onClick={() => setOpne(!open)}
                className=" text-2xl font-bold md:hidden  text-black h-[40px] flex justify-center items-center p-3 py-10  "
              >
                {" "}
                <X className=" w-[28px] h-[28px] font-extrabold" />
              </div>
            ) : (
              <div
                onClick={() => setOpne(!open)}
                className=" text-2xl font-bold md:hidden  text-black h-[40px] flex justify-center items-center p-3 py-10  "
              >
                {" "}
                <Menu className=" w-[28px] h-[28px] font-extrabold" />
              </div>
            )}
          </div>
        </div>
        {/* Mobile view  */}
        <div
          className={`md:hidden  bg-white  w-[70%] h-full bottom-0 duration-500 ${
            open
              ? "fixed left-0 top-0 h-auto z-100 translate-x-0"
              : "left-[-100%]"
          }`}
        >
          {open && (
            <div>
              <div className="w-full flex ">
                <Link to="/">
                  <img
                    src={Logo}
                    alt=""
                    className="md:w-[200px] block md:hidden h-[55px] px-2 md:cursor-pointer"
                  />
                </Link>
              </div>
              <div className="">
                {/* NavBar Mobile */}
                <MobileNav />
              </div>
              {/* Social Media Icons at Bottom */}
              <div className="absolute bottom-0 w-full flex  gap-2 p-3 bg-white">
                <div className="w-[30px] h-[30px] bg-gray-700 rounded-full flex items-center justify-center">
                  <Twitter className="text-white w-[17px] h-[17px]" />
                </div>
                <div className="w-[30px] h-[30px] bg-gray-700 rounded-full flex items-center justify-center">
                  <Instagram className="text-white w-[17px] h-[17px]" />
                </div>
                <div className="w-[30px] h-[30px] bg-gray-700 rounded-full flex items-center justify-center">
                  <Linkedin className="text-white w-[17px] h-[17px]" />
                </div>
                <div className="w-[30px] h-[30px] bg-gray-700 rounded-full flex items-center justify-center">
                  <Facebook className="text-white w-[17px] h-[17px]" />
                </div>
                <div className="w-[30px] h-[30px] bg-gray-700 rounded-full flex items-center justify-center">
                  <Youtube className="text-white w-[17px] h-[17px]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
