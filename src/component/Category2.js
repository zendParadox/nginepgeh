import React from "react";
import Hlr1 from "../assets/img/hlr-1.jpg";
import Hlr2 from "../assets/img/hlr-2.jpg";
import Hlr3 from "../assets/img/hlr-3.jpg";
import Hlr4 from "../assets/img/hlr-4.jpg";
import Hlr5 from "../assets/img/hlr-5.jpg";

const Category2 = () => {
  return (
    <div class="">
      <div class="container">
        <h3 class="font-poppins font-semibold text-2xl text-slate-700">
          Hotels with living room
        </h3>
      </div>
      <div class="card container">
        <div class="overflow-auto h-80 scroll flex gap-8">
          <div class="">
            <div class="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hlr1}
                alt=""
                srcset=""
                class="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div class="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div class="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
          <div class="">
            <div class="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hlr2}
                alt=""
                srcset=""
                class="rounded-lg object-cover w-full h-full"
              />
              <div class="absolute top-0 right-0 p-2 py-1 px-5 rounded-bl-2xl rounded-tr-lg bg-pink-500 text-white">
                <p class="text-lg font-extralight">
                  <span class="font-semibold">Popular</span> Choise
                </p>
              </div>
            </div>
            <div class="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div class="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
          <div class="">
            <div class="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hlr3}
                alt=""
                srcset=""
                class="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div class="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div class="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
          <div class="">
            <div class="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hlr4}
                alt=""
                srcset=""
                class="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div class="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div class="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
          <div class="">
            <div class="w-[263px] h-[200px] mt-5 relative">
              <img
                src={Hlr5}
                alt=""
                srcset=""
                class="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div class="text-xl tracking-widest mt-3 text-slate-700">
              Hotel Ciputra
            </div>
            <div class="text-sm tracking-wider text-slate-700">
              Jakarta, Indonesia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
