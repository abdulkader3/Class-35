import React from "react";
import ResumeExprieansDiv from "../Sub Conmponents/ResumeExprieansDiv";
import { FaSchool } from "react-icons/fa6";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import Copyright from "./Copyright";
import FotterResume from "../Sub Conmponents/FotterResume";

const ResumeComponent = () => {
  return (
    <>
      <div className="flex justify-center mt-[100px]">
        <div className="w-[1300px] h-full bg-white rounded-[20px] flex flex-col">
          <div className="flex items-center gap-[50px] pl-[50px] pt-10">
            <h1 className=" text-[40px] font-roboto font-bold ">Resume</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className="flex justify-evenly mt-10">
            <ResumeExprieansDiv
              textTaitel="Education"
              date1="2021-2024"
              details1="Computer Science - Imperialize Technical Institute"
              Resumeicon={<FaSchool className=" text-[30px] text-[#fa5252] " />}
              date2="2017-2021"
              details2="Computer Science - Imperialize Technical Institute"
              date3="2015-2017"
              details3="Graphic Designer - Web Graphy, Los Angeles"
            />
            <ResumeExprieansDiv
              textTaitel="Experience"
              date1="2021-2024"
              details1="Computer Science - Imperialize Technical Institute"
              Resumeicon={
                <BsSuitcaseLg className=" text-[30px] text-[#fa5252] " />
              }
              date2="2017-2021"
              details2="Computer Science - Imperialize Technical Institute"
              date3="2015-2017"
              details3="Graphic Designer - Web Graphy, Los Angeles"
            />
            <ResumeExprieansDiv
              textTaitel="Awards"
              date1="2021-2024"
              details1="Computer Science - Imperialize Technical Institute"
              Resumeicon={<FaAward className=" text-[30px] text-[#fa5252] " />}
              date2="2017-2021"
              details2="Computer Science - Imperialize Technical Institute"
              date3="2015-2017"
              details3="Graphic Designer - Web Graphy, Los Angeles"
            />
          </div>
          <FotterResume />
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default ResumeComponent;
