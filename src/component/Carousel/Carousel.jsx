import React from "react";
import Dmk1 from "../../../src/assets/dmk1.jpg"
import Dmk2 from "../../../src/assets/dmk2.jpg"
import Dmk3 from "../../../src/assets/dmk3.jpg"
import Dmk4 from "../../../src/assets/dmk4.jpg"
import Dmk5 from "../../../src/assets/dmk5.jpg"
import Dmk6 from "../../../src/assets/dmk6.jpg"
import { Carousel } from "flowbite-react";

const slider = [
  Dmk1,
  Dmk2,
  Dmk3,
  Dmk4,
  Dmk5,
  Dmk6
]

const Carousels = () => {
  return (
    <div id="முகப்பு">
      <div className=" h-[260px] md:h-[600px] object-cover ">
      <Carousel slideInterval={5000} className="rounded-none w-full">
  {slider.map((item, idx) => (
    <img
      key={idx}
      src={item}
      alt="img"
      className="w-full"
    />
  ))}
</Carousel>
      </div>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="w-[75%] h-[60px] mt-[20px] ml-[45px] lg:w-[70%] lg:ml-[200px] lg:h-[120px] bg-[#A30001] text-white shadow-[#d68080] shadow-2xl rounded-[5px]"
      >
        <h1 className="p-2 text-[12px] font-black lg:text-[25px] lg:font-[900]">
          சாதனைகள்{" "}
        </h1>
        <p className="pl-2 text-[6px] font-bold lg:text-[15px] lg:font-bold">
          "மாநிலங்களின் உரிமைக்கான உறுதியான குரலாகத் 'திராவிட மாடல்' இன்று
          இந்தியா முழுவதும் ஒலிக்கிறது."{" "}
        </p>
      </div>
    </div>
  );
};

export default Carousels;
