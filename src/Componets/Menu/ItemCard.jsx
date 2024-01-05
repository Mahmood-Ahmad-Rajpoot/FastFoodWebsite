import React, { useEffect, useState } from "react";

import { img3, cart, check } from "../../assets";
import CustomButton from "../Button/Button";
import { Slider, Typography,Badge } from "antd";
const { Paragraph } = Typography;

import Styles from "./menu.module.css";
import transitionStyles from "../DiscountedDishes/discounted.module.css";

import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../addToCartModal/CartModal";
import { setShow } from "../../features/CartModal";
import { setProductQuantity } from "../../features/cart";
  
const ItemCard = (props) => {
 
  const dispatch = useDispatch();
  const { show } = useSelector((store) => store.cartModal);
  const {quantity } = useSelector((store) => store.cart)
  // buttons styles
  const btnStyles = `w-[40px] h-[40px] p-2 border-0  
   rounded-full flex justify-center items-center bg-[--color-yellow]`;
  //  handlers
  const handler = () => {};
  // console.log("what is coming :" , props);
  
  return (
    <>
      <div
        onClick={() => dispatch(setShow(props))}
        className={`
        ${transitionStyles.transitionApply}  h-[550px]
             bg-[--bg-color] rounded-lg  cursor-pointer 
      `}
      >
        <div className={Styles.imageContainer}>
          <img
            className={transitionStyles.applyOnImage + " w-[80%] h-[80%]"}
            src={props.img}
          ></img>
        </div>
        <div className="flex flex-col px-4 py-4">
          <h1 className="text-[1.25rem]   font-semibold text-[--color-white] mb-2">
            {props.name}
          </h1>

          <Paragraph
            className="text-[1rem] font-md text-[--color-white] mb-5"
            ellipsis={{
              rows: 3,
            }}
          >
            {props.description}
          </Paragraph>
          <div className="w-full flex justify-between self-end items-center">
            <p className="text-[1rem] font-md text-[--color-white]">Rs.{props.price}</p>
            <Badge count={props.quantity}> 
            <CustomButton
              btnStyles={btnStyles}
              btnIcon={cart}
              btnHandler={handler}
            /></Badge>
          </div>
        </div>
      </div>
      {show && <CartModal />}
    </>
  );
};
// proptyppes
ItemCard.propTypes = {
  img: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  height: PropTypes.string,
  id: PropTypes.number,
  quantity:PropTypes.number,
};
export default ItemCard;
