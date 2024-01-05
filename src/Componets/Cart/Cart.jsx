import React from "react";
import CartItemCard from "./CartItemCard";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartStructure from "./CartStructure";
import CartTotal from "./CartTotal";

const Cart = () => {
  const { products, quantity, total } = useSelector((s) => s.cart);
  //   console.log(products);
  return products.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="pt-[150px] w-full h-[85vh] flex flex-col justify-center items-center px-8">
        <h1 className="font-semibold text-[1.2rem] text-[--color-black] mb-5">
          Your Items
        </h1>
      <div className="sm:w-[500px] w-full h-[80vh] ">
        <div className="w-full h-[300px] overflow-y-scroll mb-3 pr-2">
        
        {products.map((product, ind) => {
          return <CartItemCard key={ind} product={product} />;
        })}
        <CartStructure quantity={quantity} total={total} />
        </div>
      <CartTotal total={total+8.99}/>
      </div>
    </div>
  );
};

export default Cart;
