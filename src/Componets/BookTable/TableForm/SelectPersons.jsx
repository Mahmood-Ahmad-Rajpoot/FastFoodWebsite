import React, { useState, useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Divider, Input, Select, Space, Button } from "antd";
import { PropTypes } from "prop-types";

let index = 0;
const SelectPersons = (props) => {
  // states
  const [items, setItems] = useState([2, 3, 4 ,5]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  // handlers
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    if (name) {
    setItems([...items, name]);

    }
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return ( 
    <div className="w-full mb-4">
    <Select className={props.fieldStyles  }
      placeholder=" Enter How many Persons "
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: "8px 0",
            }}
          />
          <Space
            style={{
              padding: "0 8px 4px",
            }}
          >
            <Input
              className="rounded-md"
              placeholder="How Many?"
              ref={inputRef}
              value={name}
              onChange={onNameChange}
              onKeyDown={(e) => e.stopPropagation()}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
      options={items.map((item) => ({
        label: item,
        value: item,
      }))}
    />
    </div>
  );
};
SelectPersons.propTypes = {
  fieldStyles: PropTypes.string,
};

export default SelectPersons;
