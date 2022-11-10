import React  from "react";
import Hero from "./Components/Hero";
import './App.css';
import Process from "./Components/Process";
import Footer from "./Components/shared/Footer";
import Nav from "./Components/shared/Nav";
import Guide from "./Components/Guide";
import Pricing from "./Components/Pricing";


function App() {
  return (
    <>

    <Nav/>
    <Hero/>
    <Process/>
    <Guide/>
    <Pricing/>
    <Footer/>
    </>
  );
}

export default App;
