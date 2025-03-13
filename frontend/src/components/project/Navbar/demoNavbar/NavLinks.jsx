import React, { useState } from "react";
import { links } from "../../../utils/link";

const NavLinks = () => {
  const [show, setShow] = useState(null);

  const handleMouseEnter = (index) => {
    setShow(index);
  };

  const handleMouseLeave = () => {
    setShow(null);
  };

  return (
    <div className="flex flex-col  md:flex-row lg:gap-10 2xl:gap-20 ">
      {links.map((link, index) => (
        <div key={index} className="group">
          <div
            className="text-left md:cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={link.link}
               target="_blank"
              className="no-underline  tracking-wider text-gray-800 hover:text-gray-900 text-[15px] 
              line-height-[25px]; font-weight:250; "
            >
              {link.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
