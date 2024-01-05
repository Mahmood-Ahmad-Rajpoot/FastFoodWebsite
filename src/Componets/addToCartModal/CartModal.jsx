import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input, Select } from "antd";

const { TextArea } = Input;
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../features/CartModal";
import transition from "../DiscountedDishes/Discounted.module.css";
import { addToCart } from "../../features/cart";
import { setCartQuantity } from "../../features/productsData";
const CartModal = () => {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const { show, product } = useSelector((store) => store.cartModal);

  const [value, setValue] = useState({ instructions: "", unAvailable: "Cancel my order" });
  //  if item not present in cart handler
  console.log("changes:", value);
  // add to cart handler
  const handleAdd = () => {
    dispatch(setCartQuantity({id:product.id, quantity:quantity, add:true}))
    dispatch(
      addToCart({
        product: product,
        instructions: value.instructions,
        unAvailable: value.unAvailable,
        quantity: quantity,
      })
    );
    dispatch(setShow());
  };
  const handleCancel = () => {
    dispatch(setShow());
  };
  const modalFooter = (
    <div className="w-full flex gap-3 border-top pt-3">
      <div className="flex items-center gap-1">
        <Button
          onClick={() => setquantity(quantity - 1)}
          disabled={quantity === 1}
          className="flex justify-center items-center text-[--color-yellow] hover:!text-[--color-yellow] hover:!border-[--color-yellow] "
          shape="circle"
        >
          <MinusOutlined />
        </Button>

        <p className="text-[1rem] text-[--color-black] font-semibold ">
          {quantity}
        </p>
        <Button
          onClick={() => setquantity(quantity + 1)}
          className="flex justify-center items-center text-[--color-yellow] hover:!text-[--color-yellow] hover:!border-[--color-yellow] "
          shape="circle"
        >
          <PlusOutlined />
        </Button>
      </div>

      <Button
        onClick={handleAdd}
        className={
          transition.applyCartModal +
          " w-full text-[--color-white] hover:!text-[--color-white] bg-[--color-yellow]"
        }
      >
        Add to Cart
      </Button>
    </div>
  );
  return (
    <Modal open={show} footer={modalFooter} onCancel={handleCancel}>
      <img className="w-[500px] h-[200px]" src={product.img} />

      <div className="h-[150px] overflow-y-scroll pr-3">
        <p className="text-[1.8rem] text-[--color-black] font-semibold mt-4">
          {" "}
          {product.name}
        </p>
        <p className="text-[1rem] text-[grey]">Some contents...</p>
        <p className="text-[grey] text-[1rem] font-semibold ">
          <s>{product.price + 40}</s>
        </p>
        <p className="text-[--color-black] text-[1rem] font-semibold mb-2">
          Rs.{product.price}
        </p>
        <hr></hr>
        <h1 className="text-[1.5rem] text-[--color-black] font-bold mt-5 mb-1">
          Special Instrutions
        </h1>
        <p className="text-grey text-[1rem] font-normal mb-3">
          tell what do you want to know the restaurant
        </p>
        <TextArea
          value={value.instructions}
          onChange={(e) => setValue({ ...value, instructions: e.target.value })}
          placeholder="eg. mayo excluded"
          autoSize={{
            minRows: 3,
          }}
        />
        <h1 className="text-[1.5rem] text-[--color-black] font-bold mt-5 mb-3">
          {" "}
          If this item is not available?
        </h1>

        <Select
          className="text-[--color-black] border-[--color-black]"
          defaultValue="Cancel my order"
          style={{ width: " 100%", marginBottom: "20px" }}
          onChange={(e) => setValue({ ...value, unAvailable: e })}
          options={[
            {
              options: [
                { label: "Call me", value: "Call me" },
                { label: "Cancel my order", value: "Cancel my order" },
              ],
            },
          ]}
        />
      </div>
    </Modal>
  );
};

export default CartModal;
