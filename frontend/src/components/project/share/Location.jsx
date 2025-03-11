import React, { useState } from "react";

import { MdLocalAirport } from "react-icons/md";
import { FaTrain } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa6";
import { GiShop } from "react-icons/gi";
import EnquiryForm from "../../Form";

const Location = ({ location }) => {
  const image = location.image;
 
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="w-full flex justify-center bg-[#2F3B52]">
        <div className="w-full flex flex-col sm:w-full md:w-full lg:w-4/5 xl:w-5/6 px-1  md:px-0 ">
          <section className=" py-10 md:py-10" id="location">
            <div className="container mx-auto ">
              {/* Heading */}
              <h2 className="text-center text-[24px]  font-normal text-white mb-8 ">
                Location
              </h2>

              {/* Image */}
              <div className="flex justify-center">
                <div className="w-full  sm:h-[500px] rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image}
                    alt="Location Map"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* Icons Section */}
              <div className="w-full">
              <div className=" mt-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 text-left">
                {[
                  {
                    icon: <MdLocalAirport />,
                    label: (
                      <>
                        <span className="text-[16px] font-bold">{location.data[0].airport.distance_time}</span>
                        <br />
                        <span className="text-[14px]">{location.data[0].airport.name}</span>
                      </>
                    ),
                  },
                  {
                    icon: <FaTrain />,
                    label: (
                      <>
                        <span className="text-[16px] font-bold">{location.data[0].railwayormetro.distance_time}</span>
                        <br />
                        <span className="text-[14px]">{location.data[0].railwayormetro.name}</span>
                      </>
                    ),
                  },
                  {
                    icon: <MdSchool />,
                    label: (
                      <>
                        <span className="text-[16px] font-bold">{location.data[0].school.distance_time}</span>
                        <br />
                        <span className="text-[14px]">{location.data[0].school.name}</span>
                      </>
                    ),
                  },
                  {
                    icon: <FaRegHospital />,
                    label: (
                      <>
                        <span className="text-[16px] font-bold">{location.data[0].hospital.distance_time}</span>
                        <br />
                        <span className="text-[14px]">{location.data[0].hospital.name}</span>
                      </>
                    ),
                  },
                  {
                    icon: <GiShop />,
                    label: (
                      <>
                        <span className="text-[16px] font-bold">{location.data[0].mall.distance_time}</span>
                        <br />
                        <span className="text-[14px] whitespace-nowrap">
                        {location.data[0].mall.name}
                        </span>
                      </>
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#2F3B52] w-[200px] h-[100px] flex flex-row gap-4 items-center mx-auto p-3"
                  >
                    {/* Icon with border */}
                    <div className="border border-white p-2 rounded-md text-white text-xl">
                      {item.icon}
                    </div>
                    {/* Label Text */}
                    <div className="text-white text-left">{item.label}</div>
                  </div>
                ))}
              </div>
              </div>
              
            </div>
          </section>

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

export default Location;