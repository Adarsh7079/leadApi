import Banner from "../../components/project/share/Banner";
import Overview from "../../components/project/share/Overview";
import Pricing from "../../components/project/share/Pricing"; // Missing import
// import Navbar from "../../../../components/Navbar/Navbar";
import { projectsm3m } from "../../data/projects/M3M/data";
import Gallery from "../../components/project/share/Gallery";
import Location from "../../components/project/share/Location";
import Highlights from "../../components/project/share/Highlights";
import SiteVisitBanner from "../../components/project/share/SiteVisitBanner";
import FloorPlans from "../../components/project/share/FloorPlans";
import Amenities from "../../components/project/share/Amenities";
import { Helmet } from "react-helmet";
// import WhatsAppWidget from "../../../../components/Navbar/Whatsapp";
import Faq from "../../components/project/share/Faq";
import SimilarProject from "../../components/project/share/SimilarProject";
// import Main_Footer from "../../../../components/footer/IndiaFooter/Main_Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar/Navbar";
import Main_Footer from "./IndiaFooter/Main_Footer";

export const ProjectPage = () => {
  return (
    <>
      <div className="">
      <Helmet>
<title>
{" "}
M3M Altitude Sector 65, Gurgaon – Ultra-Luxury Residences
</title>
<meta
name="description"
content="Explore M3M Altitude in Sector 65, Gurgaon – a premium residential project offering high-end apartments with world-class amenities."
/>
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://propertystation.in/m3m-altitude-sector-65-gurugram" />
</Helmet>

        {/* <WhatsAppWidget
          whatsappdata={projectsm3m.m3maltitude.whatsapp_m3maltitude}
        /> */}
        <Toaster position="top-roght" reverseOrder={false}/>
        {/* <Navbar /> */}
        <Navbar/>
        <div className="mt-20">
          <Banner
            bannerDesktopImage={
              projectsm3m.m3maltitude.bannerdata_m3maltitude
                .bannerDesktopImage
            }
            bannerMobileImage={
              projectsm3m.m3maltitude.bannerdata_m3maltitude
                .bannerMobileImage
            }
            data={projectsm3m.m3maltitude.bannerdata_m3maltitude.data}
            formData={projectsm3m.m3maltitude.form_data}
          />
          <Overview
            overviewData={projectsm3m.m3maltitude.overview_m3maltitude}
            stripdata={
              projectsm3m.m3maltitude.overview_m3maltitude.stripdata
            }
          />
          <SiteVisitBanner
            image={projectsm3m.m3maltitude.sitevisit_m3maltitude.image}
            formData={projectsm3m.m3maltitude.form_data}
          />
          <Pricing
            pricingData={projectsm3m.m3maltitude.pricing_m3maltitude}
            formData={projectsm3m.m3maltitude.form_data}
          />
          <FloorPlans
            floorPlans={projectsm3m.m3maltitude.floor_plan_m3maltitude}
            formData={projectsm3m.m3maltitude.form_data}

          />
          <Highlights
            hightlightData={projectsm3m.m3maltitude.highlights_m3maltitude}
            formData={projectsm3m.m3maltitude.form_data}

          />
          <Amenities />
          <Location
            location={projectsm3m.m3maltitude.location_m3maltitude}
          />
         <Main_Footer/>
        </div>
      </div>
    </>
  );
};
