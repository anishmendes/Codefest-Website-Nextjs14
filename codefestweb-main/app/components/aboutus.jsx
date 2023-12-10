"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Aboutus() {
  return (
    <>
      <about id="about">
        {" "}
        <div className="hidden lg:block md:hidden sm:hidden h-screen  w-full bg-[url('/bg1.png')] border-2   overflow-hidden">
          {" "}
          <div className="flex-row text-white mt-[30px] ">
            <h1 className="font-bold  w-full h-[48px] text-center text-[32px] letter-spacing:[2px] font-clash-display">
              ABOUT US
            </h1>
          </div>
          <div className="flex justify-around flex-row items-center gap-[57px] mt-[63px] mx-8 h-[300px]">
            <div className="text-white  flex flex-col justify-center items-center w-[40%]">
              <h2 className=" text-[60px]  font-clash-display tracking-widest  text-center  h-[150px]    leading-[70.72px]">
                Welcome to <span className="text-[#F99000]">CodeFest</span>
              </h2>
              <p className="mt-[20px] text-[18px] font-normal h-[110px]   text-center font-inter leading-[21.78px] tracking-widest ">
                With our unparalleled selection of services, you may open the
                door to a world of amazing possibilities, turning your dreams
                into reality and sparking the flames of innovation.
              </p>
              <button className="mx-auto mt-5 mb-2">
                <Image src="/button.png" width="160" height="54" alt="img" />
              </button>
            </div>
            <div className="h-[350px] w-[608px] bg-white"></div>
          </div>
          <div className="mt-[50px] flex flex-row gap-[40px] w-full items-center justify-center h-[350px]">
            <div className=" w-[384px] mb-20 text-white linearg1  hover: cursor-pointer hover:text-[#FF9000] ">
              <div className="w-auto  hover:cursor p-7">
                <div className="font-normal text-2xl font-clash-display flex justify-around items-center">
                  <span> WHO WE ARE ?</span>
                  <Image src="/man.gif" width={50} height={50} alt="person" />
                </div>
                <p className=" leading-[17.81px]  text-[14.72px] mt-[15px] text-justify">
                  Welcome to CodeFest, where we’re passionate about delivering
                  innovative Rapid App Development solutions. Our experienced
                  team is committed to collaboration, communication, and
                  transparency to exceed our clients’ expectations. Let us help
                  bring your app development ideas to life!
                </p>
              </div>
            </div>
            <div className=" w-[384px] mb-20 text-white linearg2 border-[5.77px] rounded-[24px] hover: cursor-pointer hover:text-[#FF9000]">
              <div className="w-auto hover:cursor p-7">
                <h className=" font-normal text-2xl font-clash-display flex justify-around items-center">
                  <span>OUR MISSION</span>
                  <Image
                    src="/mission.gif"
                    width={50}
                    height={50}
                    alt="person"
                  />
                </h>
                <p className=" leading-[17.81px]  text-[14.72px] mt-[15px] text-justify	">
                  At CodeFest, our mission is to deliver exceptional Rapid App
                  Development solutions that help our clients achieve their
                  business goals. With a focus on innovation, collaboration, and
                  customer satisfaction, we strive to exceed expectations and
                  push the boundaries of what’s possible in app development.
                </p>
              </div>
            </div>
            <div className=" w-[384px] mb-20 border-[5.77px] linearg3 rounded-[24px] text-white hover: cursor-pointer hover:text-[#FF9000] ">
              <div className="w-auto hover:cursor p-7">
                <h className="font-normal text-2xl font-clash-display flex justify-around items-center">
                  <span>WHAT WE DO ?</span>
                  <Image
                    src="/computer.gif"
                    width={50}
                    height={50}
                    alt="person"
                  />
                </h>
                <div className=" leading-[17.81px] text-[14.72px] mt-[15px] text-justify">
                  <ul className="list-disc ml-[25px]">
                    <li>UI UX Design</li>
                    <li>Website Development</li>
                    <li>Rapid System Development</li>
                    <li>App Development</li>
                    <li>Security</li>
                    <li>Tech Support</li>2<li>Internships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </about>

      {/* ____________________________________________________________________________________ */}
      <about id="about1">
        <div className="relative hidden md:block lg:hidden sm:hidden   h-auto w-full bg-[#161616] ">
          <div className="flex flex-row justify-between w-full h-auto">
            <div className="  w-[500px] h-auto top-0 ">
              <Image
                src={"/Image2.jpg"}
                alt="img here..."
                width={1404}
                height={447}
                className="mx-auto"
              />
            </div>

            <div className=" flex-row text-white top-0 w-[300px] mr-[20px] text-center">
              <h1 className=" font-bold text-xl object-center w-auto h-[28px] text-center">
                ABOUT US
              </h1>
              <h2 className="w-aut0 text-xl h-[24px] text-center font-normals">
                Welcome to codefest
              </h2>
              <p className="mt-[15px] text-center text-[10px] font-normal ml-[10px] ">
                Whatever your app development needs may be, we’re here to help.
                Don’t hesitate to reach out and let us know how we can assist
                you today!
              </p>
            </div>
          </div>

          <div className=" ml-[20px] mt-[30px] gap-[20px] flex flex-roww items-center justify-center w-full">
            <div className="  text-white hover: cursor-pointer hover:text-[#FF9000]   ">
              <p className=" h-[4px] w-[200px] bg-[#D9D9D9] mt-[39px] "></p>
              <div className="w-[250px] h-[288px] mt-[26px]  ">
                <h className="font-normal text-xl  ">1/ Who we are?</h>
                <p className="  text-[12px] mt-[15px] text-justify	sm:text-[8px]">
                  Welcome to CodeFest, where we’re passionate about delivering
                  innovative Rapid App Development solutions. Our experienced
                  team is committed to collaboration, communication, and
                  transparency to exceed our clients’ expectations. Let us help
                  bring your app development ideas to life!
                </p>
              </div>
            </div>
            <div className=" text-white hover: cursor-pointer hover:text-[#FF9000] ">
              <p className=" h-[4px] w-[200px] bg-white mt-[39px]"></p>
              <div className="w-[250px] h-[288px] mt-[26px]  hover: cursor">
                <h className=" font-normal text-xl ">2/ Our Mission</h>
                <p className=" leading-5.5 text-[12px] mt-[15px] text-justify	">
                  At CodeFest, our mission is to deliver exceptional Rapid App
                  Development solutions that help our clients achieve their
                  business goals. With a focus on innovation, collaboration, and
                  customer satisfaction, we strive to exceed expectations and
                  push the boundaries of what’s possible in app development.
                </p>
              </div>
            </div>
            <div className="">
              <p className=" h-[4px] w-[200px] bg-[#D9D9D9] mt-[39px]"></p>
              <div className="w-[250px] h-[288px] mt-[26px]  text-white hover: cursor-pointer hover:text-[#FF9000] ">
                <h className="font-normal text-xl ">3/ What we do?</h>
                <div className=" leading-5.5 text-[12px] mt-[15px] text-justify	 ">
                  <ul className="list-disc ml-[25px]">
                    <li>UI UX Design</li>
                    <li>Website Development</li>
                    <li>Rapid System Development</li>
                    <li>App Development</li>
                    <li>Security</li>
                    <li>Tech Support</li>
                    <li>Internships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </about>
      {/* __________________________________sm__________________________________________________ */}
      <about id="about2">
        <div className="relative md:hidden sm:block lg:hidden   h-auto w-full bg-[#161616]">
          <div className="flex flex-col justify-between w-full h-auto items-center top-0">
            <div className=" flex-row text-white top-0 w-[300px] mr-[20px] text-center">
              <h1 className=" font-bold text-xl object-center w-auto h-[28px] text-center">
                ABOUT US
              </h1>
              <h2 className="w-aut0 text-xl mt-[10px] h-[24px] text-center font-normals">
                Welcome to codefest
              </h2>
              <p className="mt-[15px] text-center text-[10px] font-normal ml-[10px] ">
                Whatever your app development needs may be, we’re here to help.
                Don’t hesitate to reach out and let us know how we can assist
                you today!
              </p>
            </div>
            <div className="  w-[500px] h-auto mt-[15px] ">
              <Image
                src={"/Image2.jpg"}
                width={1404}
                height={447}
                className="mx-auto"
                alt="img here..."
              />
            </div>
          </div>

          <div className="  mt-[30px] gap-[20px] flex flex-col items-center justify-center w-full">
            <div className="  text-white hover: cursor-pointer hover:text-[#FF9000]   ">
              <p className=" h-[4px] w-[200px] bg-[#D9D9D9] mt-[0px] "></p>
              <div className="w-[250px] h-auto mt-[26px]  ">
                <h className="font-normal text-xl  ">1/ Who we are?</h>
                <p className="  text-[12px] mt-[15px] text-justify	sm:text-[8px]">
                  Welcome to CodeFest, where we’re passionate about delivering
                  innovative Rapid App Development solutions. Our experienced
                  team is committed to collaboration, communication, and
                  transparency to exceed our clients’ expectations. Let us help
                  bring your app development ideas to life!
                </p>
              </div>
            </div>
            <div className=" text-white hover: cursor-pointer hover:text-[#FF9000] ">
              <p className=" h-[4px] w-[200px] bg-white mt-[0px]"></p>
              <div className="w-[250px] h-auto mt-[26px]  hover: cursor">
                <h className=" font-normal text-xl ">2/ Our Mission</h>
                <p className=" leading-5.5 text-[12px] mt-[15px] text-justify	">
                  At CodeFest, our mission is to deliver exceptional Rapid App
                  Development solutions that help our clients achieve their
                  business goals. With a focus on innovation, collaboration, and
                  customer satisfaction, we strive to exceed expectations and
                  push the boundaries of what’s possible in app development.
                </p>
              </div>
            </div>
            <div className="">
              <p className=" h-[4px] w-[200px] bg-[#D9D9D9] mt-[0px]"></p>
              <div className="w-[250px] h-auto mt-[26px]  text-white hover: cursor-pointer hover:text-[#FF9000] ">
                <h className="font-normal text-xl ">3/ What we do?</h>
                <div className=" leading-5.5 text-[12px] mt-[15px] text-justify	 ">
                  <ul className="list-disc ml-[25px]">
                    <li>UI UX Design</li>
                    <li>Website Development</li>
                    <li>Rapid System Development</li>
                    <li>App Development</li>
                    <li>Security</li>
                    <li>Tech Support</li>
                    <li>Internships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </about>
    </>
  );
}
