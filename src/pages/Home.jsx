import React, { useState, useEffect } from "react";
import Hero from "../components/hero";
import NavBar from "../components/NavBar";

const Home = () => {
  const [translate, setTranslate] = useState("es");

  const handleTranslate = (value) => {
    setTranslate(value);
  };
  return (
    <>
      <NavBar title="N5" handleTranslate={handleTranslate} />
      <Hero translate={translate} />
    </>
  );
};

export default Home;
