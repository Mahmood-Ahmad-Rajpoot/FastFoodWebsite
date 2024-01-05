import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
const RightsReserved = () => {
  return (
    <div className="w-full flex justify-center mt-[100px] pb-[100px]"> 
      <span className="flex gap-2 items-center text-[--color-white]">
        {" "}
        <CopyrightIcon />{" "}
        <p className="text-[--color-white] text-[1rem]">All Rights Reserved</p>
      </span>
    </div>
  );
};

export default RightsReserved;
