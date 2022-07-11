import React from "react";
import "./Header.css";
import netflix from "../../assets/Netflix.png";
import avatar from "../../assets/avatar.png";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src={netflix} alt="logo" />
        </a>
      </div>
      <div className="header--user">
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
