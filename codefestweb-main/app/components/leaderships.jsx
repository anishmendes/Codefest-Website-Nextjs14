import React from "react";
import Image from "next/image";

export default function Leaderships() {
  return (
    <>
      <div className="hidden sm:hidden md:hidden lg:block">
        <div className=" h-[753px] w-full overflow-hidden bg-[#161616]">
          <div className="h-[80px] w-full flex flex-col text-white ">
            <h className="font-bold text-[40px] text-center">
              MEET OUR LEADERSHIP
            </h>
            <p className="text-[18px] font-normal text-center mt-[10px]">
              At CodeFest, we’re more than just a team of developers – we’re a
              family.
            </p>
          </div>
          <div className="h-[334px] w-full flex flex-row gap-7 mt-[60px]  items-center justify-center	">
            <div className="h-[334px] w-[281px] bg-[#D9D9D9] bg-opacity-[0.03]	">
              <Image
                alt="img"
                src={"/a.jpg"}
                height={228}
                width={236}
                className="mx-auto mt-[20px]"
              />
              <div className=" text-white mx-auto h-[12px] w-[281px] ">
                <p className="font-normal text-[18px] mt-[5px] text-center ">
                  {" "}
                  AAYUSH POUDEL{" "}
                </p>
                <p className="font-normal text-[12px] mt-[5px] text-center">
                  Backend Developer
                </p>
              </div>
            </div>
            <div className="h-[334px] w-[281px] bg-[#D9D9D9] bg-opacity-[0.03]	">
              <Image
                alt="img"
                src={"/b.jpg"}
                height={228}
                width={236}
                className="mx-auto mt-[20px]"
              />
              <div className=" text-white mx-auto h-[12px] w-[281px]">
                <p className="font-normal text-[18px] mt-[5px] text-center">
                  {" "}
                  AASHISH BIJUKCHHEE{" "}
                </p>
                <p className="font-normal text-[12px] mt-[5px] text-center">
                  CEO{" "}
                </p>
              </div>
            </div>
            <div className="h-[334px] w-[281px] bg-[#D9D9D9] bg-opacity-[0.03]	">
              <Image
                alt="img"
                src={"/c.jpg"}
                height={228}
                width={236}
                className="mx-auto mt-[20px]"
              />
              <div className=" text-white mx-auto h-[12px] w-[281px]">
                <p className="font-normal text-[18px] mt-[5px] text-center">
                  {" "}
                  Deepace Bhattarai{" "}
                </p>
                <p className="font-normal text-[12px] mt-[5px] text-center">
                  Backend Frontend{" "}
                </p>
              </div>
            </div>
            <div className="h-[334px] w-[281px] bg-[#D9D9D9] bg-opacity-[0.03]	">
              <Image
                alt="img"
                src={"/d.jpg"}
                height={228}
                width={236}
                className="mx-auto mt-[20px] "
              />
              <div className=" text-white mx-auto h-[12px] w-[281px]">
                <p className="font-normal text-[18px] mt-[5px] text-center">
                  {" "}
                  SANTOSH PHAIJU
                </p>
                <p className="font-normal text-[12px] mt-[5px] text-center">
                  Senior Designer{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-center  text-white mt-[50px] h-[34px] items-center justify-center">
            <h className="font-normal text-[28px] leading-[33.9px]">
              Would you like to start a project with us?
            </h>{" "}
          </div>
          <div className="items-center justify-center w-full h-[90px]">
            <p className=" h-[88px] w-full font-normal text-[18px]  text-center leading-[34px] text-white">
              At CodeFest, we’re here to help bring your app development ideas
              to life! Whether you’re looking to develop a new app or need
              assistance with an existing one, our expert team is ready to
              assist you.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:block lg:hidden h-auto w-full overflow-hidden bg-[#161616]">
        <div className="mt-[20px] h-[80px] w-full flex flex-col text-white ">
          <h className="font-bold text-[20px] text-center">
            MEET OUR LEADERSHIP
          </h>
          <p className="text-[18px] font-normal text-center mt-[10px]">
            At CodeFest, we’re more than just a team of developers – we’re a
            family.
          </p>
        </div>
        <div className="h-[334px] w-full flex flex-row gap-4 mt-[60px]  items-center justify-center	">
          <div className="h-[234px] w-[171px] bg-[#D9D9D9] bg-opacity-[0.03]	">
            <Image
              alt="img"
              src={"/a.jpg"}
              height={228}
              width={236}
              className="mx-auto mt-[20px]"
            />
            <div className=" text-white mx-auto h-[12px] w-full ">
              <p className="font-normal text-[15px] mt-[5px] text-center ">
                {" "}
                AAYUSH POUDEL{" "}
              </p>
              <p className="font-normal text-[10px] mt-[5px] text-center">
                Backend Developer
              </p>
            </div>
          </div>
          <div className="h-[234px] w-[171px] bg-[#D9D9D9] bg-opacity-[0.03]	">
            <Image
              alt="img"
              src={"/b.jpg"}
              height={228}
              width={236}
              className="mx-auto mt-[20px]"
            />
            <div className=" text-white mx-auto h-[12px] w-full">
              <p className="font-normal text-[15px] mt-[5px] text-center">
                {" "}
                AASHISH BIJUKCHHEE{" "}
              </p>
              <p className="font-normal text-[10px] mt-[5px] text-center">
                CEO{" "}
              </p>
            </div>
          </div>
          <div className="h-[234px] w-[171px] bg-[#D9D9D9] bg-opacity-[0.03]	">
            <Image
              src={"/c.jpg"}
              alt="img"
              height={228}
              width={236}
              className="mx-auto mt-[20px]"
            />{" "}
            <div className=" text-white mx-auto h-[12px] w-full">
              <p className="font-normal text-[15px] mt-[5px] text-center">
                {" "}
                Deepace Bhattarai{" "}
              </p>
              <p className="font-normal text-[10px] mt-[5px] text-center">
                Backend Frontend{" "}
              </p>
            </div>
          </div>
          <div className="h-[234px] w-[171px] bg-[#D9D9D9] bg-opacity-[0.03]	">
            <Image
              src={"/d.jpg"}
              alt="img"
              height={228}
              width={236}
              className="mx-auto mt-[20px] "
            />
            <div className=" text-white mx-auto h-[12px] w-full">
              <p className="font-normal text-[15px] mt-[5px] text-center">
                {" "}
                SANTOSH PHAIJU
              </p>
              <p className="font-normal text-[10px] mt-[5px] text-center">
                Senior Designer{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-center  text-white mt-[50px] h-[34px] items-center justify-center">
          <h className="font-normal text-[18px] leading-[33.9px]">
            Would you like to start a project with us?
          </h>{" "}
        </div>
        <div className="items-center justify-center w-full h-[90px]">
          <p className=" h-[88px] w-full font-normal text-[14px]  text-center leading-[34px] text-white">
            At CodeFest, we’re here to help bring your app development ideas to
            life! Whether you’re looking to develop a new app or need assistance
            with an existing one, our expert team is ready to assist you.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------- */}

      <div className="sm:block md:hidden lg:hidden h-auto w-full overflow-hidden bg-[#161616]">
        <div className="mt-[50px] h-[80px] w-full flex flex-col text-white ">
          <h className="font-bold text-[20px] text-center">
            MEET OUR LEADERSHIP
          </h>
          <p className="text-[18px] font-normal text-center mt-[10px]">
            At CodeFest, we’re more than just a team of developers – we’re a
            family.
          </p>
        </div>
        <div className="h-auto w-full flex flex-col gap-4 mt-[30px]  items-center justify-center	">
          <div className="h-[240px] w-[171px] bg-[#D9D9D9] bg-opacity-[0.03]	">
            <Image
              src={"/a.jpg"}
              alt="img"
              height={228}
              width={236}
              className="mx-auto mt-[20px]"
            />
            <div className=" text-white mx-auto h-[12px] w-full ">
              <p className="font-normal text-[15px] mt-[5px] text-center ">
                {" "}
                AAYUSH POUDEL{" "}
              </p>
              <p className="font-normal text-[10px] mt-[5px] text-center">
                Backend Developer
              </p>
            </div>
          </div>
          <div className="h-[240px] w-[171px] bg-[#D9D9D9] bg-opacity-[0.03] mt-[10px]	">
            <Image
              src={"/b.jpg"}
              height={228}
              alt="img"
              width={236}
              className="mx-auto mt-[20px]"
            />
            <div className=" text-white mx-auto h-[12px] w-full">
              <p className="font-normal text-[15px] mt-[5px] text-center">
                {" "}
                AASHISH BIJUKCHHEE{" "}
              </p>
              <p className="font-normal text-[10px] mt-[5px] text-center">
                CEO{" "}
              </p>
            </div>
          </div>
          <div className="h-[240px] w-[171px] bg-[#D9D9D9] bg-opacity-[0.03] mt-[10px]	">
            <Image
              src={"/c.jpg"}
              alt="img"
              height={228}
              width={236}
              className="mx-auto mt-[20px]"
            />
            <div className=" text-white mx-auto h-[12px] w-full">
              <p className="font-normal text-[15px] mt-[5px] text-center">
                {" "}
                Deepace Bhattarai{" "}
              </p>
              <p className="font-normal text-[10px] mt-[5px] text-center">
                Backend Frontend{" "}
              </p>
            </div>
          </div>
          <div className="h-[240px] w-[171px] bg-[#D9D9D9] bg-opacity-[0.03]	mt-[10px]">
            <Image
              src={"/d.jpg"}
              height={228}
              alt="img"
              width={236}
              className="mx-auto mt-[20px] "
            />
            <div className=" text-white mx-auto h-[12px] w-full">
              <p className="font-normal text-[15px] mt-[5px] text-center">
                {" "}
                SANTOSH PHAIJU
              </p>
              <p className="font-normal text-[10px] mt-[5px] text-center">
                Senior Designer{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-center  text-white mb-[25px] mt-[65px] h-auto">
          <h className="font-normal text-[18px] leading-[13.9px]">
            Would you like to start a project with us?
          </h>{" "}
          <p className="  w-full font-normal text-[10px] mb-[10px] mt-[10px] text-center leading-[14px] text-white">
            At CodeFest, we’re here to help bring your app development ideas to
            life! Whether you’re looking to develop a new app or need assistance
            with an existing one, our expert team is ready to assist you.
          </p>
        </div>
      </div>
    </>
  );
}
