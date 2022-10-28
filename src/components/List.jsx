import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import avatar from "../assets/avatar.png";
const List = (props) => {
  const { actors, movie, loading, language } = props;
  const { Meta } = Card;
  return (
    <>
      <Row justify="center" gutter={[8, 16]}>
        {actors.map((actor, index) => {
          return (
            <Col key={index}>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  loading ? null : actor.image ? (
                    <img alt="actor img" src={actor.image} />
                  ) : (
                    <img alt="avatar" className="avatar" src={avatar} />
                  )
                }
                loading={loading}
              >
                <Meta
                  title={actor.name}
                  description={
                    movie === "harryPotter" ? (
                      <>
                        <p>
                          {language === "en ?"}
                          Actor: {actor.actor}
                        </p>
                      </>
                    ) : (
                      <>
                        {language === "en" ? (
                          <p>Species: {actor.species}</p>
                        ) : (
                          <p>Especies: {actor.species}</p>
                        )}
                      </>
                    )
                  }
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default List;
