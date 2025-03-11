import React, { useState } from "react";
import EnquiryForm from "../modal/FormBox";
import { CakeSlice } from 'lucide-react';
import { Coffee } from 'lucide-react';
import { Podcast } from 'lucide-react';
import { Film } from 'lucide-react';
import { Tangent } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { Bike } from 'lucide-react';
import { PersonStanding } from 'lucide-react';
import { Waves } from 'lucide-react';
import { Volleyball } from 'lucide-react';

function AmenitiesTwo({ amenitiesDataTwo }) {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      {/*Amenities Start*/}
      <section className="services-one" id="amenities">
        <div className="services-one__shape-1 float-bob-x">
          <img src="assets/images/shapes/services-one-shape-1.png" alt="" />
        </div>
        <div className="services-one__shape-2 float-bob-x">
          <img src="assets/images/shapes/services-one-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="services-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">Amenities</h2>
                  <br />
                  <p>
                    {amenitiesDataTwo.text}
                  </p>{" "}
                </div>
                <div
                  id="smallmid"
                  className="cta-two__btn-box"
                  onClick={handleOpenForm}
                >
                  <p className="cta-two__btn thm-btn" style={{ fontSize: 14 }}>
                    Enquire Now
                  </p>
                </div>
                <br />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp "
              data-wow-delay="100ms"
            >
              <div className="services-one__single w-[150%] ">
                <div className="services-one__single-inner ">
                  <div className="services-card-icon ">
                    <Coffee  
                      width={70}
                      height={70} 
                      className=" text-[--alipes-base]" />
                  </div>
                  <h3 className="services-one__title">
                    <p>Cafeteria </p>
                  </h3>
                  {/* <p style="font-size: 20px;">BasketBall Court</p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="wow fadeInUp " data-wow-delay="100ms ">
              <div className="services-one__single ">
                <div className="services-one__single-inner ">
                  <div className="services-card-icon ">
                  <Dumbbell  
                      width={70}
                      height={70} 
                      className=" text-[--alipes-base]" />
                  </div>
                  <h3 className="services-one__title ">
                    <p>GYM</p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="00ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div className="services-card-icon">
                    <Volleyball  
                      width={70}
                      height={70} 
                      className=" text-[--alipes-base]" />
                  </div>
                  <h3 className="services-one__title">
                    <p>Kids' Play Area</p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="400ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div className="services-card-icon">
                  <Film  
                      width={70}
                      height={70} 
                      className=" text-[--alipes-base]" />
                  </div>
                  <h3 className="services-one__title">
                    <p>Movie Theatre</p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="400ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div className="services-card-icon">
                    <CakeSlice  
                      width={70}
                      height={70} 
                      className=" text-[--alipes-base]" />
                  </div>
                  <h3 className="services-one__title">
                    <p>Party Hall</p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="500ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div className="services-card-icon">
                    <Podcast  
                      width={70}
                      height={70} 
                      className=" text-[--alipes-base]" />
                  </div>
                  <h3 className="services-one__title">
                    <p>Squash Court</p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="600ms">
              <div className="services-one__single">
                <div className="services-one__single-inner">
                  <div className="services-card-icon">
                    <Waves  
                      width={70}
                      height={70} 
                      className=" text-[--alipes-base]" />
                  </div>
                  <h3 className="services-one__title">
                    <p>Swimming Pool</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Amenities End*/}

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
    </>
  );
}

export default AmenitiesTwo;
