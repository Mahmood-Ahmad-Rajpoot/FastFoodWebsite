import React from "react";

const Timings = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        style={{ fontFamily: "var(--main-font-family)" }}
        className="text-[28px] text-[--color-white] mb-8"
      >
        Opening Hours
      </h1>
      <p className="text-[1rem] text-[--color-white] text-center">EveryDay</p>
      <p className="text-[1rem] text-[--color-white] text-center">
        10:00 AM - 10:00 PM
      </p>
    </div>
  );
};

export default Timings;
