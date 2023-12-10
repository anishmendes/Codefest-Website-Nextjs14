import React from "react";
import Image from "next/image";
import { ImMagnet } from "react-icons/im";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="hidden sm:hidden md:hidden lg:block  h-auto w-full bg-black overflow-hidden">
          <div className="flex flex-row justify-between">
            <div>
              <div className=" h-[100px] w-[538px] mt-[23px] ml-[65px]">
                <p className="text-[18px] font-normal text-white">
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    SITE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    HOME
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    BLOGS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    ABOUT
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    SERVICE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    CONTACT
                  </span>{" "}
                </p>
                <p className="text-[18px] font-normal text-white mt-[10px]">
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    BUSINESS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    PROJECT
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    OUR
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    TEAMS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    SERVICE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    CUSTOMERS
                  </span>{" "}
                </p>
              </div>

              <div className=" flex gap-3 flex-row  h-auto w-[200px] mt-[-20px] ml-[58px]">
                <Image
                  src={"/Facebook.png"}
                  height={36}
                  width={36}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/twitter.png"}
                  height={36}
                  width={36}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/instagram.png"}
                  height={36}
                  width={36}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/linkedin.png"}
                  height={36}
                  width={36}
                  className="hover:cursor-pointer"
                  alt=" img"
                />
                <Image
                  src={"/google.png"}
                  height={36}
                  width={36}
                  alt="img"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap	 ">
              <div className="  w-auto  h-auto mt-[23px] ml-[150px] ">
                <p
                  className="text-white text-right hover:text-[#ff9000] hover:cursor-pointer
            "
                >
                  GET IN TOUCH
                </p>
                <p className="font-normal text-white text-[18px] text-right mt-[10px]">
                  Purnima Bhawan Panthigalli, Pokhara, Gandaki 33700 Nepal
                </p>
                <p className="font-normal text-white text-[18px] text-right mt-[10px]">
                  +977 9866006169 | mail@codefest.app
                </p>
              </div>
            </div>
            <div className=" h-[67px] w-[67px] mr-[20px] mt-[30px] ">
              <Image alt="img" src={"/call.png"} height={67} width={67} />
            </div>
          </div>

          <div className="mt-[30px] h-[50px] w-full bottom-[0px] text-center">
            <p className="text-[18px] font-normal leading-[34px] text-white">
              Copyright © 2023 CodeFest | Innovation meets Speed. | Powered by
              CodeFest | Innovation meets Speed.
            </p>
          </div>
        </div>
      </footer>
      {/* --------------------------------------------------------------------------- */}
      <footer id="contact1">
        <div className="hidden sm:hidden md:block lg:hidden  h-auto w-full bg-black overflow-hidden">
          <div className="flex flex-row justify-between ">
            <div>
              <div className=" h-[100px] w-auto mt-[13px] ml-[15px]">
                <p className="text-[10px] font-normal text-white">
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    SITE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    HOME
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    BLOGS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    ABOUT
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    SERVICE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    CONTACT
                  </span>{" "}
                </p>
                <p className="text-[10px] font-normal text-white mt-[10px]">
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    BUSINESS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    PROJECT
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    OUR
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    TEAMS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    SERVICE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    CUSTOMERS
                  </span>{" "}
                </p>
              </div>

              <div className=" flex gap-3 flex-row  h-auto w-[200px] mt-[-20px] ml-[10px]">
                <Image
                  src={"/Facebook.png"}
                  height={10}
                  width={20}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/twitter.png"}
                  height={10}
                  width={20}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/instagram.png"}
                  height={10}
                  width={20}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/linkedin.png"}
                  height={10}
                  width={20}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/google.png"}
                  height={10}
                  width={20}
                  alt="img"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>

            <div className=" mr-[10px] w-auto  h-auto mt-[10px] flex flex-row justify-between gap-[10px]">
              <div>
                {" "}
                <p
                  className="text-white text-[10px] text-right hover:text-[#ff9000] hover:cursor-pointer
            "
                >
                  GET IN TOUCH
                </p>
                <p className="font-normal text-white text-[10px] text-right mt-[10px]">
                  Purnima Bhawan Panthigalli, Pokhara, Gandaki 33700 Nepal
                </p>
                <p className="font-normal text-white text-[10px] text-right mt-[10px]">
                  +977 9866006169 | mail@codefest.app
                </p>
              </div>

              <div className="h-auto  ">
                <Image alt="img" src={"/call.png"} height={20} width={20} />
              </div>
            </div>
          </div>

          <div className="mt-[30px] h-[50px] w-full bottom-[0px] text-center">
            <p className="text-[15px] font-normal leading-[34px] text-white">
              Copyright © 2023 CodeFest | Innovation meets Speed. | Powered by
              CodeFest | Innovation meets Speed.
            </p>
          </div>
        </div>
      </footer>
      {/* ==================================================================== */}
      <footer id="contact2">
        <div className=" sm:block md:hidden lg:hidden  h-auto w-full bg-black overflow-hidden">
          <div className="flex flex-row justify-between">
            <div>
              <div className=" h-[100px] w-auto mt-[10px] ml-[15px]">
                <p className="text-[12px] font-normal text-white">
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    SITE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    HOME
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    BLOGS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    ABOUT
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    SERVICE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    CONTACT
                  </span>{" "}
                </p>
                <p className="text-[12px] font-normal text-white mt-[10px]">
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    BUSINESS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    PROJECT
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    OUR
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    TEAMS
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    SERVICE
                  </span>{" "}
                  |
                  <span className="hover:text-[#ff9000] hover:cursor-pointer">
                    {" "}
                    CUSTOMERS
                  </span>{" "}
                </p>
              </div>

              <div className=" flex gap-3 flex-row  h-auto w-[200px] mt-[10px] ml-[10px]">
                <Image
                  src={"/Facebook.png"}
                  height={10}
                  alt="img"
                  width={20}
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/twitter.png"}
                  height={10}
                  width={20}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/instagram.png"}
                  height={10}
                  alt="img"
                  width={20}
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/linkedin.png"}
                  height={10}
                  width={20}
                  alt="img"
                  className="hover:cursor-pointer"
                />
                <Image
                  src={"/google.png"}
                  height={10}
                  alt="img"
                  width={20}
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap	 ">
              <div className="  w-auto  h-auto mt-[10px]  ">
                <p
                  className="text-white text-[12px] text-right hover:text-[#ff9000] hover:cursor-pointer
            "
                >
                  GET IN TOUCH
                </p>
                <p className="font-normal text-white text-[12px] text-right mt-[10px]">
                  Purnima Bhawan Panthigalli, Pokhara, Gandaki 33700 Nepal
                </p>
                <p className="font-normal text-white text-[12px] text-right mt-[10px]">
                  +977 9866006169 | mail@codefest.app
                </p>
              </div>
            </div>
            <div className=" h-[67px] w-[67px] mr-[10px] ml-[10px] mt-[30px] ">
              <Image alt="img" src={"/call.png"} height={27} width={27} />
            </div>
          </div>

          <div className="mt-[30px] h-[50px] w-full bottom-[0px] text-center">
            <p className="text-[10px] font-normal leading-[14px] text-white">
              Copyright © 2023 CodeFest | Innovation meets Speed. | Powered by
              CodeFest | Innovation meets Speed.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
