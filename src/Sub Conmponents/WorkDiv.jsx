import React from "react";

const WorkDiv = ({image,text1, text2}) => {
  return (
    <>
      <div className=" w-[350px] flex flex-col justify-center items-center pt-5 pb-3 overflow-hidden rounded-md bg-[#fff4f4] shadow-md ">
        <img className=" rounded-xl " src={image} alt="one" />
        <div className=" w-full pl-6 mt-1 ">
        <p className=" font-poppins font-light text-[12px] text-[#717070] " >{text1} </p>
        <p className=" text-[16px] font-poppins font-medium " >{text2}</p>
        </div>
      </div>
    </>
  );
};

export default WorkDiv;
