import React from "react";
import { FaDownload } from "react-icons/fa6";
import Parsonalinfo from "../Sub Conmponents/Parsonalinfo";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const HomeComponent = () => {
  return (
    <>
      <div className=" gap-[30px] w-full flex-col h-full flex justify-center items-center ">
        <div className="  w-[280px] h-[280px] rounded-full overflow-hidden mt-[150px] justify-center">
          <img className="  " src="photos/new.JPG" alt="ME" />
        </div>
        <div className=" text-center ">
          <h1 className=" text-[25px] font-bold font-roboto ">
            {" "}
            Abdul Kader Shanto{" "}
          </h1>
          <h2 className=" text-[#787777] font-poppins text-[13px] mt-[15px] ">
            {" "}
            Web Designe/Developer{" "}
          </h2>
        </div>
        <div className=" flex gap-[17px]">
          <Parsonalinfo
            linkIcon={<FaFacebookF className=" text-[#1773ea] " />}
            iconlink="https://web.facebook.com/shanto2444"
          />
          <Parsonalinfo
            iconlink="https://x.com/Kader_9595"
            linkIcon={<FaTwitter className=" text-[#1c9cea] " />}
          />
          <Parsonalinfo
            iconlink="https://www.instagram.com/_abdul_kader_web_developer/"
            linkIcon={<FaInstagram className=" text-[#e12a72]" />}
          />
          <Parsonalinfo
            iconlink="https://www.linkedin.com/in/andul-kader-b47a1517a/"
            linkIcon={<FaLinkedinIn className=" text-[#144679] " />}
          />
        </div>
        <div className=" w-[300px] flex justify-center mb-16 ">
          <a
            href="photos/myCV.pdf"
            download="resume"
            className="px-[24px] flex gap-[10px] justify-center items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  hover:text-white transition-all bg-[#fff] font-poppins active:scale-125 transition-all py-[10px] rounded-[50px] text-[16px] text-center"
          >
            {" "}
            <FaDownload /> Download CV{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
