import React from 'react'

const WhatIdoDiv = ({icons , taitel ,iDotext , divcolor}) => {
  return (
    <>
    <div className={`w-[356px] h-[195px] rounded-[12px] ${divcolor} flex gap-6 pl-5 pt-5 pr-4`}>
        <div className="">{icons}</div>
        <div className=" flex flex-col gap-2">
            <h2 className=' text-[20px] font-medium font-poppins ' >{taitel} </h2>
            <p className=' text-[#44566c] text-[16px] font-poppins font-normal ' >{iDotext} </p>
        </div>
    </div>
      
    </>
  )
}

export default WhatIdoDiv
