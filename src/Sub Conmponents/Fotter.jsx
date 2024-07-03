import React from 'react'

const Fotter = ({fotterTaitel , fotterImage ,fotterImage2,fotterImage3,fotterImage4,fotterImage5,fotterImage6}) => {
  return (
    <>
    <div className=" mt-[100px] w-full h-full flex justify-center">
            <div className="w-[1150px] h-full bg-[#f8fbfb] rounded-2xl flex pt-10 pb-10 flex-col items-center justify-center ">
              <div className="  ">
                <h2 className=" text-[40px] font-poppins font-medium ">
                  {fotterTaitel}
                </h2>
              </div>
              <div className="p-10 w-full flex justify-between">
                <img
                  className=" w-[100px] h-[70px] "
                  src={fotterImage}
                  alt="slide image"
                />
                <img
                  className=" w-[80px] h-[70px] "
                  src={fotterImage2}
                  alt="slide image"
                />
                <img
                  className=" w-[80px] h-[70px] "
                  src={fotterImage3}
                  alt="slide image"
                />
                <img
                  className=" w-[140px] h-[70px] "
                  src={fotterImage4}
                  alt="slide image"
                />
                <img
                  className=" w-[100px] h-[70px] "
                  src="photos/slide5.png"
                  alt="slide image"
                />
                <img
                  className=" w-[80px] h-[70px] "
                  src="photos/slide6.png"
                  alt="slide image"
                />
              </div>
            </div>
          </div>
      
    </>
  )
}

export default Fotter
