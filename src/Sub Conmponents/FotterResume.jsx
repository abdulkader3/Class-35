import React from "react";

const FotterResume = () => {
  return (
    <>
      <div className=" mt-[100px] w-full h-full flex justify-center">
        <div className="w-[1150px] h-full bg-[#f8fbfb] rounded-2xl flex ">
          <div className=" w-full h-full p-10 ">
            <h2 className="text-[26px] font-poppins font-medium pb-2">
              Working Skills
            </h2>
            <div className=" flex justify-between w-full h-full ">
              <h3 className=" text-[16px] text-[#44566c] ">Web Design</h3>
            </div>
            <div className="flex items-center gap-2 mb-7 ">
              <div className=" bg-[#edf2f2] h-[6px] rounded-xl w-[500px] flex ">
                {" "}
                <div className="h-[6px] w-[85%] bg-[#ff6464] rounded-md "></div>{" "}
              </div>
              <p>85%</p>
            </div>


            <div className=" flex justify-between w-full h-full ">
              <h3 className="text-[16px] text-[#44566c]">Mobile App</h3>
            </div>
            <div className="flex items-center gap-2 mb-7 ">
              <div className=" bg-[#edf2f2] h-[6px] rounded-xl w-[500px] flex ">
                {" "}
                <div className="h-[6px] w-[55%] bg-[#9272d4] rounded-md "></div>{" "}
              </div>
              <p>55%</p>
            </div>


            <div className=" flex justify-between w-full h-full ">
              <h3 className="text-[16px] text-[#44566c]">Illustrator</h3>
            </div>
            <div className="flex items-center gap-2 mb-7 ">
              <div className=" bg-[#edf2f2] h-[6px] rounded-xl w-[500px] flex ">
                {" "}
                <div className="h-[6px] w-[65%] bg-[#5185d4] rounded-md "></div>{" "}
              </div>
              <p>65%</p>
            </div>



            <div className=" flex justify-between w-full h-full ">
              <h3 className="text-[16px] text-[#44566c]">Photoshope</h3>
            </div>
            <div className="flex items-center gap-2 mb-7 ">
              <div className=" bg-[#edf2f2] h-[6px] rounded-xl w-[500px] flex ">
                {" "}
                <div className="h-[6px] w-[75%] bg-[#ca56f2] rounded-md "></div>{" "}
              </div>
              <p>72%</p>
            </div>
          </div>

          {/* ================ */}
          <div className="w-full h-full p-10">
            <div className="">
              <h2 className=" text-[26px] font-poppins font-medium pb-4 ">
                Knowledges
              </h2>
            </div>
            <div className=" flex flex-wrap gap-4 "> 
                <p className="w-[150px] p-2 flex mb-3 justify-center items-center  bg-[#edf2f2] rounded-xl" >Digital Design</p> 
                <p className="w-[100px] p-2 flex mb-3 justify-center items-center  bg-[#edf2f2] rounded-xl" >Marketing</p> 
                <p className="w-[150px] p-2 flex mb-3 justify-center items-center  bg-[#edf2f2] rounded-xl" >Communication</p> 
                <p className="w-[110px] p-2 flex mb-3 justify-center items-center  bg-[#edf2f2] rounded-xl" >Social Media</p> 
                <p className="w-[150px] p-2 flex mb-3 justify-center items-center  bg-[#edf2f2] rounded-xl" >Time Management</p> 
                <p className="w-[150px] p-2 flex mb-3 justify-center items-center  bg-[#edf2f2] rounded-xl" >Flexibility</p> 
                <p className="w-[80px] p-2 flex mb-3 justify-center items-center  bg-[#edf2f2] rounded-xl" >Print</p> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FotterResume;
