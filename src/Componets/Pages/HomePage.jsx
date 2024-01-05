import React from "react";
// Components
import NavAndSlider from "../NavAndSlider/NavAndSlider";
import DiscountedDishes from "../DiscountedDishes";
import Menu from "../Menu";
import About from "../About/About";
import BookTable from "../BookTable";
import Customers from "../Customers/Customers";
import Footer from "../Footer";
const HomePage = () => {
  return (
    <div className="appStyles">
      {/* navbar and slider rendered in this component for the theme customization  */}
      <NavAndSlider />
      {/* menu  */}
      <Menu />
      {/* About  */}
      <About />
      {/* book a Table form */}
      <BookTable />
      {/* customer reviews */}
      <Customers />
      {/* Footer */}
      <Footer />
 
    </div>
  );
};

export default HomePage;
