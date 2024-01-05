import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  addOne,
  addToCart,
  minusOne,
  removeFromCart,
} from "../../features/cart";
import { useDispatch } from "react-redux";
import { setCartQuantity } from "../../features/productsData";
const CartItemCard = (props) => {
  const dispatch = useDispatch();
  const btnStyles = `flex justify-center items-center text-[--color-yellow]  text-[1.5rem] p-1
    hover:!text-[--color-white] hover:!bg-[--color-yellow] hover:!border-[--color-yellow] `;
  //
  const handleAdd = (e, quantity) => {
    if (e === 0) {
    dispatch( setCartQuantity( { id:product.product.id, quantity:1, add:false }))
      if (quantity === 1) dispatch(removeFromCart(product.product.id));
      else dispatch(minusOne(product.product.id));
    }
    else if (e === 1) {
    dispatch( setCartQuantity( { id:product.product.id, quantity:1, add:true }))

      dispatch(addOne(product.product.id));}
  };
  // const {product}
  const { product } = props;
  return (
    <div className="   flex gap-3 mb-4 border-bottom pb-5">
      <img
        className="w-[100px] h-[100px] rounded-xl border"
        src={product.product.img}
      />
      <div className="w-1/2">
        <p
          style={{ fontFamily: "var(--main-font-family)" }}
          className="text-[--color-yellow] font-semibold text-[1.3rem] mb-8"
        >
          {product.product.name}
        </p>
        <div className="flex w-full justify-between items-center">
          <h1 className="text-[1rem] font-semibold text-[--color-black]">
            {product.product.price}
          </h1>
          <div className="flex justify-between items-center gap-1 w-[100px] h-[40px] border rounded-full">
            <Button
              type="link"
              onClick={() => handleAdd(0, product.quantity)}
              className={btnStyles}
              shape="circle"
            >
              {product.quantity === 1 ? <DeleteOutlined /> : <MinusOutlined />}
            </Button>

            <p className="text-[1rem] text-[--color-black] font-semibold ">
              {product.quantity}
            </p>
            <Button
              type="link"
              onClick={() => handleAdd(1, product.quantity)}
              className={btnStyles}
              shape="circle"
            >
              <PlusOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
