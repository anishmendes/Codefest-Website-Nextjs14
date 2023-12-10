"use client";
import React from "react";
import Image  from "next/image";
import AccordionItem from "./accordionitem";
import { useState } from "react";



export default function Whychoose() {
const [selected , setSelected] = useState (null)
 
  const [showContent, setShowContent] = useState(null);
  
  const [open, setOpen ] = useState(false);
  const toggle = (index) => {
    if(open==index){
      return setOpen(null);


    }
    setOpen(index)
  }

  
  
  const accordionData = [
    {
    title: "Experienced and Innovation team",
    desc: " Our team is made up of experienced professionals who are dedicated to innovation and staying up-to-date with the latest trends in Rapid App Development. "
},
    {
    title: "Collaborative approach",
    desc: " We work closely with our clients to ensure their vision is realized through a transparent and collaborative process. "
},
    {
    title: "Focus on customer satisfaction",
    desc: " Our top priority is ensuring our clients are completely satisfied with the end result."
},
    {
    title: "Attention to security",
    desc: "  We take security seriously and ensure our apps meet the highest We take security seriously and ensure our apps meet the highest standards for data protection. standards for data protection."
},
    {
    title: "Cost-effective solutions",
    desc: " We provide cost-effective solutions without compromising on quality or functionality."
},
    {
    title: " Ongoing support",
    desc: " We offer ongoing support and maintenance to ensure our clients’ apps remain up-to-date and secure."
},
]
{
  return (
    <>
      <div className="hidden md:hidden sm:hidden lg:block  h-[1024px] w-full overflow-hidden bg-[#161616]  ">
        <div className="absolute h-[1024px] w-[661px]">
          <Image alt="img" src={"/image3.jpg"} height={1024} width={661} />
        </div>

        <div className="absolute h-[161px] w-auto text-white mt-[70px] ml-[721px] flex-row">
          <h className="font-bold text-[40px]">WHY CHOOSE US?</h>
          <p className="font-normal text-[18px] mt-[25px] leading-[21.78px] text-left">
            Choose CodeFest for experienced innovation, collaborative
            development, customer satisfaction, top-tier security,
            cost-effective solutions, and ongoing support. Let’s create
            something amazing together!
          </p>
        </div>
              <div className="mt-[344px] text-white w-auto  h-auto ml-[721px] cursor-pointer">
          
        { accordionData.map((data, index) => {return <AccordionItem key={index} open={index===open} title={data.title}
        desc={data.desc} togggle={() => toggle(index)} />})}     </div>
     </div>
      

      {/* -------------------------------------------------------------------------------------------------- */}

      <div className="md:block sm:hidden hidden lg:hidden relative  h-auto w-full overflow-hidden bg-[#161616] ">
        <div className=" flex flex-row w-full justify-between">
        <div className="absolute  h-auto w-[661px] flex-grow flex mt-[100px]">
          <Image alt="img" src={"/image3.jpg"} height={500} width={450} />
        </div>

        <div className="absolute h-[161px] w-[319px] text-white mt-[95px] ml-[465px] flex-row">
          <h className="font-bold text-[17px]">WHY CHOOSE US?</h>
          <p className="font-normal text-[14px] mt-[20px] leading-[21.78px] text-left w-auto mr-[10px]">
            Choose CodeFest for experienced innovation, collaborative
            development, customer satisfaction, top-tier security,
            cost-effective solutions, and ongoing support. Let’s create
            something amazing together!
          </p>
        </div>
        <div className="mt-[270px] mb-[30px] text-white w-[719px]   ml-[465px] ">
        
              
        { accordionData.map((data, index) => {return <AccordionItem key={index} open={index===open} title={data.title}
        desc={data.desc} togggle={() => toggle(index)} />})} 
       
        </div>
      </div>
      </div>
     
      {/* ---------------------------sm----------------------------------------------------------------------- */}

      <div className="md:hidden sm:block lg:hidden relative  h-auto w-full overflow-hidden bg-[#161616] ">
        <div className=" flex-row h-auto">
        <div className="  w-auto text-white mt-[40px] flex-row text-center">
          <h className="font-bold text-[15px] text-center w-full">WHY CHOOSE US?</h>
          <p className="font-normal text-[10px] mt-[10px] leading-[15.78px]  text-center">
            Choose CodeFest for experienced innovation, collaborative
            development, customer satisfaction, top-tier security,
            cost-effective solutions, and ongoing support. Let’s create
            something amazing together!
          </p>
        </div>
        <div className="absolute  h-auto w-auto mt-[43px]">
          <Image alt="img" src={"/image3.jpg"} height={400} width={196} />
        </div>

       
        <div className="mt-[10px] text-white w-auto ml-[203px]  ">
         
              
        { accordionData.map((data, index) => {return <AccordionItem key={index} open={index===open} title={data.title}
        desc={data.desc} togggle={() => toggle(index)} />})} 
        
             </div>
      </div>
      </div>
      
  
    </>
  );
  }}