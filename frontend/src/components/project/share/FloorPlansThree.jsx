import React, { useState } from "react";
import Slider from "react-slick";
import EnquiryForm from "../modal/FormBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/gallery.css";

const CustomArrow = ({ className, onClick, direction }) => (
  <button
    className={`${className} custom-arrow ${
      direction === "prev" ? "left-[-20px]" : "right-[-20px]"
    }`}
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous Slide" : "Next Slide"}
  >
    {direction === "prev" ? "<" : ">"}
  </button>
);

function FloorPlansThree({ floorPlans }) {
  const [activeTab, setActiveTab] = useState("floorPlans"); // Start with floorPlans tab
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: "0",
    nextArrow: <CustomArrow className='mr-10 bg-[#374151]' direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: false, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: false, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="floor-plan mt-10 md:min-h-[80px] bg-[#F6F4F1]"
        id="floorplan"
      >
        <div className="flex justify-center" id="smallmid">
          <h2 className="text-[#374151] text-2xl leading-[50px] mt-10 pb-10">
            Floor Plans
          </h2>
        </div>
        <div className="container">
          {/* Tab Buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("floorPlans")}
              className={`px-4 py-2 rounded-md ${
                activeTab === "floorPlans"
                  ? "bg-[#C08830] text-white text-[16px] font-medium"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Floor Plans
            </button>
            <button
              onClick={() => setActiveTab("masterPlans")}
              className={`px-4 py-2 rounded-md ${
                activeTab === "masterPlans"
                  ? "bg-[#C08830] text-white text-[16px] font-medium"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Master Plans
            </button>
          </div>

          {/* Tab Contents */}
          <div className="tabs-content flex flex-col items-center">
            {activeTab === "floorPlans" && (
              <div className="w-full">
                 {/* Floor Plans Images */}
                <Slider {...settings}>
                  {floorPlans.map((plan, index) => (
                    <div
                      key={index}
                      className="flex py-1 px-2 md:max-w-[500px] w-full items-center"
                    >
                      <div className="flex items-center justify-center w-full md:w-[500px] h-[300px] md:h-[400px] border-2 mb-6">
                        <img
                          src={plan.image}
                          alt={`${plan.type} Master Plan`}
                          className="max-w-full max-h-[500px] object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}

            {activeTab === "masterPlans" && (
              <div className="w-full">
                {/* Master Plans Images */}
                <Slider {...settings}>
                  {floorPlans.map((plan, index) => (
                    <div
                      key={index}
                      className="flex py-1 px-2 md:max-w-[500px] w-full items-center"
                    >
                      <div className="flex items-center justify-center w-full md:w-[500px] h-[300px] md:h-[400px] border-2 mb-6">
                        <img
                          src={plan.image}
                          alt={`${plan.type} Master Plan`}
                          className="max-w-full max-h-[500px] object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
        <div
          className="cta-two__btn-box flex justify-center"
          onClick={handleOpenForm}
        >
          <p className="cta-two__btn thm-btn text-[14px] text-gray  font-normal px-5 mt-10 bg-[#C08830]">
            DOWNLOAD BROCHURE
          </p>
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

export default FloorPlansThree;
