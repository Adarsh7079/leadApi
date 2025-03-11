import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCaretForward } from "react-icons/io5";
import EnquiryForm from "../../Form";

const Highlights = ({ hightlightData ,formData}) => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const data = hightlightData.features;
  const image = hightlightData.images;
  const tagline = hightlightData.tagline;

  return (
    <>
      <section className="min-h-[65vh]  py-5   " id="highlights ">
        <div className=" relative ">
          <div className="flex flex-wrap items-center">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 mb-8 2xl:px-14 lg:mb-0">
              <div className="xl:ml-[94px]">
                <h2 className=" text-[24px] font-normal  mb-8  ml-5">
                  {tagline}
                </h2>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-700">
                  {data.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 max-w-[340px] sm:max-w-[520px] 2xl:max-w-[800px]"
                    >
                      <IoIosArrowForward className="text-[20px] md:text-[20px] text-black flex-shrink-0" />
                      <span className="text-[14px]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 md:mt-8 ml-10">
                  <button
                    className="bg-[#384152] text-white text-[16px]  py-2 md:py-3 px-4 md:px-6 rounded-md shadow hover:bg-[#384152] transition duration-300"
                    onClick={handleOpenForm}
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className=" w-full lg:w-1/2 flex justify-center items-center ">
              {/* Golden Overlay */}
              {/* <div
                className="absolute bg-[#384152] -z-10 2xl:mt-20 hidden sm:block h-[100%] 2xl:h-[120%]"
                style={{
                  right: -25,
                  width: "30%", // Maintain overlay width
                }}
              ></div> */}

              {/* <div className="absolute -top-20 sm:right-[500px] lg:right-[670px] w-3 h-[110px] bg-[#384152] -z-10 hidden sm:block"></div> */}

              {/* Image */}
              <img
                src={image}
                alt="Highlights"
                className=" w-[95%] sm:w-[90%] 2xl:w-[80%] 2xl:mt-16 h-[350px] 2xl:h-[400px] object-cover z-10 drop-shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg relative w-full max-w-lg">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
            >
              ✕
            </button>
           <EnquiryForm/>
          </div>
        </div>
      )}
    </>
  );
};

export default Highlights;
