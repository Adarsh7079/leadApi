import React, { useState } from "react";
import EnquiryForm from "../modal/FormBox";
import CustomButton from "../../shared/CustomButton";

function FloorPlansTwo({ floorPlans }) {
  const [activeTab, setActiveTab] = useState(
    floorPlans[0].type.replace(/[^a-zA-Z0-9]/g, "")
  );

  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <section
        className="floor-plan mt-[-20px] md:mt-10 md:min-h-[80px] bg-[#F6F4F1] "
        id="floorplan"
      >
        <div>
        <div className="flex justify-center" id="smallmid">
                    <h2 className="text-[#374151] text-2xl leading-[50px] mt-10 pb-10">Floor Plans</h2>
                  </div>
        </div>
        <div className="container">
          {/* Top Buttons */}
          <div className="flex justify-center space-x-4  mb-6">
            {floorPlans.map((plan, index) => (
              <button
                key={index}
                onClick={() =>
                  setActiveTab(plan.type.replace(/[^a-zA-Z0-9]/g, ""))
                }
                className={`px-4 py-2 rounded-md ${
                  activeTab === plan.type.replace(/[^a-zA-Z0-9]/g, "")
                    ? "bg-[#5C5A5A] text-white text-[16px] font-medium"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="tabs-content flex flex-col items-center">
            {floorPlans.map((plan, index) => {
              const tabId = plan.type.replace(/[^a-zA-Z0-9]/g, "");
              return (
                activeTab === tabId && (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-4"
                  >
                    {/* Centered Image */}
                    <div className="flex items-center justify-center w-full md:w-[900px] md:h-[400px] border-2 mb-6">
                      <img
                        src={plan.image}
                        alt={`${plan.type} Floor Plan`}
                        className="max-w-full max-h-[500px] object-contain"
                      />
                    </div>

                    {/* Download Brochure Button */}
                    <div className="cta-two__btn-box" onClick={handleOpenForm}>
                      <p className="cta-two__btn thm-btn">DOWNLOAD BROCHURE</p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>

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
            <EnquiryForm />
          </div>
        </div>
      )}
    </>
  );
}

export default FloorPlansTwo;
