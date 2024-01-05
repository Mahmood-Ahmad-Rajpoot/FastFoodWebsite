import React from "react";
import SideNavigation from "./SideNavigation/SideNavigation";
 import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex w-full h-[100vh]   ">
      <div className="w-[200px] z-[9999] fixed flex flex-col justify-center items-center h-[100vh] bg-[--weather-primary-color]   ">
        <SideNavigation />
      </div>
      <div className="pl-[200px] relative  grow">
      <Outlet />
      </div>
    </div>
  );
};

export default Main;
