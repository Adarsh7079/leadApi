import React, { useState } from "react";
import EnquiryForm from "../../Form";

function Pricing({ pricingData ,formData}) {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const { heading, table } = pricingData;

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col sm:w-full md:w-full lg:w-4/5 xl:w-5/6 px-2 md:px-0">
          {/* For Mobile */}
          <div
            id="customContainer"
            className="py-6 md:px-3 md:hidden lg:hidden "
          >
            <div className="text-center mb-6">
              <h2 className="text-[#384152] text-[24px]  ">{heading}</h2>
            </div>
            <div className="shadow-lg px-1">
              <table
                className="w-full  text-center text-gray-600 
             border-[#384152] "
              >
                <thead className="bg-[#384152] text-white">
                  <tr className=" text-[14px]">
                    {["Type", "Size", "Price", "Download"].map(
                      (heading, index) => (
                        <th
                          key={index}
                          className="px-2 py-3 text-[14px]
                   text-left  "
                        >
                          {heading}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {table.map((item, index) => (
                    <tr
                      key={index}
                      className=" border-[1px]
                 border-[#384152]"
                    >
                      <td
                        className="px-1 py-4 text-[14px] 
                  text-[#384152]  border-[#384152]"
                      >
                        {item.type}
                      </td>
                      <td
                        className="px-2 py-4 text-[14px]
                   text-[#384152]  border-[#384152]"
                      >
                        {item.area}
                      </td>
                      <td
                        className="px-2 py-4 text-[14px] 
                  text-[#384152] border-[#384152]"
                      >
                        {item.price}
                      </td>
                      <td className="py-4 text-[14px] text-[#384152] ">
                        <button
                          className=" text-[10px] thm-btn  avilability__btn   px-2 py-2 border-1 
                      border-[#384152] rounded transition"
                          onClick={handleOpenForm}
                        >
                          Get Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* For Desktop */}
          <section className="  py-24 hidden lg:block  ">
            <div className="container mt-[-55px]">
              <div className="section-title text-center">
                <h2 className="text-[#384152] text-[24px]  ">{heading}</h2>
              </div>
              <div className=" shadow-lg ">
                <table className="  border-collapse w-full ">
                  <thead className="bg-[#384152] w-full ">
                    <tr className="text-[18px]">
                      {["Type", "Area", "Price", "Download"].map(
                        (heading, index) => (
                          <th
                            key={index}
                            className="px-6 py-3 w-[100px]  items-center text-center  text-white "
                          >
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-[#EAEAEA] w-full border-1 border-[#384152]">
                    {table.map((item, index) => (
                      <tr
                        key={index}
                        className="w-full border-1  border-[#384152]"
                      >
                        <td className="px-6 justify-center items-center py-3 text-center w-1/4">
                          <p className="text-[16px]">{item.type}</p>
                        </td>
                        <td className="px-4 py-3 text-center w-1/4">
                          <p className="text-[16px]">{item.area}</p>
                        </td>
                        <td className="px-6 py-3 text-center w-1/4">
                          <p className="text-[16px]">{item.price}</p>
                        </td>
                        <td className="px-6 py-3 text-center w-1/4">
                          <div
                            className="avilability__btn-box"
                            onClick={handleOpenForm}
                          >
                            <p className="thm-btn avilability__btn font-normal bg-white border-2 border-gray-500 rounded-md text-[16px]">
                              Get Details
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
               <EnquiryForm/>
              </div>
            </div>
          )}
          {/* Pop up End */}
        </div>
      </div>
    </>
  );
}

export default Pricing;
