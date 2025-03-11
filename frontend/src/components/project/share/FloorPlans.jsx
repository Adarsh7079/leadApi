import React, { useState } from "react";

import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import EnquiryForm from "../../Form";

function FloorPlans({ floorPlans,formData, }) {
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? floorPlans.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === floorPlans.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="w-full flex justify-center bg-[#384152]">
        <div className="w-full flex flex-col sm:w-full md:w-full lg:w-4/5 xl:w-5/6 px-3 md:px-0">
          <div className="py-10">
            <div className="flex justify-center">
              <h2 className="text-white text-[24px] pb-4">Floor Plan</h2>
            </div>
            <div className="max-w-6xl mx-auto bg-white shadow-lg mb-5">
              <div className="flex flex-col items-center">
                {/* ✅ Display all images with scrollable feature */}
                <div className="w-full flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3 w-full flex items-center h-[350px] justify-between">
                    <button onClick={handlePrevious}>
                      <MdArrowBackIosNew className="border-2 text-3xl md:ml-3" />
                    </button>
                    <div className="overflow-hidden w-full flex items-center justify-center">
                      <img
                        src={floorPlans[currentIndex].image}
                        alt={floorPlans[currentIndex].type}
                        className="md:w-[400px] w-[300px] h-[300px] rounded-lg transition-transform duration-300"
                      />
                    </div>
                    <button onClick={handleNext}>
                      <MdOutlineArrowForwardIos className="border-2 text-3xl ml-[-10px]" />
                    </button>
                  </div>

                  {/* Floor Plan Details */}
                  <div className="hidden md:w-1/3 h-full w-full sm:flex flex-col justify-between space-y-4 border-l-[1px] border-[#384152]">
                    <div className="pr-6 h-full">
                      <div className="border-b-[1px] border-[#384152] py-1 px-6">
                        <p className="text-[16px] uppercase font-medium text-gray-700 mt-2">
                          Type
                        </p>
                        <p className="text-[16px] font-bold text-gray-700">
                          {floorPlans[currentIndex].type}
                        </p>
                      </div>
                      <div className="border-b-[1px] border-[#384152] py-1 px-6">
                        <p className="text-[16px] uppercase font-medium text-gray-700 mt-2">
                          Area
                        </p>
                        <p className="text-[16px] font-bold text-gray-700">
                          {floorPlans[currentIndex].area}
                        </p>
                      </div>
                      <div className="border-b-[1px] border-[#384152] py-1 px-6">
                        <p className="text-[16px] uppercase font-medium text-gray-700 mt-2">
                          Price
                        </p>
                        <p className="text-[16px] font-bold text-gray-700">
                          {floorPlans[currentIndex].price}
                        </p>
                      </div>
                      <div className="pt-2 mb-4 px-6">
                        <button
                          className="mt-3 text-[16px] bg-gray-600 hover:bg-gray-700 text-white py-2  
                            rounded font-medium shadow-md transition-all duration-300 w-2/3"
                          onClick={handleOpenForm}
                        >
                          Download Floor Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Download Button */}
            <div className="flex justify-center">
              <button
                className="md:hidden text-[16px] mb-3 w-[200px] text-[#384152] bg-white py-2  
                  rounded font-medium shadow-md transition-all duration-300"
                onClick={handleOpenForm}
              >
                Download Floor Plan
              </button>
            </div>
          </div>

          {/* Pop-up Form */}
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
        </div>
      </div>
    </>
  );
}

export default FloorPlans;
