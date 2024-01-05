import React, { useState } from "react";
import { burger } from "../../assets";
import { arr } from "./data";
import { Button } from "antd";
import Styles from "./slider.module.css";
import CustomBtn from "../Button/Button";
const Slider = () => {
  const [index, setIndex] = useState(0);
  // button styles
  const btnStyles = `mt-8 text-white bg-[--color-yellow] flex justify-center
   items-center text-[17px] w-[150px] px-[30px] h-[40px] pb-2 rounded-full
    border-none hover:!bg-[--color-yellow] `;
  // carousel handler
    const carouselHandler = (ind) => {
    
    setIndex(ind);
  };
  // btn handler 
  const orderHandler = ()=>{
    console.log('btn clicked');
  }

  return (
    <div
      className={`w-full md:px-[50px] px-[10px] md:pt-[100px] pt-[150px] z-[9999]   bg-center  flex flex-col md:flex-row  justify-between `}
    >
      <div className={Styles.backgroundImage}>
      <div id="animateCarousel" className={Styles.animation + " md:w-[55%] w-full  "}>
        <h1
          style={{ fontFamily: `var(--main-font-family)` }}
          className="text-[3.5rem] text-[--color-white] mb-3"
        >
          {arr[index].heading}
        </h1>
        <p className="text-white text-[1rem]">{arr[index].paragraph}</p>
        {/* button component */}
        <CustomBtn
          btnText="Order Now"
          btnStyles={btnStyles}
          handlerFunc={orderHandler}
        />
      </div>
      <div className="flex gap-2 items-center mt-[100px] mb-5">
        {arr.map((__, ind) => {
          return (
            <button
              key={ind}
              onClick={() => carouselHandler(ind)}
              className={`${
                ind === index
                  ? "w-[20px] h-[20px] bg-[--color-yellow]"
                  : " bg-white w-[12px] h-[12px] "
              } rounded-full  `}
            ></button>
          );
        })}
      </div>
      </div>
      {/* <img className="  w-full md:w-[70%] h-full mt-[90px]" src={burger} /> */}
    </div>
  );
};

export default Slider;
