import React from "react";
import Hwb1 from "../assets/img/hwb-1.jpg";
import Hwb2 from "../assets/img/hwb-2.jpg";
import Hwb3 from "../assets/img/hwb-3.jpg";
import Hwb4 from "../assets/img/hwb-4.jpg";
import Hwb5 from "../assets/img/hwb-5.jpg";

const Category1 = () => {
  return (
    <div className="">
      <div className="container">
        <h3 className="font-poppins font-semibold text-2xl text-slate-700">
          Houses with backyard
        </h3>
      </div>
      <div className="card container">
        <div className="overflow-auto h-80 flex gap-8">
          <div className="">
            <div className="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hwb1}
                alt=""
                srcset=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div className="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
          <div className="">
            <div className="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hwb2}
                alt=""
                srcset=""
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute top-0 right-0 p-2 py-1 px-5 rounded-bl-2xl rounded-tr-lg bg-pink-500 text-white">
                <p className="text-lg font-extralight">
                  <span className="font-semibold">Popular</span> Choise
                </p>
              </div>
            </div>
            <div className="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div className="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
          <div className="">
            <div className="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hwb3}
                alt=""
                srcset=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div className="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
          <div className="">
            <div className="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hwb4}
                alt=""
                srcset=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div className="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
          <div className="">
            <div className="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hwb5}
                alt=""
                srcset=""
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div className="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category1;
