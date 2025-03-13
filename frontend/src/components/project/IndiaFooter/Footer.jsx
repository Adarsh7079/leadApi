import React, { useState } from "react";
import Rera from "./Rera";
import Logo from "/Logo.png";
import { Phone, MapPin } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import the Lucide icons
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const [readMore, setReadMore] = useState(false);
  // Handling Toggle Function
  const handleToggle = () => {
    setReadMore(!readMore);
  };
  const projects = [
    { name: "M3M Golf Hills", link: "/m3m-golf-hills" },
    { name: "M3M Mansion", link: "/m3m-mansion" },
    { name: "M3M Altitude", link: "/m3m-altitude" },
    { name: "M3M Opus", link: "/m3m-opus" },
    { name: "M3M Crown", link: "/m3m-crown" },
    { name: "M3M Capital", link: "/m3m-capital" },
    { name: "M3M Antalya", link: "/m3m-antalya" },
    { name: "M3M My Den", link: "/m3m-my-den" },
    { name: "DLF Privana West", link: "/dlf-privana-west" },
    { name: "DLF Privana North", link: "/dlf-privana-north" },
    { name: "DLF Privana South", link: "/dlf-privana-south" },
    { name: "DLF Dahlias", link: "/dlf-dahlias" },
    { name: "DLF The Arbour", link: "/dlf-the-arbour" },
    { name: "Smartworld The Edition", link: "/smartworld-the-edition" },
    { name: "Smartworld One DXP", link: "/smartworld-one-dxp" },
    { name: "Smartworld SkyArc", link: "/smartworld-skyarc" },
    { name: "Whitland The Aspen", link: "/whitland-the-aspen" },
    { name: "Whiteland Urban Resort", link: "/whiteland-urban-resort" },
    { name: "Conscient Parq", link: "/conscient-parq" },
    { name: "Max Estate 360", link: "/max-estate-360" },
    { name: "Signature Global Titanium", link: "/signature-global-titanium" },
    { name: "Silverglades Legacy", link: "/silverglades-legacy" },
    { name: "Silverglades 59", link: "/silverglades-59" },
    { name: "TARC Ishva", link: "/tarc-ishva" },
    { name: "Sobha Sector 63", link: "/sobha-sector-63" },
    { name: "Eldeco Fairway Reserve", link: "/eldeco-fairway-reserve" },
    { name: "Birla Estate", link: "/birla-estate" },
    { name: "4S The Aurum", link: " /4s-the-aurum" },
  ];

  const developers = [
    { name: "M3M India", link: "/developers/m3m" },
    { name: "DLF India", link: "/developers/dlf" },
    { name: "Smartworld Developers", link: "/developers/smartworld" },
    { name: "Whiteland Corporation", link: "/developers/whiteland" },
    { name: "Conscient Infrastructure", link: "/developers/conscient" },
    { name: "Max Estates", link: "/developers/max-estates" },
    { name: "Signature Global", link: "/developers/signature-global" },
    { name: "Silverglades", link: "/developers/silverglades" },
    { name: "Tarc Development", link: "/developers/tarc" },
    { name: "4S Developer", link: "/developers/4s" },
    { name: "Sobha Realty", link: "/developers/sobha" },
    { name: "Eldeco", link: "/developers/eldeco" },
    { name: "Birla Estates", link: "/developers/birla" },
    { name: "Godrej Properties", link: "/developers/godrej" },
    { name: "Shapoorji Pallonji Group", link: "/developers/shapoorji-pallonji" },
    { name: "Mahindra Lifespaces", link: "/developers/mahindra-lifespaces" },
  ];

  const usefulLinks = [
    { name: "Home", link: "/" },
    { name: "Property", link: "/trending-projects" },
    { name: "Developers", link: "/developers" },
    { name: "Location", link: "/location" },
    { name: "News", link: "/news-updates" },
    { name: "Careers", link: "/careers" },
  ];

  const ListSection = ({ title, items }) => (
    <div className="">
      <div className=" flex items-center gap-2">
        <h4 className="border-l-[5px] border-[#000000] pl-2 text-[16px] font-bold">
          {title}
        </h4>
      </div>
      <div className="overflow-y-auto max-h-[100px] no-scrollbar">
        <ul className="list-disc list-outside flex gap-x-7 flex-wrap">
          {items.map(({ name, link }, index) => (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[15px] text-black hover:text-black"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const ContactInfo = ({ icon: Icon, title, details }) => (
    <div className="flex h-[100px] gap-3 items-center">
      <div className="w-[50px] h-[50px] bg-gray-700 rounded-full flex items-center justify-center">
        <Icon className="text-white w-[28px] h-[28px]" />
      </div>
      <div className="max-w-[200px]">
        <h2 className="text-[20px]  text-[#374151] font-bold">{title}</h2>
        {typeof details === "string" ? (
          <p>{details}</p>
        ) : (
          <div className="flex flex-col">
            {details.map((detail, index) => (
              <a
                key={index}
                href={detail.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline  text-[11px] text-black hover:text-black"
              >
                {detail.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const LocationInfo = ({ icon: Icon, title, details }) => (
    <div className="flex h-[100px] gap-3 items-center">
      <div className="w-[50px] h-[50px] bg-gray-700 rounded-full flex items-center justify-center">
        <Icon className="text-white w-[28px] h-[28px]" />
      </div>
      <div className="max-w-[200px]">
        <h2 className="text-[20px] text-[#374151]  font-bold">{title}</h2>
        {typeof details === "string" ? (
          <p className=" text-[11px]">{details}</p>
        ) : (
          <div className="flex flex-col">
            <p className="no-underline  text-[5px] text-black hover:text-black"></p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-14 px-2 lg:w-4/5 xl:w-5/6">
        {/* Footer Sections */}
        <div className=" w-full flex justify-end">
          <button
            className=" flex items-center justify-center px-2 gap-2 "
            onClick={handleToggle}
          >
            {readMore ? (
              <>
                {/* Reducing Content */}
                {/* <ChevronUp className="w-[30px] h-[30px]" /> */}
                <div>...</div>
              </>
            ) : (
              <>
                {/* Increase Div Size */}
                {/* <ChevronDown className="w-[30px] h-[30px]" /> */}
                <div>...</div>
              </>
            )}
          </button>
        </div>
        <div
          className={`transition-all duration-300 no-scrollbar ${
            readMore ? "h-full overflow-y-hidden" : "h-[0px] overflow-hidden"
          }`}
        >
          <div className=" flex">
            <div>
              <ListSection title="Top Projects" items={projects} />
              <ListSection title="Top Developers" items={developers} />
              <ListSection title="Useful Links" items={usefulLinks} />
            </div>
          </div>
          {/* <div>
            <p className="border-l-[5px] border-[#000000] pl-2 text-[#374151] text- font-bold">
              RERA
            </p>
            <Rera />
          </div> */}
        </div>

        {/* Footer Contact and Logo */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo */}
          <div className="flex h-[100px]">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-[200px] h-[100px]" />
            </Link>
          </div>

          {/* Location */}
          <LocationInfo
            icon={MapPin}
            title="Location"
            details="610-613, 6th Floor Vipul Trade Centre, Sector 48, Gurugram, Haryana 122018"
          />

          {/* Contact */}
          <ContactInfo
            icon={Phone}
            title="Contact Us"
            details={[
              { link: "tel:+919999416316", text: "+91 9999 416 316" },
              {
                link: "mailto:info@propertystation.in",
                text: "info@propertystation.in",
              },
            ]}
          />
          {/* Follow us */}
          <div className=" mt-2 max-w-[400px] flex flex-col justify-center px-12 ">
            <p className="text-[20px] text-[#374151] font-bold">Follow Us</p>
            {/* Social Media Icons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://twitter.com/Prop_Station"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center"
              >
                <Twitter className="text-white w-[20px] h-[20px]" />
              </a>
              <a
                href="https://www.instagram.com/officialpropertystation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] bg-gray-700 rounded-full hover:bg-gray-800 flex items-center justify-center"
              >
                <Instagram className="text-white w-[16px] h-[16px]" />
              </a>
              <a
                href="https://www.linkedin.com/company/propertystation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center"
              >
                <Linkedin className="text-white w-[16px] h-[16px]" />
              </a>
              <a
                href="https://www.facebook.com/propertystationfb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center"
              >
                <Facebook className="text-white w-[16px] h-[16px]" />
              </a>
              <a
                href="https://www.youtube.com/@PropertyStationOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center"
              >
                <Youtube className="text-white w-[16px] h-[16px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
