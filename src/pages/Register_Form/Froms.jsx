import React from "react";

function Froms() {

  return (
    <div id="form">
       <h1 className="text-[20px] pt-[25px] pb-[20px] mt-[30px] font-black text-center lg:text-[25px] lg:pt-[70px] lg:pb-[50px]">கோரிக்கை</h1>
    <div className="grid grid-col place-content-center place-items-center gap-[10px] lg:grid-cols-2 lg:place-items-center lg:gap-[50px]">
     
      <label>
        <p className="text-[13px] font-bold lg:text-[20px]">
          பெயர் <span className="text-[#ff3c3c] font-bold">*</span>
        </p>
        <input
          type="text"
          className="h-[30px] border-[2px] border-[#8a2424] focus-within:border-[#6cff59] lg:h-[40px] lg:w-[300px]"
        />
      </label>
      <label>
        <p className="text-[13px] font-bold lg:text-[20px]">
          கைபேசி எண் <span className="text-[#ff3c3c] font-bold">*</span>
        </p>
        <input
          type="number"
          className="h-[30px] border-[2px] border-[#8a2424] focus-within:border-[#6cff59]  lg:h-[40px] lg:w-[300px]"
        />
      </label>
      <label>
        <p className="text-[13px] font-bold lg:text-[20px]">
          வாட்ஸ்ஆப் எண் <span className="text-[#ff3c3c] font-bold">*</span>
        </p>
        <input
          type="number"
          className="h-[30px] border-[2px] border-[#8a2424] focus-within:border-[#6cff59]  lg:h-[40px] lg:w-[300px]"
        />
      </label>
      <label>
        <p className="text-[13px] font-bold lg:text-[20px]">
          கதவு எண் <span className="text-[#ff3c3c] font-bold">*</span>
        </p>
        <input
          type="number"
          className="h-[30px] border-[2px] border-[#8a2424] focus-within:border-[#6cff59]  lg:h-[40px] lg:w-[300px]"
        />
      </label>
      <label>
        <p className="text-[13px] font-bold lg:text-[20px]">
          முகவரி <span className="text-[#ff3c3c] font-bold">*</span>
        </p>
        <input
          type="text"
          className="h-[30px] border-[2px] border-[#8a2424] focus-within:border-[#6cff59]  lg:h-[40px] lg:w-[300px]"
        />
      </label>
      <label>
        <p className="text-[13px] font-bold lg:text-[20px]">
          விவரங்கள் <span className="text-[#ff3c3c] font-bold">*</span>
        </p>
        <textarea
          type="text"
          className="w-[210px] h-[70px] border-[2px] border-[#8a2424] focus-within:border-[#6cff59]  lg:h-[100px] lg:w-[300px]"
        />
      </label>
      <label className="flex flex-col justify-center items-center">
        <p className="text-[11px] font-black lg:text-[15px]">
          தற்போதைய தேதி மற்றும் நேரம்{" "}
          <span className="text-[#ff3c3c] font-bold">*</span>
        </p>
        <input
          type="date"
          className="w-[210px] h-[30px] border-[2px] border-[#8a2424] focus-within:border-[#6cff59]  lg:h-[40px] lg:w-[300px]"
        />
      </label>
      <button className="bg-[#a30001] mt-[10px] p-[8px] w-[150px] rounded-[2px] font-extrabold shadow-[#ff8e8e] hover:bg-black hover:text-[#a30001] shadow-2xl text-white lg:w-[300px] lg:h-[50px] lg:text-[20px]">
        சமர்ப்பிக்க
      </button>
    </div></div>
  );
}

export default Froms;
