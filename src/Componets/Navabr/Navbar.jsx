import React, { useState } from "react";
import Styles from "./navbar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button , Badge} from "antd";
import CustomButton from "../Button/Button";
import { navStyles, btnStyles } from "./navStyles";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {quantity} = useSelector(s=>s.cart)
  const [open, setOpen] = useState(false);
  const linkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "var(--color-yellow) " : "var(--color-white)",
    };
  };

  return (
    <div className={navStyles}>
      <a className={Styles.navbarBrand}>
        <span className={Styles.span1}>Feane</span>
      </a>
      <div
        className={`${Styles.showHide} md:flex     ${open ? " " : " hidden"}`}
      >
        <ul className={`${Styles.listStyles} md:flex-row  flex-col  `}>
          <li className="h-[20px]"> </li>
          <NavLink style={linkStyles} to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink style={linkStyles} to={"/About"}>
            {" "}
            <li>About</li>
          </NavLink>
          <NavLink style={linkStyles} to={"/Menu"}>
            {" "}
            <li>Menu</li>
          </NavLink>
          <NavLink style={linkStyles} to={"/BookTable"}>
            {" "}
            <li>Book Table</li>
          </NavLink>
        </ul>
        {/* Button and icons */}
        <div className={Styles.logos}>
          <span className={Styles.span1}>
            <PersonIcon />
          </span>
          <NavLink style={linkStyles} to={"/Cart"}>
           
            <Badge dot={quantity>0}>
              <ShoppingCartIcon className={Styles.span1}  />
              </Badge>
          
          </NavLink>
          <span className={Styles.span1}>
            {" "}
            <SearchIcon />
          </span>
          <CustomButton btnText="Order Online" btnStyles={btnStyles} />
        </div>
      </div>
      <div
        className="md:hidden block cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Navbar;
