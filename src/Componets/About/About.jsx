import React from "react";
import CustomButton from "../Button/Button";
import { weAreFeane } from "../../assets";

const About = () => {
  // styles
  const btnStyles = `text-white bg-[--color-yellow] flex border-none
    justify-center items-center text-[17px] w-[200px]
    px-[20px] h-[50px]   rounded-full hover:!bg-[--color-yellow] `;
  const aboutMainDivstyles = `w-full md:px-[50px] px-[20px] md:h-[700px] h-auto 
    md:flex-row  
      flex flex-col-reverse bg-[--bg-color] py-[100px]   
      justify-center `;

      // handlers
  const handler = () => {};

  return (
    <div className={aboutMainDivstyles}>
      <img
        className="md:w-1/2 w-full h-[100%] shrink-0 flex"
        src={weAreFeane}
        alt="image"
      />
      <div className="self-center flex flex-col gap-3">
        <h1
          style={{ fontFamily: "var(--main-font-family)" }}
          className="text-[2.5rem] font-semibold text-[--color-white] mb-2"
        >
          We Are Feane
        </h1>
        <p className="text-[1rem] font-md text-[--color-white] mb-2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
        </p>
        <CustomButton
          btnStyles={btnStyles}
          btnText="Read More"
          btnHandler={handler}
        />
      </div>
    </div>
  );
};

export default About;
