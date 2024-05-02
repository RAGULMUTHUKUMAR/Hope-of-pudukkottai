import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import Logo from "../../assets/Logo.png";
import '../../Style/Navbar.css'

function Navbars() {
  return (
    <div className="navbar">
      <marquee className="marquee">
        "அதிகாரத்தை மக்கள் கையில் வழங்கி அவர்களின் வளர்ச்சியை உயர்த்துவோம் !"
      </marquee>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="https://flowbite-react.com">
          <img
            src={Logo}
            className="w-[100px] lg:w-[130px]  object-cover flex items-center"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-[#A30001]">
          <Navbar.Link to="/" active className='text-base text-[#A30001] font-bold hover:underline-red hover:underline hover:underline-offset-[8px] '>முகப்பு</Navbar.Link>
          <Navbar.Link as={Link} to="#"className='text-base text-[#A30001]   font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px] '>நம்பிக்கை சூரியன்</Navbar.Link>
          <Navbar.Link to="#"className='text-base text-[#A30001]  font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px] '>கோரிக்கை</Navbar.Link>
          <Navbar.Link to="#"className='text-base text-[#A30001]  font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px] '>புகைப்படம்</Navbar.Link>
          <Navbar.Link to="#" className='text-base text-[#A30001]  font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px] '>தொடர்புகொள்ள</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;
