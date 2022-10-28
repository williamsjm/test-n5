import React, { useState } from "react";

const NavBar = (props) => {
  const { title, handleTranslate } = props;

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">{title}</div>

          <ul>
            <li
              onClick={() => {
                handleTranslate("en");
              }}
            >
              English
            </li>
            <li
              onClick={() => {
                handleTranslate("es");
              }}
            >
              Spanish
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
