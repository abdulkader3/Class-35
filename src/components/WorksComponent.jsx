import React from "react";
import Copyright from "./Copyright";
import WorkDiv from "../Sub Conmponents/WorkDiv";
import WorkDiv2 from "../Sub Conmponents/WorkDiv2";

const WorksComponent = () => {
  return (
    <>
      <div className="flex justify-center mt-[100px]">
        <div className="w-[1300px] h-full bg-white rounded-[20px] flex flex-col">
          <div className="flex flex items-center gap-[50px] pl-[50px] pt-10">
            <h1 className=" text-[40px] font-roboto font-bold ">Portfolio</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className="w-full h-full flex justify-center mt-20 ">
            <div className=" w-[1100px] h-full ">
              <div className="flex justify-end gap-[30px] mb-[20px] ">
                <button className=" hover:text-[#DD2476] transition-all ">
                  All
                </button>
                <button className=" hover:text-[#DD2476] transition-all ">
                  Mockup
                </button>
                <button className=" hover:text-[#DD2476] transition-all ">
                  Graphic Design
                </button>
                <button className=" hover:text-[#DD2476] transition-all ">
                  Logo
                </button>
              </div>

              <div className=" w-full h-full flex justify-between ">
                {/* ================== */}

                <div className=" flex flex-col gap-5 ">
                  <WorkDiv
                    image="photos/one.png"
                    text1="Travel landing UX/UI"
                    text2="Chul Urina"
                  />
                  <WorkDiv2
                    image="photos/four.png"
                    text1="Travel landing UX/UI"
                    text2=" Packing box "
                  />
                </div>

                {/* =========================== */}

                <div className="flex flex-col gap-5">
                  <WorkDiv2
                    image="photos/three.png"
                    text1="Travel landing UX/UI"
                    text2="Aura Dione"
                  />
                  <WorkDiv2
                    image="photos/five.png"
                    text1="Travel landing UX/UI"
                    text2="Modern bag design"
                  />
                </div>

                {/* ========================== */}

                <div className="flex flex-col gap-5">
                  <WorkDiv2
                    image="photos/two.png"
                    text1="Travel landing UX/UI"
                    text2="T-shirt design"
                  />
                  <WorkDiv
                    image="photos/six.png"
                    text1="Travel landing UX/UI"
                    text2="Chul Urina"
                  />
                </div>

                {/* ========================== */}
              </div>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default WorksComponent;
