import React from "react";
import Image from "next/image";

export default function Ourcustomers() {
  return (
    <>
      <div className="hidden lg:block md:hidden sm:hidden overflow-hidden bg-[#161616] h-[1024px] w-full">
        <div className="flex flex-col gap-2 items-center justify-center text-white">
          <h className="font-bold text-[40px]">OUT CUSTOMERS</h>
          <p className="font-normal text-[18px] leading-[48.41px]">
            Join our growing list of satisfied customers and let us help you
            take your business to the next level with our cutting-edge app
            development services.
          </p>
          <div className="flex flex-row gap-6 w-full h-[189px] mt-[60px] items-center justify-center">
            <div className="h-[189px] w-[206px] bg-[#D9D9D90D]">
              <Image
              alt="img here..."
                src={"/veda.png"}
                height={143}
                width={143}
                className="mx-auto my-auto"
              />
            </div>
            <div className="h-[189px] w-[206px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/de.png"}
                height={142}
                width={159}
                className="mx-auto my-auto"
              />
            </div>
            <div className="h-[189px] w-[367px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/bb.png"}
                height={97}
                width={347}
                className="mx-auto mt-8"
              />
            </div>
            <div className="h-[189px] w-[206px] bg-[#D9D9D90D] ">
              {" "}
              <Image
              alt="img here..."
                src={"/p.png"}
                height={126}
                width={126}
                className="my-6 mx-auto"
              />
            </div>
            <div className="h-[189px] w-[206px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/veda.png"}
                height={143}
                width={143}
                className="mx-auto my-auto"
              />
            </div>
          </div>
          <div className="flex flex-col text-white mt-[80px] items-center justify-center">
            <h className="font-normal text-[28px] h-[34px] w-[1439px] text-center">
              "Amazing Designs and Quality Work!"
            </h>
            <p className="w-[652px] h-[88px] text-[18px] leading-[34px] font-normal text-center mt-[30px]">
              Nam at congue diam. Etiam erat lectus, finibus eget commodo quis,
              tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam.
              Morbi fringilla congue libero, ac malesuada vulputate pharetra.
            </p>
          </div>
          <div className="h-[114px] w-[114px] mt-[50px]">
            <Image
            alt="img here..."
              src={"/man.jpg"}
              height={114}
              width={114}
              className="rounded-full"
            />
          </div>
          <div className="mt-[20px]">
            <h className="font-normal text-[28px]">John Doe</h>
          </div>
          <p className="font-normal text-[18px] text-center ">CEO, ACME INC.</p>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <div className="hidden lg:hidden md:block sm:hidden  overflow-hidden bg-[#161616] h-auto w-full">
        <div className="flex flex-col gap-2 items-center justify-center text-white">
          <h className="font-bold text-[20px]">OUT CUSTOMERS</h>
          <p className="font-normal text-[15px] w-full text-center leading-[28.41px]">
            Join our growing list of satisfied customers and let us help you
            take your business to the next level with our cutting-edge app
            development services.
          </p>
          <div className="flex flex-row gap-6 w-full h-[189px] mt-[10px] items-center justify-center">
            <div className="h-auto w-[206px] bg-[#D9D9D90D]">
              <Image
              alt="img here..."
                src={"/veda.png"}
                height={143}
                width={143}
                className="mx-auto my-auto"
              />
            </div>
            <div className="h-auto w-[206px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/de.png"}
                height={142}
                width={159}
                className="mx-auto my-auto"
              />
            </div>
            <div className="h-auto w-[367px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/bb.png"}
                height={97}
                width={347}
                className="mx-auto mt-8"
              />
            </div>
            <div className="h-auto w-[206px] bg-[#D9D9D90D] ">
              {" "}
              <Image
              alt="img here..."
                src={"/p.png"}
                height={126}
                width={126}
                className="my-6 mx-auto"
              />
            </div>
            <div className="h-auto w-[206px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/veda.png"}
                height={143}
                width={143}
                className="mx-auto my-auto"
              />
            </div>
          </div>
          <div className="flex flex-col text-white mt-[80px] items-center justify-center">
            <h className="font-bold text-[18px] h-[24px] w-full text-center">
              "Amazing Designs and Quality Work!"
            </h>
            <p className="w-[652px] h-[88px] text-[15px] leading-[34px] font-normal text-center mt-[10px]">
              Nam at congue diam. Etiam erat lectus, finibus eget commodo quis,
              tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam.
              Morbi fringilla congue libero, ac malesuada vulputate pharetra.
            </p>
          </div>
          <div className="h-[114px] w-[114px] mt-[50px]">
            <Image
            alt="img here..."
              src={"/man.jpg"}
              height={114}
              width={114}
              className="rounded-full"
            />
          </div>
          <div className="mt-[20px]">
            <h className="font-normal text-[20px]">John Doe</h>
          </div>
          <p className="font-normal text-[18px] text-center ">CEO, ACME INC.</p>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <div className="sm:block lg:hidden md:hidden overflow-hidden bg-[#161616] h-auto w-full">
        <div className="mt-[25px] flex flex-col gap-2 items-center justify-center text-white">
          <h className="font-bold text-[20px]">OUT CUSTOMERS</h>
          <p className="font-normal mt-[10px] text-[14px] w-full text-center leading-[18.41px]">
            Join our growing list of satisfied customers and let us help you
            take your business to the next level with our cutting-edge app
            development services.
          </p>
          <div className="mr-[4px] ml-[4px] flex flex-row gap-2 w-full h-[189px] mt-[10px] items-center justify-center">
            <div className="h-[70px] w-[206px] bg-[#D9D9D90D]">
              <Image
              alt="img here..."
                src={"/veda.png"}
                height={143}
                width={143}
                className="mx-auto my-auto"
              />
            </div>
            <div className="h-[70px] w-[206px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/de.png"}
                height={142}
                width={159}
                className="mx-auto my-auto"
              />
            </div>
            <div className="h-[70px] w-[367px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/bb.png"}
                height={97}
                width={347}
                className="mx-auto mt-[17px]"
              />
            </div>
            <div className="h-[70px] w-[206px] bg-[#D9D9D90D] ">
              {" "}
              <Image
              alt="img here..."
                src={"/p.png"}
                height={126}
                width={126}
                className=" mx-auto"
              />
            </div>
            <div className="h-[70px] w-[206px] bg-[#D9D9D90D]">
              {" "}
              <Image
              alt="img here..."
                src={"/veda.png"}
                height={143}
                width={143}
                className="mx-auto my-auto"
              />
            </div>
          </div>
          <div className="flex flex-col text-white mt-[10px] items-center justify-center">
            <h className="font-bold text-[18px] h-[14px] w-full text-center">
              "Amazing Designs and Quality Work!"
            </h>
            <p className="w-auto h-[88px] text-[15px] leading-[14px] font-normal text-center mt-[25px]">
              Nam at congue diam. Etiam erat lectus, finibus eget commodo quis,
              tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam.
              Morbi fringilla congue libero, ac malesuada vulputate pharetra.
            </p>
          </div>
          <div className="h-[114px] w-[114px] mt-[30px]">
            <Image
            alt="img here..."
              src={"/man.jpg"}
              height={114}
              width={114}
              className="rounded-full"
            />
          </div>
          <div className="mt-[15px]">
            <h className="font-normal text-[20px]">John Doe</h>
          </div>
          <p className="font-normal text-[18px] text-center ">CEO, ACME INC.</p>
        </div>
      </div>
    </>
  );
}
