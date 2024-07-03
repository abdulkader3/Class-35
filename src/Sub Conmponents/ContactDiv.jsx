import React from "react";

const ContactDiv = ({image , tailel, details ,padding, color}) => {
  return (
    <>
      <div className={`${color} flex flex-col justify-center   w-[350px] p-10 rounded-md`}>
        <div className=" text-start ">
          <div className=" flex items-center pl-4 gap-5 ">
            <div className="w-[40px] h-[40px] "><img src={image} alt="" /></div>
            <p className="text-[20px] font-semibold font-poppins"> {tailel} </p>
          </div>
          <p className={`${padding}`}> {details} </p>
        </div>
      </div>
    </>
  );
};

export default ContactDiv;
