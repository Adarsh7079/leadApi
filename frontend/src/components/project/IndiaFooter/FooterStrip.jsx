import React from "react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const FooterStrip = () => {
  return (
    <div className="w-full flex bg-black  justify-center mt-5">
      <div className="w-full flex  flex-col sm:w-full md:w-full lg:w-4/5 xl:w-5/6 xmd:px-0">
        {/* Navigation Section */}
        <div className="flex md:items-center md:justify-between flex-col md:flex-row py-2">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-x-2 md:gap-x-5 list-none">
            <Link
              to="/about-us"
              className="text-white no-underline hover:text-black font-medium leading-[23px]"
            >
              About
            </Link>
            <Link
              to="/trending-projects"
              className="text-white no-underline hover:text-black font-medium leading-[23px]"
            >
              Property
            </Link>
            <Link
              to="/developer"
              className="text-white no-underline hover:text-black font-medium leading-[23px]"
            >
              Developers
            </Link>
            <Link
              to="/location"
              className="text-white no-underline hover:text-black font-medium leading-[23px]"
            >
              Location
            </Link>
            <Link
              to="/news-updates"
              className="text-white no-underline hover:text-black font-medium leading-[23px]"
            >
              News
            </Link>
            <Link
              to="/careers"
              className="text-white no-underline hover:text-black font-medium leading-[23px]"
            >
              Careers
            </Link>
          </div>

          {/* Copy Right  */}
          <div className="">
            <span className=" text-gray-600 text-[14px]  ">
            Copyright © 2025 Property Station. All Rights Reserved by <span> <a className="text-gray-600 hover:text-gray-600  " href="propertystation.in">Property Station</a></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterStrip;
