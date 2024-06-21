import { GrFormNextLink } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";

const Hero = () => {
  const text = "SHOWREEL SHOWREEL SHOWREEL";
  const characters = text.split("");
  return (
    <div className=" pt-72 bg-opacity-15  bg-gradient-to-b from-transparent to-black ">
      <div className="max-w-[1200px] mx-auto ">
        <h1 className="text-white font-bold text-5xl">
          We offer digital <br /> solutions
        </h1>
        <h2 className="text-white font-bold text-2xl mt-6 ">
          IN ANY DIFFICULTY
        </h2>
        <div className="flex items-center gap-9 mt-16 pb-28">
          <div className="hover:bg-[#00ad9c] rounded-lg cursor-pointer group bg-[#319188] border-[#319188] border-2 flex items-center gap-3 py-3 px-5">
            <button className="text-white font-bold ">Portfolio</button>
            <div className="p-1 bg-[#3dc6bd] rotate-[-45deg] duration-200 group-hover:rotate-0 rounded-full">
              <GrFormNextLink className="text-white text-xl" />
            </div>
          </div>
          <div className="hover:bg-[#00ad9c] rounded-lg cursor-pointer  bg-transparent border-2 border-gray-400 flex items-center gap-5 py-3 px-7">
            <button className="text-white font-bold">Call</button>
            <div className="p-1 bg-[#3dc6bd]  duration-200  rounded-full">
              <FiPhoneCall className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-opacity-70 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-[1200px] mx-auto  ">
          <div className="relative flex items-center justify-center w-52 h-52 mx-auto hover:scale-110 duration-200 ">
            <div className="absolute w-full h-full flex items-center justify-center">
              <FaPlay className="text-white text-5xl" />
            </div>
            <div className="absolute w-full h-full animate-spin-slow flex items-center justify-center">
              {characters.map((char, index) => {
                const angle = (index / characters.length) * 360;
                return (
                  <span
                    key={index}
                    className="absolute text-lg  text-[#ffffff99] font-bold"
                    style={{
                      transform: `rotate(${angle}deg) translate(0, -90px) rotate(-${angle}deg)`,
                      transformOrigin: "center center",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 rounded-full bg-[#484848] fixed  right-10 bottom-10">
        <RiMessage3Line className="text-white font-bold text-3xl" />
      </div>
    </div>
  );
};

export default Hero;
