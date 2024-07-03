import React from "react";

const WorkDiv2 = ({image, text1, text2}) => {
  return (
    <>
      <div className=" w-[350px] flex flex-col justify-center items-center pt-10 pb-5 rounded-md bg-[#fff4f4] shadow-md ">
        <img className=" rounded-xl " src={image} alt="one" />
        <div className=" w-full pl-6 mt-1 ">
          <p className=" font-poppins font-light text-[12px] text-[#717070] ">{text1} </p>
          <p className=" text-[16px] pr-2 font-poppins font-medium ">{text2}</p>
        </div>
      </div>
    </>
  );
};

export default WorkDiv2;
