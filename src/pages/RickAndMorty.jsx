import { Button, Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import rickMorty from "../assets/img__rick_morty.png";
import rickMortyImg from "../assets/img__rick&morty.png";
import { rmService } from "../services/RickAndMorty/index";
import List from "../components/List";

const RickAndMorty = () => {
  const [actors, setActors] = useState([]);
  const [next, setNext] = useState(1);
  const [loading, setLoading] = useState();
  const [language, setLanguage] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const response = await rmService.getAll();

      const nextPage = response.info.next.charAt(response.info.next.length - 1);
      setNext(nextPage);
      setActors(response.results);
      setLanguage(location.state.translate);
      setLoading(false);
    };
    init();
  }, []);

  const handleLoadMore = async () => {
    const response = await rmService.loadMore(next);
    const nextPage = response.info.next.charAt(response.info.next.length - 1);
    setNext(nextPage);
    setActors(actors.concat(response.results));
  };

  const scrollIntoView = () => {
    const element = document.getElementById("cast");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="rickMorty">
        <div className="main">
          <div className="main__box">
            <div className="main__logo-container">
              <img
                src={rickMorty}
                alt="harry_potter__logo"
                className="main__img-logo"
              />
            </div>

            <div className="main__content">
              <div className="main__text">
                <h1>“Wubba Lubba Dub Dub!” — Rick</h1>
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
                src={rickMortyImg}
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
            movie="rickMorty"
            loading={loading}
            language={language}
          />
          <Row justify="center" align="center">
            <Col>
              <Button
                size="large"
                className="list__load-more"
                onClick={handleLoadMore}
              >
                Load more
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default RickAndMorty;
