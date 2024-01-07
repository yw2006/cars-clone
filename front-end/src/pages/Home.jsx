import React from 'react'
import CardDetails from "../components/CardDetails";
import Products from "../components/products/Products.js";
import Whoarewe from "../components/util/Whoarewe.jsx";
import Whychooseus from "../components/util/Whychooseus.jsx";
import Ourteam from "../components/util/Ourteam.jsx";
import Navbar from "../components/Navbar.jsx";
import Landing from "../components/Landing.jsx";
function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Products />
      <Whoarewe />
      <Whychooseus />
      <Ourteam />
    </>
  );
}

export default Home