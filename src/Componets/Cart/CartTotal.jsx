import React from "react";
import Styles from './cart.module.css'
import CustomButton from "../Button/Button";
import { btnStyles } from "../Navabr/navStyles";
const CartTotal = (props) => {
  return (
    <div className="w-full   shadow-[rgba(17,_17,_26,_0.1)_0px_0px_10px_0px] px-3">
      <div className={Styles.carttotal +" flex justify-between mb-2 pt-2"}>
        <span className="flex gap-1">
          <h1>Total</h1> <p>(VAT Incl)</p>
        </span>
        <h1>Rs.{props.total}</h1>
      </div>
      <CustomButton btnStyles={btnStyles+' w-full'} btnText='Review Payment' />
    </div>
  );
};

export default CartTotal;
