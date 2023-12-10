import React from "react";
import Image from "next/image";

export default function Ourproducts() {
  return (
    <>
      <div className="hidden sm:hidden lg:block md:hidden  h-[1024px] mx-auto w-full bg-[rgb(22,22,22)] overflow-hidden ">
        <div className="flex flex-col">
          <div className="h-[48px] w-full text-white text-center">
            <h className="text-[40px] font-bold">OUR PRODUCTS</h>
          </div>
          <div className="flex flex-row">
            <div className="ml-[180px] h-[160px] w-[480px]">
              <p className="mt-[60px]  text-white font-normal text-[28px]">
                Amazing Designs and Quality Work!
              </p>

              <p className="pt-[40px]  text-white font-normal text-[18px] w-[448px]">
                Join our growing list of satisfied customers and let us help you
                take your business to the next level with our cutting-edge app
                development services.
              </p>
            </div>
            <div className="h-[300px] w-[600px] mt-[-50px]">
              <Image src={"/stamp.png"} height={1100} alt="abc" width={1100} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className=" pl-[53px] pt-[71px]">
              <Image
                src={"/cup1.png"}
                height={803}
                alt="abc"
                width={757}
                className="z-10"
              />
            </div>
            <div className="pt-[250px]">
              <Image
                src={"/cup3.png"}
                height={509}
                width={763}
                className="z-20"
                alt="abc"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      <div className=" hidden sm:hidden md:block lg:hidden  h-auto w-full bg-[rgb(22,22,22)] overflow-hidden items-center justify-center">
        <div className=" flex flex-col">
          <div className="w-full text-white text-center mt-[20px]">
            <h className="text-[30px] font-bold">OUR PRODUCTS</h>
          </div>
          <div className="flex flex-row">
            <div className="ml-[20px] h-[160px] w-[480px]">
              <p className="mt-[40px]  text-white font-bold text-[18px]">
                Amazing Designs and Quality Work!
              </p>

              <p className="pt-[40px]  text-white font-normal text-[15px] w-[448px]">
                Join our growing list of satisfied customers and let us help you
                take your business to the next level with our cutting-edge app
                development services.
              </p>
            </div>
            <div className="h-[200px] w-[400px] mt-[-50px]">
              <Image src={"/stamp.png"} height={1100} width={1100} alt="abc" />
            </div>
          </div>
          <div className="flex flex-row">
            <div className=" pl-[53px] pt-[71px]">
              <Image
                src={"/cup1.png"}
                height={503}
                width={457}
                alt="abc"
                className="z-10"
              />
            </div>
            <div className="pt-[100px]">
              <Image
                src={"/cup3.png"}
                height={309}
                alt="abc"
                width={563}
                className="z-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------sm------------------------------------------------------- */}
      <div className=" md:hidden sm:block lg:hidden  h-auto w-full bg-[rgb(22,22,22)] overflow-hidden items-center justify-center">
        <div className=" flex flex-col">
          <div className="w-full text-white text-center mt-[40px]">
            <h className="text-[30px] font-bold">OUR PRODUCTS</h>
          </div>
          <div className="flex flex-row">
            <div className="h-auto w-full text-center">
              <p className="mt-[20px] w-full text-white font-bold text-center text-[18px]">
                Amazing Designs and Quality Work!
              </p>

              <p className="pt-[40px]  text-white font-normal text-[12px] w-auto text-center">
                {" "}
                Join our growing list of satisfied customers and let us help you
                take your business to the next level with our cutting-edge app
                development services.
              </p>
            </div>
            <div className="h-[200px] w-[400px] mt-[60px]">
              <Image src={"/stamp.png"} height={1200} alt="abc" width={1200} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className=" pl-[33px] pt-[0px]">
              <Image src={"/cup1.png"} height={503} width={457} alt="abc" />
            </div>
            <div className="mt-[30px]">
              <Image src={"/cup3.png"} height={309} width={563} alt="abc" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
