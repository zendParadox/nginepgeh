import React from "react";
import Icon1 from "../assets/icon/icon-1.svg";
import Icon2 from "../assets/icon/icon-2.svg";
import Icon3 from "../assets/icon/icon-3.svg";
import HeroImage from "../assets/img/image-hero-section.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="hero-section-left-1">
        <h1 className="text-4xl font-bold text-[#152C5B] tracking-wide">
          Forget the busy work, start your next vacation
        </h1>
        <p className="mt-5 text-slate-500">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments. Your money can return, but your time
          is not. What are you waiting?
        </p>
        <div className="flex">
          <a
            href="/browse-by"
            className="mt-8 flex w-52 h-12 items-center justify-center rounded-xl text-lg font-medium text-white shadow-lg shadow-blue-200 bg-blue-700 text-center hover:bg-blue-800 hover:ring-2 ring-blue-400">
            Show Me Now
          </a>
        </div>

        <div className="grid grid-cols-3 mt-24">
          <div className="icon-1">
            <img src={Icon1} alt="" srcset="" />
            <h5 className="text-slate-400 mt-3">
              <span className="font-semibold text-slate-600">80,409 </span>
              Travellers
            </h5>
          </div>
          <div className="icon-1">
            <img src={Icon2} alt="" srcset="" />
            <h5 className="text-slate-400 mt-3">
              <span className="font-semibold text-slate-600">861 </span>
              Treasure
            </h5>
          </div>
          <div className="icon-1">
            <img src={Icon3} alt="" srcset="" />
            <h5 className="text-slate-400 mt-3">
              <span className="font-semibold text-slate-600">1,492 </span>
              Cities
            </h5>
          </div>
        </div>
      </div>

      <div className="hero-section-right mt-10">
        <div className="flex justify-end">
          <div className="w-[32rem] h-[27rem] rounded-xl rounded-tl-[150px] border-2 relative">
            <div className="flex">
              <div className="relative -top-10 -left-10">
                <img
                  src={HeroImage}
                  alt=""
                  className="w-full h-full bg-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
