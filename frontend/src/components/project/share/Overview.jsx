import React, { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react"; // Import the Lucide icons
import EnquiryForm from "../../Form";

const Overview = ({ overviewData, stripdata }) => {
  const [showForm, setShowForm] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const { heading, description, image, buttonLabel, onButtonClick } =
    overviewData;

  const handleToggle = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col sm:w-full md:w-full lg:w-4/5 xl:w-5/6 px-2  md:px-0">
          {/* Overview Start */}
          <section className=" mt-5 px-2 md:mt-0 md:px-0 " id="overview">
            <div className=" " />
            <div className=" ">
              <div className="row md:mt-20 md:pb-0">
                <div className="col-xl-6  ">
                  <div className="   ">
                    <div className="section-title text-left">
                      <h1 className=" text-[24px] text-gray-700 ">{heading}</h1>
                    </div>
                    <div
                      className={`transition-all duration-300 ${
                        readMore
                          ? "h-48 overflow-y-auto"
                          : "h-48 overflow-hidden"
                      }`}
                      style={{
                        WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS devices
                      }}
                    >
                      {description.map((text, index) => (
                        <p
                          key={index}
                          className=" mb-2 mr-2 text-justify text-[14px]"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                    <br />
                    {buttonLabel && (
                      <div className="">
                        <button
                          className="flex items-center gap-2 w-[180px] py-2 px-10 bg-gray-700 text-white text-[14px] rounded drop-shadow-2xl"
                          onClick={handleToggle}
                        >
                          {readMore ? (
                            <>
                              Read Less <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Read More <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-xl-6 hidden md:block">
                  <div className="about-three__left">
                    <div className="about-three__img-box">
                      <div className="about-three__img-1 border rounded-xl w-[400px] ">
                        <img
                          src={image}
                          alt="Overview"
                          className="md:h-[510px] rounded-xl border-1 border-gray-700 drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className=" hidden md:flex sm:mt-[-15%] 2xl:mt-[-10%]  drop-shadow-2xl"
            id="smallhide"
          >
            <div className="container ">
              <div className=" px-20 ">
                <div className="w- full  flex justify-center">
                  <div className=" w-[700px] rounded-xl border-gray-700 text-white bg-gray-700 px-3 pt-3">
                    <ul className="list-unstyled counter-two__list   ">
                      {stripdata.map((stat, index) => (
                        <li
                          key={index}
                          className=" px-10 "
                          data-wow-delay={`${100 * (index + 1)}ms`}
                        >
                          <div className="">
                            <div className="">
                              <img
                                src={stat.iconClass}
                                alt=""
                                className=" h-[40px] w-[40px]"
                              />
                            </div>

                            <div className="counter-two__content-box flex flex-col">
                              <span className="text-lg font-semibold ">
                                {stat.title}
                              </span>
                              <span className=" ">{stat.subtitle}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Overview End */}

          {/* Pop up Form Start */}
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg p-6 shadow-lg relative w-full max-w-lg">
                <button
                  onClick={handleCloseForm}
                  className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                >
                  ✕
                </button>
                <EnquiryForm />
              </div>
            </div>
          )}
          {/* Pop up End */}
        </div>
      </div>
    </>
  );
};

export default Overview;
