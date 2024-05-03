import React from "react";
import { Carousel } from "flowbite-react";

const slides = [
  "../../assets/dmk1.jpg",
  "../../assets/dmk2.jpg",
  "../../assets/dmk3.jpg",
  "../../assets/dmk4.jpg",
  "../../assets/dmk5.jpg",
  "../../assets/dmk6.jpg",
];

const Carousels = () => {
  return (
    <div id="முகப்பு">
      <div className=" h-[260px] md:h-[600px] object-cover ">
        <Carousel slideInterval={5000} className="rounded-none w-full">
          {slides.map((item, idx) => (
            <img
              key={idx}
              src={item}
              alt={`carouselImg${idx + 1}`}
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
