import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import harryPotter from "../assets/img__harry_potter.png";
import hogwarts from "../assets/img__hogwarts.png";
import List from "../components/List";
import { hpService } from "../services/HarryPotter";

const HarryPotter = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState();
  const [language, setLanguage] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const actorsResponse = await hpService.getAll();
      setActors(actorsResponse);
      setLanguage(location.state.translate);
      setLoading(false);
    };
    init();
  }, []);

  const scrollIntoView = () => {
    const element = document.getElementById("cast");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="harryPotter">
        <div className="main">
          <div className="main__box">
            <div className="main__logo-container">
              <img
                src={harryPotter}
                alt="harry_potter__logo"
                className="main__img-logo"
              />
            </div>

            <div className="main__content">
              <div className="main__text">
                <h1>
                  {language === "en"
                    ? "Discover the wizard world"
                    : "Descubre el mundo mago"}
                </h1>
                <h2>
                  {language === "en"
                    ? "From its creators"
                    : "Desde sus creadores"}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum hic inventore, iste veritatis labore accusantium
                  architecto pariatur at? Quasi natus a commodi iste nulla
                  accusamus consequatur provident dolorem non cumque?
                </p>
                <div className="main__btn-container">
                  <Button
                    className="main__btn-left"
                    size="large"
                    onClick={() => {
                      scrollIntoView();
                    }}
                  >
                    {language === "en" ? "See actors" : "ver actores"}
                  </Button>
                  <Button
                    className="main__btn_right"
                    size="large"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    {language === "en" ? "home" : "ir a home"}
                  </Button>
                </div>
              </div>

              <img
                src={hogwarts}
                alt="hogwarts"
                className="main__content-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="list">
        <div className="list__title" id="cast">
          <h2>{language === "en" ? "Cast" : "Elenco"}</h2>
        </div>
        <div>
          <List
            actors={actors}
            movie="harryPotter"
            loading={loading}
            language={language}
          />
        </div>
      </section>
    </>
  );
};

export default HarryPotter;
