import React from "react";
import Navbar from "../components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="w-full bg-[#1f1f21] pt-20">
        <div className="max-w-[1200px] w-full flex flex-col items-center justify-center mx-auto py-20">
          <div className="w-full items-center justify-start">
            <div className="flex items-center justify-start gap-2">
              <p className="text-[16px] text-[#00A795]">OUR</p>
              <div className="w-[32px] border-[#ffffff] opacity-25 border"></div>
            </div>
            <h1 className=" text-[64px] text-white">Services</h1>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                Web Development
              </h1>
              <p className="text-gray-500 pt-2 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                We develop websites with the high quality, from corporate
                websites to web applications
              </p>
            </div>
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                Mobile apps
              </h1>
              <p className="w-[380px] pt-2 text-gray-500 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                Development and technical support of mobile applications of any
                complexity
              </p>
            </div>
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                UI&UX
              </h1>
              <p className="w-[380px] pt-2 text-gray-500 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                Developing a project MindMap and designing it with the optimal
                solution based on its architecture
              </p>
            </div>
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                Media production
              </h1>
              <p className="text-gray-500 pt-2 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                Professional preparation of 2D / 3D animation, project
                presentation, advertising, video and other media resources.
              </p>
            </div>
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                CRM Systems
              </h1>
              <p className="w-[380px] pt-2 text-gray-500 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                Automation of business and processes, development of electronic
                management systems that reduce paper-work by 100%
              </p>
            </div>
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                Branding
              </h1>
              <p className="w-[380px] pt-2 text-gray-500 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                Developing a creative and unique logo for your project and
                create its branding guidelines
              </p>
            </div>
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                Production of games
              </h1>
              <p className="w-[380px] pt-2 text-gray-500 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                Development of games of any subject and complexity,
                corresponding to the international level.
              </p>
            </div>
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                Artificial intelligence
              </h1>
              <p className="w-[380px] pt-2 text-gray-500 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                Development of intelligent computer systems with the
                capabilities of human intelligence.
              </p>
            </div>
            <div
              className="p-10 bg-[#242426] rounded-[16px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h1 className="text-white text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3">
                Cybersecurity
              </h1>
              <p className="w-[380px] pt-2 text-gray-500 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                Find and fix vulnerabilities in networks, devices, code, and
                data.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
<Navbar />;

export default ServicesPage;
