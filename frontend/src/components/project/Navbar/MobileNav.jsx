import React, { useState } from "react";
import { links } from "../../../utils/link";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return (
    <div>
      <section className="">
        <div className=" flex overflow-y-auto">
          <div className="w-full flex flex-col ">
            {links.map((item, i) => (
              <Link
                to={item.link}
                target="_blank"
                key={i}
                className=" border-b-2 no-underline"
              >
                <div
                  className={`flex flex-col px-2 justify-between ${
                    activeId === i ? "bg-white" : "bg-gray-100"
                  }`}
                  onClick={() => togglerFunction(i)}
                >
                  <div className=" flex">
                    <div className=" w-full flex">
                      <a
                        href={item.link}
                        className=" no-underline text-gray-800 py-2 hover:text-gray-800"
                      >
                        {item.name}
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileNav;
