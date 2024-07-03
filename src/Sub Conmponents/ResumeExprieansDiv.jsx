import React from 'react'

const ResumeExprieansDiv = ({Resumeicon, textTaitel , date1 , details1 , date2 ,date3 , details2, details3 }) => {
  return (
    <>
    <div className=" flex flex-col gap-[20px] ">
              <div className=" flex gap-2 ">
                {Resumeicon}
                <h2 className=" font-medium text-[26px] font-poppins ">
                  {textTaitel}
                </h2>
              </div>
              <div className=" bg-[#fff4f4] flex flex-col justify-center items-center  w-[350px] h-[140px] rounded-md ">
                <div className=" text-start pl-4 pr-3">
                  <p>{date1}</p>
                  <p>{details1}</p>
                </div>
              </div>
              <div className=" bg-[#eef5fa] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pl-4 pr-3">
                  <p>{date2}</p>
                  <p>{details2}</p>
                </div>
              </div>
              <div className=" bg-[#fff4f4] w-[350px] flex flex-col justify-center items-center h-[140px] rounded-md ">
                <div className=" text-start pl-4 pr-3">
                  <p>{date3}</p>
                  <p>{details3}</p>
                </div>
              </div>
            </div>
      
    </>
  )
}

export default ResumeExprieansDiv
