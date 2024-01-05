import React from "react";
// Components
import SharedLayout from "./Componets/SharedLayout/SharedLayout";
import HomePage from "./Componets/Pages/HomePage";
import AboutPage from "./Componets/Pages/AboutPage";
import MenuPage from "./Componets/Pages/MenuPage";
import BookPage from "./Componets/Pages/BookTablesPage";
//  react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Componets/Cart";
// weather
import Main from './Componets/WeatherWebComponents/Main'
 import Home from './Componets/WeatherWebComponents/Pages/Home';
import Calender from "./Componets/WeatherWebComponents/Pages/Calender";
import ForeCast from "./Componets/WeatherWebComponents/Pages/ForeCast";
import Location from "./Componets/WeatherWebComponents/Pages/Location";
import Settings from "./Componets/WeatherWebComponents/Pages/Settings";
import Analytics from "./Componets/WeatherWebComponents/Pages/Analytics";
   
 const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* fastfoodshop */}
        <Route path="/" element={<SharedLayout  />}>
          <Route  index element={<HomePage  />} />
          <Route path="About"   element={< AboutPage />}/> 
          <Route path="BookTable"   element={<BookPage  />}/> 
          <Route path="Menu"   element={<MenuPage  />}/> 
          <Route path="Cart"   element={<Cart  />}/> 
        </Route>

        {/* waether */}
        <Route path="Weather" element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path="ForeCast" element={<ForeCast/>}/>
          <Route path="Analytics" element={<Analytics/>}/>
          <Route path="Calender" element={<Calender/>}/>
          <Route path="Location" element={<Location/>}/>
          <Route path="Settings" element={<Settings/>}/>
         </Route>
  
 
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
