import React from "react";

const ScheduleNow = () => {
  const displayDelayedPopupGolfHills = () => {
    // Define your popup display logic here
    console.log("Popup displayed");
  };

  return (
    <>
      {/* <div
        className="apartment-one__bg"
        style={{
          backgroundImage: `url("/src/HomePageIndia/images/backgrounds/Dubai.jpg")`,
        }}
      ></div> */}

      <section className="relative block bg-[#C08830] mt-10 md:mt-10 pt-[94px] pb-[84px]">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="cta-three__left">
                <p className="cta-three__sub-title">
                  Don’t hesitate to contact us
                </p>
                <h3 className="cta-three__title">Book an appointment now</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="cta-three__btn-box">
                <button
                  className="thm-btn bg-black cta-three__btn"
                  onClick={displayDelayedPopupGolfHills}
                >
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleNow;
