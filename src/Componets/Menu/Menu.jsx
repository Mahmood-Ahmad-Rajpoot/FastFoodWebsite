import React from "react";
import Heading from "./Heading";
import ItemsFilterButtons from "./ItemsFilterButtons";
import MenuItems from "./MenuItems";
import CustomButton from "../Button/Button";
import DiscountedDishes from "../DiscountedDishes";

const Menu = () => {

  // handler
  const handler = () => {};
  return (
    <>
      <DiscountedDishes />
      <div className=" lg:px-[90px] sm:px[10px] px-[20px] mb-[80px]">
        <Heading />
        <ItemsFilterButtons />
        <MenuItems />
      
      </div>
    </>
  );
};

export default Menu;
