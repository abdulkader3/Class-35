import React from "react";
import Copyright from "./Copyright";
import ContactDiv from "../Sub Conmponents/ContactDiv";
import ContactNameDiv from "../Sub Conmponents/ContactNameDiv";

const ContactsComponent = () => {
  return (
    <>
      <div className="flex justify-center mt-[100px]">
        <div className="w-[1300px] h-full bg-white rounded-[20px] flex flex-col">
          <div className="flex items-center gap-[50px] pl-[50px] pt-10">
            <h1 className=" text-[40px] font-roboto font-bold ">Contact</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className=" w-full h-full justify-center gap-10 mt-20 flex">
            <div className="flex flex-col gap-5">
              <ContactDiv
                image="photos/phonethelast.png"
                tailel="phone :"
                details="+88 01970713237"
                padding="pl-10"
                color="bg-[#fff4f4]"
              />

              <ContactDiv
                image="photos/emailthelast.png"
                tailel="Email :"
                details="abdulkader.wabdeveloper@gmail.com"
                color="bg-[#eef5fa]"
                padding="pl-5"
              />

              <ContactDiv
                image="photos/map.png"
                tailel="Address :"
                color="bg-[#fff4f4]"
                details="Bangladesh , Dhaka"
                padding="pl-10"
              />
            </div>
            <div className="w-[800px] h-full rounded-xl bg-[#f8fbfb] ">
              <div className=" flex flex-col gap-5 pl-10 pt-5 ">
                <p className="text-[25px] font-normal font-poppins text-[#44566c] ">
                  I'm Always Open To Discussing Produuct
                </p>
                <h2 className=" text-[25px] font-bold font-poppins text-[#000] ">
                  design work or partnerships.
                </h2>
                <ContactNameDiv textofname="Name*" />
                <ContactNameDiv textofname="Email*" />
                <ContactNameDiv textofname="massage*" />
                <button className=" w-[100px] rounded-md h-10 border-[2px] hover:shadow-lg active:scale-125 transition-all mb-5 ">
                  {" "}
                  submit{" "}
                </button>
              </div>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default ContactsComponent;
