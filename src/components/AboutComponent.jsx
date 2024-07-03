import React from "react";
import ParsonalinfoDiv from "../Sub Conmponents/ParsonalinfoDiv";
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import WhatIdoDiv from "../Sub Conmponents/WhatIdoDiv";
import { FaSwatchbook } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";
import { FaCameraRetro } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import Fotter from "../Sub Conmponents/Fotter";
import Copyright from "./Copyright";

const AboutComponent = () => {
  return (
    <>
      <div className="container flex justify-center mt-[100px]  ">
        <div className=" w-[1300px] h-full bg-white rounded-[20px] flex flex-col ">
          <div className="flex items-center gap-[50px] pl-[75px] pt-10  ">
            <h1 className=" text-[40px] font-roboto font-bold ">About Me</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className="flex  ">
            <div className=" w-[250px] overflow-hidden rounded-[10px] mt-[30px] ml-[75px] ">
              <img src="photos/IMG_0883.JPG" alt="me" />
            </div>
            <div className=" text-[#44566c] ">
              <div className="w-[750px] text-start mt-[30px] ml-[75px] ">
                <h2 className=" text-[26px] mb-[11px] font-poppins font-medium ">
                  who am i ?
                </h2>
                <p className=" text-[16px] font-poppins text-start font-normal ">
                  I'm Creative Director and UI/UX Designer from Sydney,
                  Australia, working in web development and print media. I enjoy
                  turning complex problems into simple, beautiful and intuitive{" "}
                </p>
                <p className=" text-[16px] font-poppins text-start font-normal ">
                  designs.
                </p>
                <p className=" text-[16px] font-poppins text-start font-normal pt-[11px] ">
                  My aim is to bring across your message and identity in the
                  most creative way. I created web design for many famous brand
                  companies.
                </p>
              </div>
              <div className="">
                <div className=" ml-[75px] mt-[30px] ">
                  <h2 className=" text-[26px] pb-[11px] font-poppins font-medium ">
                    Personal info
                  </h2>
                </div>

                <div className=" flex flex-wrap justify-between ml-[15px] ">
                  <div className=" gap-7 flex flex-col ">
                    <ParsonalinfoDiv
                      infoicon={
                        <FaMobileAlt className=" text-[#e93b81] text-[22px] " />
                      }
                      infoname="Phone"
                      info="+88 01970713237"
                    />

                    <ParsonalinfoDiv
                      infoicon={
                        <FaLocationDot className=" text-[#e93b81] text-[22px] " />
                      }
                      infoname="Location"
                      info="Bangladesh, Dhaka"
                    />
                  </div>

                  <div className="gap-7 flex flex-col">
                    <ParsonalinfoDiv
                      infoicon={
                        <IoMailOpenOutline className=" text-[#6ab5b9] text-[22px] " />
                      }
                      infoname="Email"
                      info="abdulkader.wabdeveloper@gmail.com"
                    />

                    <ParsonalinfoDiv
                      infoicon={
                        <FaRegCalendarDays className=" text-[#c17ceb] text-[22px] " />
                      }
                      infoname="Burthday"
                      info="july 17 ,2007"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ml-[75px] mt-[70px]">
            <div className=" text-[28px] text-[#000] font-poppins font-medium mb-10 ">
              <h2>What I Do!</h2>
            </div>
            <div className="flex flex-wrap gap-10">
              <WhatIdoDiv
                divcolor="bg-[#fff4f4]"
                icons={<FaSwatchbook className="text-[#d566ff] text-[35px] " />}
                taitel="Ui/Ux Design"
                iDotext="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
              />
              <WhatIdoDiv
                divcolor="bg-[#eef5fa]"
                icons={<LuLayoutGrid className="text-[#ff6080] text-[35px] " />}
                taitel="App Development"
                iDotext="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
              />
              <WhatIdoDiv
                divcolor="bg-[rgb(252,244,255)]"
                icons={
                  <FaCameraRetro className="text-[#8774ff] text-[35px] " />
                }
                taitel="Photography"
                iDotext="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
              />
              <WhatIdoDiv
                divcolor="bg-[rgb(254,250,240)]"
                icons={<FaPenAlt className="text-[#dda10c] text-[35px] " />}
                taitel="Graphic Design"
                iDotext="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
              />
              <WhatIdoDiv
                divcolor="bg-[rgb(255,240,248)]"
                icons={<FaListCheck className="text-[#ff75d8] text-[35px] " />}
                taitel="Managment"
                iDotext="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
              />
              <WhatIdoDiv
                divcolor="bg-[#fff4f4]"
                icons={<FaCode className="text-[#269fff] text-[35px] " />}
                taitel="Web Development"
                iDotext="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
              />
            </div>
          </div>
          <Fotter
            fotterTaitel="Clients"
            fotterImage="photos/slide1.png"
            fotterImage2="photos/slide2.png"
            fotterImage3="photos/slide3.png"
            fotterImage4="photos/slide4.png"
            fotterImage5="photos/slide5.png"
            fotterImage6="photos/slide6.png"
          />
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
