import React from "react";
import { Button, Checkbox, Form, Input, DatePicker, Select } from "antd";
import SelectPersons from "./SelectPersons";
import CustomButton from "../../Button/Button";
const BookForm = () => {
  const btnStyles = `mt-8 text-white bg-[--color-yellow] flex justify-center
  items-center text-[17px] w-[150px] px-[30px] h-[40px] pb-2 rounded-full
   border-none hover:!bg-[--color-yellow] `;
  const { Option } = Select;
  const fieldStyles = ` rounded-md placeholder:!text-[--color-black] h-[50px] focus:border-0  w-full`;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //   phone number

  const initialValues = {
    mySelectField: "+92", // Set the default value for the Select component
  };
  return (
    <div className="md:w-[600px] lg:w-1/2 w-full">
      <Form
        name="basic"
        style={{ fontFamily: "var(--main-font-family)", maxWidth: "100%" }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className={fieldStyles} placeholder="  Your Name" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <div className="w-full flex gap-2 items-center h-[50px]">
            <Select
              value="+92"
              className="h-full  "
              style={{ width: 80, height: "inherit" }}
              disabled
              options={[{ value: "lucy", label: "Lucy" }]}
            />
            <Input
              className={fieldStyles}
              placeholder="Enter Your Phone Number"
              // addonBefore={prefixSelector}
            />
          </div>
        </Form.Item>
        <Form.Item name={["user", "email"]} rules={[{ type: "email" }]}>
          <Input className={fieldStyles} placeholder="Enter Your Mail" />
        </Form.Item>
        <SelectPersons fieldStyles={fieldStyles} />
        <Form.Item>
          <DatePicker className={fieldStyles} placeholder="yyyy/mm/dd" />
        </Form.Item>

        <Form.Item className="w-full justify-start">
          <Button className={btnStyles} htmlType="submit">
            Order Now
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookForm;
