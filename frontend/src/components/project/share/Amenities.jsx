import { useEffect, useState } from "react";
import { MdWarehouse, MdPool } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";
import { LuHaze } from "react-icons/lu";
import { FaFireExtinguisher } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { Ri24HoursFill } from "react-icons/ri";
import { TbDeviceCctv } from "react-icons/tb";
import { GrUserPolice } from "react-icons/gr";
import { RiEarthquakeFill } from "react-icons/ri";
import { TbBuildingCircus } from "react-icons/tb";

const Amenities = () => {
  const dataAmenities = [
    { name: "Club House", icon: <MdWarehouse /> },
    { name: "Kids Play Area", icon: <GiKidSlide /> },
    { name: "Swimming Pool", icon: <MdPool /> },
    { name: "Open Space", icon: <LuHaze /> },
    { name: "Fire Fighting Systems", icon: <FaFireExtinguisher /> },
    { name: "Power Backup", icon: <SlEnergy /> },
    { name: "24 Hour Water Supply", icon: <FaHandHoldingWater /> },
    { name: "Car Parking", icon: <FaCar /> },
    { name: "Multipurpose Hall", icon: <HiHomeModern /> },
    { name: "Video Security", icon: <TbDeviceCctv /> },
    { name: "Lift", icon: <HiHomeModern /> },
    { name: "3 Tier Security", icon: <GrUserPolice /> },
    { name: "Religious Building", icon: <TbBuildingCircus /> },
    { name: "24X7 Security", icon: <Ri24HoursFill /> },
    { name: "Earthquake Resistant", icon: <RiEarthquakeFill /> },
  ];

  const [visibleAmenities, setVisibleAmenities] = useState(dataAmenities);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile view
        setVisibleAmenities(dataAmenities.slice(0, 14));
      } else {
        // Larger screens
        setVisibleAmenities(dataAmenities);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center bg-[#EAEAEA]">
      <div className="w-full flex flex-col sm:w-full md:w-full lg:w-4/5 xl:w-5/6 px-3 md:px-0 py-10">
        <div className="text-forheading flex justify-center">Amenities</div>
        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-6 sm:mt-5 mt-3">
          {visibleAmenities.map((item, index) => (
            <div
              key={index}
              className={`flex w-full sm:flex-col items-center gap-2 sm:pb-6 pb-2`}
            >
              <div
                className="flex items-center justify-center text-2xl text-[#384152] sm:p-3 p-2 sm:w-[90px] sm:h-[80px] h-[40px] sm:border-[2px] border-[1px]
                shadow-md sm:rounded-lg rounded-full border-[#384152]"
              >
                <div className="sm:text-[3rem] text-[1.5rem]">{item.icon}</div>
              </div>
              <div className=" sm:text-[16px] text-[10px] sm:font-normal font-semibold justify-center text-center max-w-[110px]">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
