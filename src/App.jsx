import React from "react";
import Navbars from "./component/Navbar/Navbar";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Froms from "./pages/Register_Form/Froms";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "./component/ScrollToTop/ScrollToTopButton";

function App() {
  Aos.init();
  return (
    <>
      <Navbars />
      <ScrollToTopButton/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/from" element={<Froms/>}></Route>
      </Routes>
    </>
  );
}

export default App;
