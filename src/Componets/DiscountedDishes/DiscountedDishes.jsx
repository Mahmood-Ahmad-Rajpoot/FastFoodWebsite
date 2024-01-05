import React from "react";
import DiscountedCard from "./DiscountedCard";
import { img1, img2 } from "../../assets";
const DiscountedDishes = () => {
  const data = [
    {
      img: img1 ,
      name: "Burger",
      discount: "10% off",
    },
    {
      img: img2 ,
      name: "Chripy Fries",
      discount: "15% off",
    },
  ];
   return (
    <div className="w-full flex justify-center flex-wrap gap-4 pt-[150px] px-[20px] md:px-[100px]">
      {data.map((d, ind) => {
        return ( 
          <DiscountedCard key={ind} img={d.img} name={d.name} discount={d.discount} />
        )
      })}
    </div>
  );
};

export default DiscountedDishes;
