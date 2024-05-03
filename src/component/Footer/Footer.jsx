import React from "react";
import footerimg from "../../assets/Logo.png";
import { GrInstagram } from "react-icons/gr";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import img from "../../../src/assets/dmk4.jpg"

const Footer = () => {
  return (
    <div>
      <div className="bg-[#a30001] w-full mt-[50px] flex flex-col items-center justify-center gap-[25px] lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center lg:w-[40%]">
          <img
            src={footerimg}
            alt="logo"
            className="w-[200px] h-[150px] object-cover"
          />
          <h1 className="text-[13px] font-extrabold text-center p-2 lg:text-[16px]">
            திராவிட மாடல் அரசின் மகத்தான செயலி "மக்களுடன் ஸ்டாலின்"
          </h1>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[15px] font-extrabold lg:text-[18px]">வெளியீடுகள்</h1>
          <h1>
            <a className="text-[11px] font-bold">முகப்பு</a>
          </h1>
          <h1>
            <a className="text-[11px] font-bold">நம்பிக்கை சூரியன்</a>
          </h1>
          <h1>
            <a className="text-[11px] font-bold">கோரிக்கை</a>
          </h1>
          <h1>
            <a className="text-[11px] font-bold">புகைப்படம்</a>
          </h1>
          <h1>
            <a className="text-[11px] font-bold">தொடர்புகொள்ள</a>
          </h1>
        </div>
        <div className="flex gap-[5px] items-center justify-center pb-[4px] lg:gap-[30px]">
          <GrInstagram />
          <RiFacebookCircleFill />
          <FaXTwitter />
          <IoLogoYoutube />
        </div>
      </div>
      <img src={img}/>
      <p className="w-full h-[1px] bg-black"> </p>
      <h1 className="text-[9px] text-center bg-[#a30001] lg:text-[10px]">
        &copy;2024 VPRS Solutions
      </h1>
    </div>
  );
};

export default Footer;
