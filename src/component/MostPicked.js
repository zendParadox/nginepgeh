import React from "react";
import MostPicked1 from "../assets/img-nginepgeh/photo-1.jpg";
import MostPicked2 from "../assets/img-nginepgeh/photo-2.jpg";
import MostPicked3 from "../assets/img-nginepgeh/photo-3.jpg";
import MostPicked4 from "../assets/img-nginepgeh/photo-4.jpg";

const MostPicked = () => {
  return (
    <div className="">
      <div class="">
        <h3 class="font-poppins font-semibold text-2xl text-slate-700">
          Most Picked
        </h3>
      </div>
      <div class="container w-full flex flex-wrap justify-center">
        <div class="">
          <div class="grid grid-cols-3 gap-24">
            <div class="mt-5 w-[405px] h-[430px] overflow-hidden rounded-lg relative">
              <img
                src={MostPicked1}
                alt=""
                class="object-cover w-full h-full"
              />
              <div class="absolute mb-8 bottom-0 left-0 py-2 px-10 rounded-r-2xl bg-white bg-opacity-20 text-white">
                <h3 class="text-xl tracking-widest">Yellow Sun Hotel</h3>
                <p class="text-sm font-extralight tracking-widest">
                  Anyer, Indonesia
                </p>
              </div>
              <div class="absolute top-0 right-0 p-2 py-2 px-10 rounded-bl-2xl bg-pink-500 text-white">
                <p class="text-lg font-extralight">
                  <span class="font-semibold">$50</span> per night
                </p>
              </div>
            </div>

            <div class="grid grid-rows-2 gap-8 justify-center">
              <div class="mt-5 w-[405px] h-[200px] rounded-lg overflow-hidden relative">
                <img
                  src={MostPicked2}
                  alt=""
                  class="object-cover w-full h-full"
                />
                <div class="absolute bottom-0 left-0 py-2 px-10 rounded-tr-2xl bg-white bg-opacity-20 text-white hover:bg-opacity-50 hover:text-slate-900">
                  <h3 class="text-xl tracking-widest">Yellow Sun Hotel</h3>
                  <p class="text-sm font-extralight tracking-widest">
                    Anyer, Indonesia
                  </p>
                </div>
                <div class="absolute top-0 right-0 p-2 py-2 px-10 rounded-bl-2xl bg-pink-500 text-white">
                  <p class="text-lg font-extralight">
                    <span class="font-semibold">$50</span> per night
                  </p>
                </div>
              </div>
              <div class="w-[405px] h-[200px] rounded-lg relative overflow-hidden">
                <img
                  src={MostPicked1}
                  alt=""
                  class="object-cover w-full h-full"
                />
                <div class="absolute bottom-0 left-0 py-2 px-10 rounded-tr-2xl bg-white bg-opacity-20 text-white hover:bg-opacity-50 hover:text-slate-900">
                  <h3 class="text-xl tracking-widest">Yellow Sun Hotel</h3>
                  <p class="text-sm font-extralight tracking-widest">
                    Anyer, Indonesia
                  </p>
                </div>
                <div class="absolute top-0 right-0 p-2 py-2 px-10 rounded-bl-2xl bg-pink-500 text-white">
                  <p class="text-lg font-extralight">
                    <span class="font-semibold">$50</span> per night
                  </p>
                </div>
              </div>
            </div>
            <div class="grid grid-rows-2 gap-8 justify-end">
              <div class="mt-5 w-[405px] h-[200px] rounded-lg relative overflow-hidden">
                <img
                  src={MostPicked3}
                  alt=""
                  class="object-cover w-full h-full"
                />
                <div class="absolute bottom-0 left-0 py-2 px-10 rounded-tr-2xl bg-white bg-opacity-20 text-white hover:bg-opacity-50 hover:text-slate-900">
                  <h3 class="text-xl tracking-widest">Yellow Sun Hotel</h3>
                  <p class="text-sm font-extralight tracking-widest">
                    Anyer, Indonesia
                  </p>
                </div>
                <div class="absolute top-0 right-0 p-2 py-2 px-10 rounded-bl-2xl bg-pink-500 text-white">
                  <p class="text-lg font-extralight">
                    <span class="font-semibold">$50</span> per night
                  </p>
                </div>
              </div>
              <div class="w-[405px] h-[200px] rounded-lg relative overflow-hidden">
                <img
                  src={MostPicked4}
                  alt=""
                  class="object-cover w-full h-full"
                />
                <div class="absolute bottom-0 left-0 py-2 px-10 rounded-tr-2xl bg-white bg-opacity-20 text-white hover:bg-opacity-50 hover:text-slate-900">
                  <h3 class="text-xl tracking-widest">Yellow Sun Hotel</h3>
                  <p class="text-sm font-extralight tracking-widest">
                    Anyer, Indonesia
                  </p>
                </div>
                <div class="absolute top-0 right-0 p-2 py-2 px-10 rounded-bl-2xl bg-pink-500 text-white">
                  <p class="text-lg font-extralight">
                    <span class="font-semibold">$50</span> per night
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPicked;
