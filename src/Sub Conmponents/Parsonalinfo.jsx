import React from "react";
import { Link } from "react-router-dom";

const Parsonalinfo = ({ linkIcon, iconlink }) => {
  return (
    <>
      <div className="W-[300PX] flex gap-[20px]">
        <div className=" w-[35px] h-[35px] bg-white p-[8px] rounded-[7px]  ">
          {" "}
          <Link to={iconlink}>{linkIcon}</Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Parsonalinfo;
