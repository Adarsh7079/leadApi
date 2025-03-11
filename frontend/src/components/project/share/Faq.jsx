import { useState } from "react";

const Faq = ({faqdata}) => {
  const [showMore, setShowMore] = useState(false);

  // Split FAQ data into two groups
  const firstFive = faqdata.slice(0, 5);
  const remaining = faqdata.slice(5);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-center bg-[#384152] mt-20">
      <div className="w-full flex flex-col sm:w-full md:w-full lg:w-4/5 xl:w-5/6 px-3 md:px-0">
        <div className="text-forheading flex justify-center text-white mt-3">
          FAQ
        </div>
        <div className="w-full flex sm:flex-row flex-col gap-10 py-2 sm:mt-5 mt-3 pb-5">
          {/* Mobile and first column */}
          <div className="sm:w-[50%] w-[100%] rounded-md border-[#FFFFFF] border-[1px]">
            <ul
              className={`py-3 flex flex-col gap-10 ${
                showMore ? "overflow-auto" : "overflow-hidden"
              } sm:overflow-auto`}
              style={{
                maxHeight: showMore ? "auto" : "550px",
                WebkitOverflowScrolling: "touch", // Smooth scrolling for mobile
              }}
            >
              {/* Show the first 5 items */}
              {firstFive.map((data, index) => (
                <div key={index}>
                  <div className="flex text-white gap-2 forsubtitle">
                    Q. <li>{data.question}</li>
                  </div>
                  <div className="text-white">{data.answer}</div>
                </div>
              ))}

              {/* Show "Read More" items if toggled */}
              {showMore &&
                remaining.map((data, index) => (
                  <div key={index}>
                    <div className="flex text-white gap-2 forsubtitle">
                      Q. <li>{data.question}</li>
                    </div>
                    <div className="text-white">{data.answer}</div>
                  </div>
                ))}
            </ul>

            {/* "Read More" button */}
            <button
              className=" w-full sm:hidden text-white justify-center  items-center underline text-sm  pb-2"
              onClick={handleToggle}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Second column for larger screens */}
          <div className="hidden sm:block sm:w-[50%] w-[100%] rounded-md border-[#FFFFFF] border-[1px]">
            <ul className="py-3 flex flex-col gap-10">
              {remaining.map((data, index) => (
                <div key={index}>
                  <div className="flex text-white gap-2 forsubtitle">
                    Q. <li>{data.question}</li>
                  </div>
                  <div className="text-white">{data.answer}</div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
