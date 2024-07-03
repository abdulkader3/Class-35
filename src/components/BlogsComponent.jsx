import React from "react";
import Copyright from "./Copyright";
import WorkDiv2 from "../Sub Conmponents/WorkDiv2";

const BlogsComponent = () => {
  return (
    <div>
      <div className="flex justify-center mt-[100px]">
        <div className="w-[1300px] h-full bg-white rounded-[20px] flex flex-col">
          <div className="flex items-center gap-[50px] pl-[50px] pt-10">
            <h1 className=" text-[40px] font-roboto font-bold ">Blog</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className=" w-full h-full flex ">
            <div className="w-full h-full flex mt-20">
              <div className="w-full h-full justify-around flex ">
                <div className="flex flex-col gap-7">
                  <WorkDiv2
                    text1="January ▪️ Travel landing"
                    text2="Everything you are with you know about web accessibility."
                    image="photos/1.png"
                  />
                  <WorkDiv2
                    text1="January ▪️ Travel landing"
                    text2="Everything you are with you know about web accessibility."
                    image="photos/4.png"
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex justify-center mt-20">
              <div className="w-full h-full flex justify-around">
                <div className="flex flex-col gap-7">
                  <WorkDiv2
                    text1="January ▪️ Travel landing"
                    text2="Everything you are with you know about web accessibility."
                    image="photos/2.png"
                  />
                  <WorkDiv2
                    text1="January ▪️ Travel landing"
                    text2="Everything you are with you know about web accessibility."
                    image="photos/5.png"
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex justify-center mt-20">
              <div className="w-full h-full flex justify-around">
                <div className="flex flex-col gap-7">
                  <WorkDiv2
                    text1="January ▪️ Travel landing"
                    text2="Everything you are with you know about web accessibility."
                    image="photos/3.png"
                  />
                  <WorkDiv2
                    text1="January ▪️ Travel landing"
                    text2="Everything you are with you know about web accessibility."
                    image="photos/6.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
