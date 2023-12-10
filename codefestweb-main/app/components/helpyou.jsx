import React from "react";
import Image from "next/image";

export default function Helpyou() {
  const datas = [
    {
      id: 1,
      title: "Custom Development",
      details:
        "If you have a unique app development requirement, we can provide tailored solutions that meet your specific needs.",
    },
    {
      id: 2,
      title: "Rapid App Development",
      details:
        "We use the latest technologies to create apps that are intuitive, responsive, and user-friendly. We can also help with testing and deployment to ensure that your app is ready for release.",
    },
    {
      id: 3,
      title: "Training",
      details:
        "We provide regular learning opportunities, including internships and training sessions, to help you develop your skills about the latest technologies. ",
    },
    {
      id: 4,
      title: "Consultation",
      details:
        "We offer consultation services to help you better understand the app development process and make informed decisions about your project.",
    },
    {
      id: 5,
      title: "Security:",
      details:
        "We offer comprehensive security services to help protect your app from cyber threats. Our team can help you identify potential vulnerabilities and implement measures to secure your app against attacks.",
    },
    {
      id: 6,
      title: "Help & Support:",
      details:
        "Our team can address any issues that arise, provide regular updates, and make enhancements to the app as needed.",
    },
  ];

  return (
    <>
      <service id="service">
        <div className="hidden sm:hidden lg:block md:hidden h-[1024px] w-full bg-[#161616] overflow-hidden">
          <div className="h-[48px] w-full text-white mt-[72px] text-center">
            <h className="text-[40px] font-bold ">How can we help you?</h>
          </div>
          <div className="h-[22px] w-auto text-center mt-[11px] text-white font-normal text-[18px] leading-[22px]">
            <p>
              Whatever your app development needs may be, we’re here to help.
              Don’t hesitate to reach out and let us know how we can assist you
              today!
            </p>
          </div>

          <div className="mr-[10px] ml-[10px] mt-[42px] h-[768px] w-auto bg-[#161616] items-center gap-[30px] grid grid-cols-3">
            {datas.map((data) => {
              return (
                <>
                  <div className="flex-row flex gap-[10px] h-[356px] w-fit bg-[#D9D9D90D] cursor-pointer hover:bg-[#FF9000] ">
                    <div className="text-white  ml-[37px] mr-[38px]">
                      <Image
                        src={"/Started 2.png"}
                        height={58}
                        width={58}
                        alt="img"
                        className="mt-[38px]"
                      />
                      <div className="mt-[29px]">
                        <h className="text-white font-bold text-[24px]">
                          {" "}
                          {data.title}
                        </h>{" "}
                      </div>
                      <p className="mt-[18px] text-justify text-white font-normal text-[18px] leading-[23px]">
                        {" "}
                        {data.details}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </service>

      {/* ------------------------------------------------------------------------------------------- */}
      <service id="service1">
        <div className="lg:hidden hidden sm:hidden md:block h-auto w-full bg-[#161616] overflow-hidden">
          <div className="h-auto w-full text-white mt-[32px] text-center">
            <h className="text-[20px] font-bold ">How can we help you?</h>
          </div>
          <div className="h-auto w-full text-center mt-[5px] text-white font-normal text-[10px] leading-[22px]">
            <p>
              Whatever your app development needs may be, we’re here to help.
              Don’t hesitate to reach out and let us know how we can assist you
              today!
            </p>
          </div>
          <div className="mt-[22px] h-auto w-auto bg-[#161616] mr-[10px] ml-[10px] flex flex-col gap-[10px]">
            {datas.map((data) => {
              return (
                <>
                  <div className="flex-row  h-[86px] w-full bg-[#D9D9D90D] cursor-pointer hover:bg-[#FF9000] ">
                    <div className="text-white pl-[5px] pt-[7px] w-[700px]">
                      <Image
                        src={"/Started 2.png"}
                        height={18}
                        width={18}
                        className=""
                        alt="img"
                      />
                      <div className="mt-[2px]">
                        <h className="text-white font-bold text-[10px]">
                          {" "}
                          {data.title}
                        </h>{" "}
                      </div>
                      <p className="mt-[8px] text-justify text-white font-normal text-[10px] leading-[13px]">
                        {" "}
                        {data.details}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </service>
      {/* --------------------sm----------------------------------------------------------------------- */}

      <service id="service2">
        <div className="lg:hidden md:hidden sm:block h-auto w-full bg-[#161616] overflow-hidden">
          <div className="h-auto w-full text-white mt-[32px] text-center">
            <h className="text-[20px] font-bold ">How can we help you?</h>
          </div>
          <div className="h-auto w-full text-center mt-[5px] text-white font-normal text-[10px] leading-[22px]">
            <p>
              Whatever your app development needs may be, we’re here to help.
              Don’t hesitate to reach out and let us know how we can assist you
              today!
            </p>
          </div>
          <div className="mt-[22px] h-auto w-auto mr-[10px] bg-[#161616] ml-[10px] flex flex-col gap-[10px]">
            {datas.map((data) => {
              return (
                <>
                  <div className="flex-row  auto w-full bg-[#D9D9D90D] cursor-pointer hover:bg-[#FF9000] ">
                    <div className="text-white pl-[5px] pt-[7px] w-auto h-auto">
                      <Image
                        src={"/Started 2.png"}
                        height={18}
                        width={18}
                        alt="img"
                      />
                      <div className="mt-[2px]">
                        <h className="text-white font-bold text-[10px]">
                          {" "}
                          {data.title}
                        </h>{" "}
                      </div>
                      <p className="mt-[8px] mb-[5px] text-justify text-white font-normal text-[10px] leading-[13px]">
                        {" "}
                        {data.details}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </service>
    </>
  );
}
