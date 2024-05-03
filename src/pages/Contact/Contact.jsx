import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCallFill } from "react-icons/pi";

const Contact = () => {
  return (
    <div id="Contact">
      <h1 className="text-[20px] pt-[25px] pb-[20px] mt-[30px] font-black text-center lg:text-[25px] lg:pt-[70px] lg:pb-[50px]">
        தொடர்புகொள்ள
      </h1>
      <div className="lg:w-full lg:flex lg:items-center lg:justify-around  ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004957.5487872991!2d78.19490235172046!3d10.292538031883986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00782d25029679%3A0x62777b7869041f6!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714628448046!5m2!1sen!2sin"
          width="300"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full p-[20px] lg:w-[60%]"
        ></iframe>
        <div className="flex flex-col justify-center items-center gap-[10px] lg:w-[40%] lg:gap-[30px]">
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="flex flex-col items-center justify-center gap-[10px] text-white w-[260px] h-[100px] p-[3px] bg-[#000] rounded-[5px] lg:w-[300px] lg:shadow-[#555] lg:shadow-2xl"
          >
            <div className="flex items-center justify-center gap-[20px] w-full">
              <IoLocationSharp className="text-[25px] font-extrabold text-[#a30001]" />
              <h1 className="text-[20px] font-black text-[#a30001] ">முகவரி</h1>
            </div>
            <h1 className="text-[15px] font-extrabold text-center ">
              புதுக்கோட்டை மாவட்டம், தமிழ்நாடு
            </h1>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="flex flex-col items-center gap-[10px] justify-center text-white w-[260px] h-[100px] p-[2px] bg-[#000] rounded-[5px] lg:w-[300px] lg:shadow-[#555] lg:shadow-2xl"
          >
            <div className="flex items-center justify-center gap-[20px] w-full">
              <HiOutlineMail className="text-[25px] font-extrabold text-[#a30001]" />
              <h1 className="text-[20px] font-black text-[#a30001]">
                மின்னஞ்சல்
              </h1>
            </div>
            <h1 className="text-[15px] text-center font-extrabold ">
              hopeofpudukkottai@gmail.com
            </h1>
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="flex flex-col items-center gap-[10px] justify-center text-white w-[260px] h-[100px] p-[2px] bg-[#000] rounded-[5px] lg:w-[300px] lg:shadow-[#555] lg:shadow-2xl"
          >
            <div className="flex items-center justify-center gap-[20px] w-full">
              <PiPhoneCallFill className="text-[25px] font-extrabold text-[#a30001]" />
              <h1 className="text-[20px] font-black text-[#a30001]">
                கைபேசி எண்
              </h1>
            </div>
            <h1 className="text-[15px] text-center font-extrabold ">
              +91 94431 31041
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
