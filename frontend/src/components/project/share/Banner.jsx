import React, { useState } from "react";
import EnquiryForm from "../../Form";


const Banner = ({ bannerDesktopImage, bannerMobileImage, data ,formData}) => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className="relative w-full h-[400px]  lg:h-[600px] 2xl:h-[800px]">
      {/* Desktop Banner */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerDesktopImage})` }}
      ></div>

      {/* Mobile Banner */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerMobileImage})` }}
      ></div>

      {/* Overlay Content - Positioned at the bottom */}
     
    </div>
       <div className=" bottom-0 left-0 right-0 bg-[#384152]  p-3 ">
        <div className="w-full flex justify-center">
          <div className="w-full flex md:flex-row flex-col md:items-center justify-between sm:w-full md:w-full lg:w-4/5 xl:w-5/6 md:px-0">
            <div className="flex flex-col justify-between">
              {/* Heading */}
              <div className="text-white flex justify-between">
               <div>
               <div className="text-[18px] md:text-[28px] font-bold">
                  {data.title}
                </div>
                <div className="text-[14px] md:text-[16px] font-bold">
                  {data.subtitle}
                </div>
               </div>
                <div className="flex md:hidden ">
              <button
                onClick={handleOpenForm}
                className="bg-white text-black text-[14px] font-bold h-[35px] px-3 rounded-lg shadow-md hover:bg-gray-200"
              >
                Enquire Now
              </button>
            </div>
              </div>

              {/* Pricing Details - Center Aligned */}
              <div className="mt-3  flex flex-col-2 items-center justify-between space-x-2">
                <div className={`w-[200px] ${"border-r-2 border-white"}`}>
                  <div className="text-[12px] md:text-[18px] font-bold text-white">
                     Price
                  </div>
                  <div className="text-[10px] md:text-[16px] font-semibold text-white">
                    {data.starting_price}
                  </div>
                </div>
                <div className={`w-[200px] ${"border-r-2 border-white"} px-2`}>
                  <div className="text-[12px] md:text-[18px] font-bold text-white">
                    RERA NO.
                  </div>
                  <div className="text-[10px] md:text-[16px] font-semibold text-white ">
                    {data.rerano || "RERA Aproved"}
                  </div>
                </div>
                <div className={`w-[200px]`}>
                  <div className="text-[12px] md:text-[18px] font-bold text-white">
                    Status
                  </div>
                  <div className="text-[10px] md:text-[16px] font-semibold text-white">
                    {data.status} 
                  </div>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className=" md:mt-0 mt-3 hidden md:flex ">
              <button
                onClick={handleOpenForm}
                className="bg-white  font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
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
              <EnquiryForm/>
            </div>
          </div>
        )}
        {/* Pop up End */}
      </div>
    </div>
    
  );
};

export default Banner;
