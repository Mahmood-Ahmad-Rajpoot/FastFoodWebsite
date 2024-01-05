import React from "react";
import CustomButton from "../Button/Button";
import { cart } from "../../assets";
import { PropTypes } from "prop-types";
import Styles from './discounted.module.css'
const DiscountedCard = (props) => {
  const btnStyles = `mt-8 text-white bg-[--color-yellow] flex justify-center 
   items-center text-[17px] w-[150px] h-[50px] px-[30px]   rounded-full text-white
    border-none hover:!bg-[--color-yellow] `;
    const handler = ()=>{

    }
  const btn = {
    btnText: "Order Now",
    btnStyles:btnStyles ,
    btnHandler: handler,
    btnIcon: cart,
  };
 
  console.log(typeof btn.btnIcon);
  return (
    <div className="flex sm:flex-row flex-col gap-5 md:w-[500px] w-full rounded-lg py-2 sm:px-5 px-2 items-center mb-4  bg-[--bg-color]  ">
      <div className=" w-[200px] flex shrink-0 items-center justify-center  h-[200px] border-5 border-[--color-yellow] overflow-hidden rounded-[100%]">
      <img 
        className={Styles.applyOnImage + "  "}
        src={props.img}
        alt="image"
      />
      </div>
      
      <div className="flex flex-col shrink" style={{fontFamily:'var(--main-font-family)'}}>
        <h1 className="text-[24px] text-[--color-white]  ">{props.name}</h1>
        <h2 className={`text-[2.5rem] text-[--color-white]  `}>{props.discount}</h2>
        <CustomButton
          btnIcon={btn.btnIcon}
          btnText={btn.btnText}
          btnStyles={btn.btnStyles}
          btnHandler={btn.btnHandler}
        />
      </div>
    </div>
  );
};
DiscountedCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  discount: PropTypes.string,
};
export default DiscountedCard;
