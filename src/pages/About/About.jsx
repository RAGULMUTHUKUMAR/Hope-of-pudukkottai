import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aboutimg from "../../assets/About.jpg";
import About1img from "../../assets/About1.jpg";
import { useState } from "react";

function About() {
  const [count, setCount] = useState(false);

  return (
    <div>
      <h1 className="text-[15px] pt-[50px] font-black text-center lg:text-[25px] lg:pt-[70px]">
        நம்பிக்கை சூரியன் டாக்டர்
      </h1>
      <h1 className="text-[#a30001] text-[15px]  font-black text-center lg:text-[25px]">
        V.முத்துராஜா MLA
      </h1>

      <div className="flex flex-col items-center justify-center gap-1 w-full">
        <div className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:justify-around lg:p-[10px] lg:mt-[50px]">
          <div className="w-[240px] rounded-sm mt-[20px] mb-[20px] bg-[#a30001] lg:w-[500px] ">
            <img src={About1img} className="object-cover p-1" />
          </div>
          <div className="flex flex-col  p-2 text-center lg:w-[60%] lg:gap-[10px]">
            <h1 className="text-[12px] font-bold lg:text-[15px] lg:font-extrabold">
              என்றும் மக்கள் பணியில்...
            </h1>
            <h1 className="text-[12px] text-[#a30001] font-bold lg:text-[18px] lg:font-extrabold">
              டாக்டர். வை.முத்துராஜா MBBS,MLA
            </h1>
            <h1 className="text-[12px] font-bold lg:text-[15px] lg:font-extrabold">
              புதுக்கோட்டை சட்டமன்ற உறுப்பினர் மாநில துணைச்செயலாளர் கழக அமைப்பு
              சாரா ஓட்டுநர் அணி
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center w-[280px] mt-[20px] mb-[20px] bg-[#a30001] rounded-sm lg:hidden">
          <img src={Aboutimg} className="object-cover p-[8px] rounded-xl " />
          <p className="text-[12px] font-extrabold text-justify p-2 ">
            தமிழ் மொழிக் குடும்பத்தையும் அந்த மொழிகளைப் பேசும் மக்கள்
            இனத்தையும், அவர்கள் வாழும் நிலத்தையும் குறிக்கும் பழைமையான சொல்லே
            திராவிடம். உலகின் மூத்த மொழியான தமிழும், அதன் வழி உருவான திராவிட
            இனமும் காலப் போக்கில் பல்வேறு பண்பாட்டுப் படையெடுப்புகளுக்கு
            உள்ளாகி, உரிமைகளைப் பறிகொடுத்தது. சமுதாயத்தில் உள்ள படிநிலை
            ஏற்றத்தாழ்வுகளை அகற்றி, அனைத்து மக்களுக்குமான சமத்துவத்தை
            வலியுறுத்தும் திராவிடச் சிந்தனை, 20ஆம் நூற்றாண்டின் தொடக்கத்தில்
            அரசியல் இயக்கமாக உருவெடுத்தது. சமத்துவத்தை அடைவதற்கும்,
            ஏற்றத்தாழ்வைத் தகர்ப்பதற்கும் சமூக நீதி என்ற இலட்சியம்
            முன்னெடுக்கப்பட்டது.
          </p>
        </div>
        <div className="flex flex-col items-center w-[280px] mt-[20px] mb-[20px] bg-[#a30001] rounded-sm hidden lg:w-[100%] lg:block lg:flex lg:flex-row lg:p-[5px]">
          <p className="text-[12px] font-extrabold text-justify p-2 lg:text-[18px] xl:text-[20px] xl:leading-[40px]">
            தமிழ் மொழிக் குடும்பத்தையும் அந்த மொழிகளைப் பேசும் மக்கள்
            இனத்தையும், அவர்கள் வாழும் நிலத்தையும் குறிக்கும் பழைமையான சொல்லே
            திராவிடம். உலகின் மூத்த மொழியான தமிழும், அதன் வழி உருவான திராவிட
            இனமும் காலப் போக்கில் பல்வேறு பண்பாட்டுப் படையெடுப்புகளுக்கு
            உள்ளாகி, உரிமைகளைப் பறிகொடுத்தது. சமுதாயத்தில் உள்ள படிநிலை
            ஏற்றத்தாழ்வுகளை அகற்றி, அனைத்து மக்களுக்குமான சமத்துவத்தை
            வலியுறுத்தும் திராவிடச் சிந்தனை, 20ஆம் நூற்றாண்டின் தொடக்கத்தில்
            அரசியல் இயக்கமாக உருவெடுத்தது. சமத்துவத்தை அடைவதற்கும்,
            ஏற்றத்தாழ்வைத் தகர்ப்பதற்கும் சமூக நீதி என்ற இலட்சியம்
            முன்னெடுக்கப்பட்டது.
          </p>
          <img
            src={Aboutimg}
            className="object-cover p-[8px] rounded-xl lg:w-[35%]"
          />
        </div>
      </div>
      <div className="bg-[#414141] text-white w-full p-[10px] mt-[20px] flex flex-col justify-center items-center gap-[10px]">
        <h1 className="text-[25px] p-1 font-extrabold text-center text-[#a30001] lg:text-[40px]">
          கழகம்
        </h1>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className="lg:flex lg:items-center lg:justify-around lg:h-[200px] lg:w-full">
            <div className="flex flex-col items-center justify-center p-2 lg:w-[20%] lg:gap-[30px]">
              <h1 className="text-[20px] font-[900] lg:text-[40px] ">
                {count && (
                  <CountUp start={0} end={2} duration={2.75} delay={0} />
                )}{" "}
                கோடி
              </h1>
              <h1 className="text-[15px] font-[900] text-black lg:text-[15px] lg:pb-[20px] lg:text-center">
                கழக உறுப்பினர்கள்
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 lg:w-[20%] lg:gap-[30px]">
              <h1 className="text-[20px] font-[900] lg:text-[40px] ">
                {count && (
                  <CountUp start={0} end={23} duration={2.75} delay={0} />
                )}
              </h1>
              <h1 className="text-[15px] font-[900] text-black lg:text-[15px] lg:text-center lg:pb-[20px]  ">
                சார்பு அணிகள்
             </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 lg:w-[20%] lg:gap-[30px]">
              <h1 className="text-[20px] font-[900] lg:text-[40px]">
                {count && (
                  <CountUp start={0} end={125} duration={2.75} delay={0} />
                )}
              </h1>
              <h1 className="text-[15px] font-[900] text-black lg:text-[15px] lg:text-center">
                சட்டமன்ற உறுப்பினர்கள்
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 lg:w-[20%] lg:gap-[30px]">
              <h1 className="text-[20px] font-[900] lg:text-[40px]">
                {count && (
                  <CountUp start={0} end={20} duration={2.75} delay={0} />
                )}
              </h1>
              <h1 className="text-[15px] font-[900] text-black lg:text-[15px] lg:text-center">
                மக்களவை உறுப்பினர்கள்
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 lg:w-[20%] lg:gap-[30px]">
              <h1 className="text-[20px] font-[900] lg:text-[40px]">
                {count && (
                  <CountUp start={0} end={10} duration={2.75} delay={0} />
                )}
              </h1>
              <h1 className="text-[15px] font-[900] text-black lg:text-[15px] lg:text-center">
                மாநிலங்களவை உறுப்பினர்கள்
              </h1>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default About;
