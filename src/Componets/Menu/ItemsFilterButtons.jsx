import React, { useState } from "react";
import CustomButton from "../Button/Button";

const ItemsFilterButtons = (props) => {
  const arr = ["All", "Burger", "Fries", "Pasta", "Pizza"];
  const btnStyles = `text-[--color-black] flex  justify-center
   items-center  text-[1rem] pb-2 h-[40px]  rounded-full w-[80px] bg-none 
   border-none hover:bg-[--bg-color] hover:!text-[--color-white]   `;
  const handler = () => {};
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-5 justify-center items-center flex-wrap  mb-[40px]">
      {arr.map((d, ind) => {
        return (
          <CustomButton onClick={()=>setActive(d)}
            key={ind}
            btnText={d}
            btnStyles={
              d !== active?
                 btnStyles
                : btnStyles + "bg-[--bg-color] text-[--color-white]"
            }
            btnHandler={handler}
          />
        );
      })}
       
    </div>
  );
};

export default ItemsFilterButtons;
