import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
const SocialMediaLinks = () => {
  const linkStyles = `w-[30px] h-[30px] p-3 rounded-full 
  flex items-center justify-center hover:text-[--color-yellow] bg-[--color-white]`;

  return (
    <div className="flex flex-col justify-center items-center w-[200px] gap-4">
      <h1
        style={{ fontFamily: "var(--main-font-family)" }}
        className="text-[28px] text-[--color-white]  mb-4"
      >
        Feane
      </h1>
      <p className="text-[1rem] text-[--color-white] text-center">
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </p>
      <div className="flex gap-2">
        <span className={linkStyles}>
          <LinkedInIcon />
        </span>
        <span className={linkStyles}>
          {" "}
          <FacebookIcon />
        </span>
        <span className={linkStyles}>
          <InstagramIcon />
        </span>
        <span className={linkStyles}>
          {" "}
          <PinterestIcon />
        </span>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
