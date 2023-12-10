import React from "react";
import Navbar from "./navbar";
export default function Rapidapp() {
  return (
    <>
      {" "}
      <div>
        <div className="hidden md:block lg:block sm:hidden bg-cover bg-center  bg-[url('/bg1.png')] w-full h-screen overflow-hidden  ">
          <Navbar />
          <div className="flex ">
            <div className="pl-[66px] text-white  mt-[150px] h-[288px] w-[447px] ">
              <h1 className=" text-10 text-4xl h-[65px] w-[868px] font-clash-display">
                Rapid App Development
              </h1>
              {/* 288 and 447 */}
              <p className="max-w-[340px] text-[18px] text-justify leading-[21.78px] font-inter">
                Unlock your app’s potential with CodeFest – Offering
                lightning-fast Rapid App Development services. Turn your ideas
                into reality with our expert team and accelerate your business
                success today!
              </p>

              <p className="bg-[#FF6B00] h-[4px] w-2/5 mt-[20px]"></p>
            </div>
            <div className="w-[370px] h-[420px]  justify-center  mt-10 lg:ml-5 xl:ml-12">
              <img src="../bulb.png" />
            </div>
          </div>

          <div className="text-center flex flex-col mt-8">
            <div>
              <h className="text-[64px] font-bold  font-zen-tokyo-zoo text-[#FF6B00] leading-[76.8px]">
                CodeFest
              </h>
              <h1 className="text-[48px] text-white leading-[59.04px] font-clash-display">
                Innovation
              </h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------- */}
      <div className="hidden md:hidden lg:hidden sm:hidden bg-cover bg-center bg-[url('/bg1.jpg')] w-full h-[600px] overflow-hidden bg-[rgb(22,22,22)]">
        <Navbar />
        <div className="flex flex-row justify-between text-white mt-[250px] h-auto w-full pl-[10px]">
          <div className="h-[100px] w-[300px]">
            <h1 className="  font-bold text-[20px]] h-[60px] w-[868px] my-auto  text-justify">
              Rapid App Development
            </h1>
            <p>Unlock your app’s potential with CodeFest.</p>
            <p className="bg-[#FF6B00] h-[4px] w-[265px] mt-[20px]"></p>
          </div>
          <div className="my-auto mr-[20px]">
            <h className="text-[18px] font-bold text-white">CodeFest</h>
            <h1 className="text-[20px] text-white">Innovation</h1>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------- */}
      <div className="md:hidden lg:hidden sm:block bg-cover bg-center bg-[url('/bg1.jpg')] w-full h-[500px] overflow-hidden bg-[rgb(22,22,22)]">
        <Navbar />
        <div className="flex flex-row justify-between text-white mt-[290px] h-auto w-full pl-[10px]">
          <div className="h-[70px] w-auto">
            <h1 className="  font-bold text-[15px] h-[30px] w-auto my-auto  text-justify">
              Rapid App Development
            </h1>
            <p className="text-[10px]">
              Unlock your app’s potential with CodeFest.
            </p>
            <p className="bg-[#FF6B00] h-[4px] w-[220px] mt-[10px]"></p>
          </div>
          <div className="mr-[5px]">
            <h className="text-[16px] font-bold text-white">CodeFest</h>
            <h1 className="text-[15px] text-white">Innovation</h1>
          </div>
        </div>
      </div>
    </>
  );
}
