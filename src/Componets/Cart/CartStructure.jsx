import React from "react";
import { Tooltip, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Styles from "./cart.module.css";
const CartStructure = (props ) => {
  return (
    <div className="w-full p-2">
      <div className={Styles.cartStructure}>
        <div className="flex justify-between items-center ">
          <h3>Sub Total</h3>
          <h3>{props.total}</h3>
        </div>
        <div className="flex justify-between items-center ">
          <h3>Delivery</h3>
          <h3 className="text-[1rem] font-normal text-[--color-yellow]">
            Free
          </h3>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex gap-2">
            <h3>Service Fee </h3>{" "}
            <Tooltip title="To make the customer service btter." color={"var(--color-yellow)"}>
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <h3> Rs. 8.99</h3>
        </div>
      </div>
    </div>
  );
};

export default CartStructure;
