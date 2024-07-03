import React from "react";

const ParsonalinfoDiv = ({infoicon,infoname,info}) => {
  return (
    <>
      <div className="flex items-center ml-[60px] gap-3 ">
        <div className=" w-[44px] h-[44px] rounded-[10px] bg-white shadow flex justify-center items-center ">
          {infoicon}
        </div>
        <div className="">
          <p className="text-[12px] font-normal ">{infoname}</p>
          <p className=" font-poppins text-[16px] font-normal ">
            {" "}
            {info}
          </p>
        </div>
      </div>
    </>
  );
};

export default ParsonalinfoDiv;
