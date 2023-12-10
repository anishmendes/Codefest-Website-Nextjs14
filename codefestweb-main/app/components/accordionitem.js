import React from "react";
import { ImArrowDownRight } from "react-icons/im";
import { ImArrowUpRight } from "react-icons/im";
import { Collapse } from "react-collapse";

const AccordionItem = ({ open, togggle, title, desc }) => {
  return (
    <div>
      {" "}
      <div
        className="  mt-[54px] text-white w-auto  h-auto lg:ml-[0px] "
        onClick={togggle}
      >
        <h className="lg:text-[28px] lg:mt-[70px] n md:text-[18px] mt-[-15px] text-[10px]  md:ml-[0px]  w-auto  font-normal flex justify-between mr-[20px] left-0">
          {title}
          <div className="text-[10px]  mt-[8px] right first-letter text-[#FF9000]">
            {open ? (
              <ImArrowUpRight size={10} />
            ) : (
              <ImArrowDownRight size={10} />
            )}
          </div>
        </h>

        <Collapse isOpened={open}>
          <div className="lg:text-[18px] md:text-[14px] mr-[60px] mt-[10px] text-[10px] right first-letter text-[#FF9000]">
            {desc}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default AccordionItem;
