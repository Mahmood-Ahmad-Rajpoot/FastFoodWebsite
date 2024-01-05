import React, {useEffect,  useState } from "react";
import ItemCard from "./ItemCard";
import { getData } from "../FetchData/fetchData";
import { Spin, Skeleton } from "antd";
import { container, item } from "./motionVariables";

import { motion } from "framer-motion";
import CustomButton from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setProductQuantity } from "../../features/cart";

const MenuItems = () => {
 
  
 const cart = useSelector((s)=>s.cart);
 const [render , setRender] = useState(false);
 useEffect(() =>{setRender(!render)
 },[cart.quantity])
  const { products } = useSelector((s) => s.products);
   const dispatch = useDispatch();
  // state;
  const [show, setShow] = useState(4);

  // handler
  const handler = () => {
    if (products.length > show) setShow(show + 4);
    else setShow(4);
  };

  // useEffect(() => {
  //   setRender(true);
  // }, [quantity]);
  // styles
  const btnStyles = `text-white bg-[--color-yellow] flex border-none
  justify-center items-center text-[17px] w-[200px]
  px-[30px] h-[50px]   rounded-full hover:!bg-[--color-yellow] `;

 
  return (
    <>
      <motion.div
        className="container grid   md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {products.map((d, ind) => {
          
          const {product, quantity } = d
           // callIt(parseInt(d.idCategory));
          const price =
            Math.floor(Math.random() * ((250 - 100 + 1) / 10)) * 10 + 100;
          return ind < show ? (
            <div key={ind} className="item" variants={item}>
              <ItemCard
                img={product.strCategoryThumb}
                description={product.strCategoryDescription}
                name={product.strCategory}
                price={price}
                id={parseInt(product.idCategory)}
                quantity={quantity}
              />
            </div>
          ) : (
            <div key={ind}></div>
          );
        })}
      </motion.div>
      <div className="w-full flex justify-center mt-[50px]">
        <CustomButton
          btnText={products.length > show ? "View More" : "View Less"}
          btnStyles={btnStyles}
          btnHandler={handler}
        />
      </div>
    </>
  );
};

export default MenuItems;
