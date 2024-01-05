import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
const ContactDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <h1
        style={{ fontFamily: "var(--main-font-family)" }}
        className="text-[28px] text-[--color-white] mb-5"
      >
      Contact Us

      </h1>
      <div className="flex flex-col gap-3 items-center " >
        <span className="flex gap-2 cursor-pointer text-[--color-white] hover:text-[--color-yellow]">
          <PlaceIcon /> <p className="text-[1rem]">Location</p>
        </span>
        <span className="flex gap-2 cursor-pointer text-[--color-white] hover:text-[--color-yellow]">
          <PhoneIcon /> <p className="text-[1rem]">+92555688566</p>
        </span>
        <span className="flex gap-2 cursor-pointer text-[--color-white] hover:text-[--color-yellow]">
          <MailIcon /> <p className="text-[1rem]">my@gmail.com</p>
        </span>
      </div>
    </div>
  );
};

export default ContactDetails;
