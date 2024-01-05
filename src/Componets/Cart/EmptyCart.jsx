import React from "react";
import { Button, Empty } from "antd";
import CustomButton from "../Button/Button";
import { btnStyles } from "../Navabr/navStyles";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Empty
      className="pt-[150px] flex flex-col justify-center items-center"
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={<span>Add Items Right Now !</span>}
    >
      <CustomButton
        btnStyles={btnStyles}
        btnText="Add Items"
        btnHandler={() => navigate("/Menu")}
      />
    </Empty>
  );
};
export default EmptyCart;
