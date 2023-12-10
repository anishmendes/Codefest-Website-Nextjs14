"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="hidden sm:hidden md:hidden lg:block">
        <div className="lg:flex pt-[36px] w-full  items-center justify-between hidden">
          <div className="pl-[66px]">
            <Image src="/logo.png" height={70} width={70} alt="hello" />
          </div>
          <div className="flex gap-[64px] text-white  h-[50px] items-center justify-center">
            <Link
              href="/home"
              smooth={"true"}
              duration={500}
              className="hover: cursor-pointer flex item-center"
            >
              HOME
            </Link>

            <Link
              href="about"
              smooth={"true"}
              duration={500}
              className="hover: cursor-pointer flex item-center"
            >
              ABOUT US
            </Link>
            <Link
              href="service"
              smooth={"true"}
              duration={500}
              className=" hover: cursor-pointer  flex item-center"
            >
              SERVICES
            </Link>
            <Link
              href="footer"
              smooth={"true"}
              duration={500}
              className=" hover: cursor-pointer  flex item-center"
            >
              CONTACT
            </Link>
          </div>

          <button href="abc" className="flex item-center mr-[64px]">
            <Image src={"/doc.png"} height={43} width={43} alt="hello" />
          </button>
        </div>
      </div>

      <div className="hidden sm:hidden md:block lg:hidden">
        <div className="relative  flex justify-between items-center  top-0  w-full  px-6 h-auto  p-2">
          <div className="z-50 cursor-pointer">
            <Image
              className="  z-50 "
              src={"/logo.png"}
              alt="what"
              height={60}
              width={60}
            />
          </div>

          <div className=" cursor-pointer " onClick={() => setNav(!nav)}>
            {nav ? (
              <ImCross className="text-white" />
            ) : (
              <span className="text-white">
                <AiOutlineMenu />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className=" sm:block md:hidden lg:hidden">
        <div className="relative  flex justify-between items-center  top-0  w-full  px-6 h-auto  p-2">
          <div className="z-50 cursor-pointer">
            <Image
              className="  z-50 "
              src={"/logo.png"}
              alt="what"
              height={60}
              width={60}
            />
          </div>

          <div className=" cursor-pointer " onClick={() => setNav(!nav)}>
            {nav ? (
              <ImCross className="text-white" />
            ) : (
              <span className="text-white">
                <AiOutlineMenu />
              </span>
            )}
          </div>
        </div>
      </div>
      {nav && (
        <div className="sm:hidden hidden md:block lg:hidden absolute right-0 mr-[70px] border-1 top-[30px]  text-[18px]  text-white">
          <ul className="flex flex-col  ">
            <Link
              href="home1"
              smooth={"true"}
              duration={500}
              className="flex item-center flex-col "
            >
              HOME
            </Link>
            <Link
              href="blogs1"
              smooth={"true"}
              duration={500}
              className="flex item-center mt-[10px]"
            >
              BLOGS
            </Link>
            <Link
              href="about1"
              smooth={"true"}
              duration={500}
              className="flex item-center mt-[10px]"
            >
              ABOUT
            </Link>
            <Link
              href="service1"
              smooth={"true"}
              duration={500}
              className="flex item-center mt-[10px]"
            >
              SERVICE
            </Link>
            <Link
              href="contact1"
              smooth={"true"}
              duration={500}
              className="flex item-center mt-[10px]"
            >
              CONTACT
            </Link>
          </ul>
        </div>
      )}
      {nav && (
        <div className="sm:block  md:hidden lg:hidden absolute right-0 mr-[70px] border-1 top-[30px]  text-[18px]  text-white">
          <ul className="flex flex-col  ">
            <Link
              href="home2"
              smooth={"true"}
              duration={500}
              className="flex item-center flex-col "
            >
              HOME{" "}
            </Link>
            <Link
              href="blogs2"
              smooth={"true"}
              duration={500}
              className="flex item-center mt-[10px]"
            >
              BLOGS{" "}
            </Link>
            <Link
              href="about2"
              smooth={"true"}
              duration={500}
              className="flex item-center mt-[10px]"
            >
              ABOUT{" "}
            </Link>
            <Link
              href="service2"
              smooth={"true"}
              duration={500}
              className="flex item-center mt-[10px]"
            >
              SERVICE{" "}
            </Link>
            <Link
              href="contact2"
              smooth={"true"}
              duration={500}
              className="flex item-center mt-[10px]"
            >
              CONTACT{" "}
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
