import React, { useEffect } from "react";

import rickMorty from "../assets/img__rick_morty.png";
import harryPotter from "../assets/img__harry_potter.png";
import { useNavigate } from "react-router-dom";

const Hero = (props) => {
  const { translate } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="test">
        <section className="hero">
          <div className="hero__container">
            <div
              className="hero__item"
              onClick={() => {
                navigate("rick-and-morty", { state: { translate: translate } });
              }}
            >
              <div>
                <img
                  src={rickMorty}
                  alt="rickMorty"
                  className="hero__img-rick"
                />
                <h2>{translate === "en" ? "LOAD MORE" : "VER MAS"}</h2>
              </div>
            </div>

            <div
              className="hero__item"
              onClick={() => {
                navigate("harry-Potter", { state: { translate: translate } });
              }}
            >
              <div>
                <img
                  src={harryPotter}
                  alt="harryPotter"
                  className="hero__img-potter"
                />
                <h2>{translate === "en" ? "LOAD MORE" : "VER MAS"}</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
