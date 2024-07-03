import React from "react";

const ContactNameDiv = ({textofname}) => {
  return (
    <>
      <div className="w-full  flex flex-col justify-center mb-10 ">
        <p className=" pb-5 "> {textofname} </p>
        <div className="w-[85%] h-[1px] bg-black "></div>
      </div>
    </>
  );
};

export default ContactNameDiv;
