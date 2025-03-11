import React, { useState } from "react";
import EnquiryForm from "../../Form";

function SiteVisitBanner({ image,formData }) {

  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <section className="relative block bg-[#384152] py-20 mt-10 md:mt-[100px]">
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 shadow-[0px_4px_10px_rgba(47,113,235,0.8)]"
          data-jarallax=""
          data-speed="0.2"
          data-imgposition="50% %"
          style={{ backgroundImage: `url(${image})` }}
          aria-label="Site visit background"
        ></div> */}
        <div className="relative block text-center">
          <h3 className=" text-[24px] font-normal leading-[24px] text-white uppercase mt-[-1%] ">
            Schedule a Site Visit
          </h3>
          <div className="relative block mt-[2%]">
            <button
              className="group relative overflow-hidden bg-white  px-6 py-3 rounded  font-semibold text-sm tracking-wide transition duration-300"
              type="button"
              onClick={handleOpenForm}
            >
              <span className="relative z-10 text-[14px] group-hover:text-gray-900">
                Schedule Now
              </span>
              <span className="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-all duration-300 origin-center z-0"></span>
            </button>
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
             <EnquiryForm onClose={handleCloseForm} formdata={formData} />
            
          </div>
        </div>
      )}
      {/* Pop up End */}
    </>
  );
}

export default SiteVisitBanner;
