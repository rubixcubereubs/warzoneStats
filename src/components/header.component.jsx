import React from "react";
import "./styles/header.css";

const Header = (props) => {
  return (
    <div className="header">
      <img
        src={require("./assets/logo.png")}
        className="img-fluid"
        alt="logo"
      />
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.getStats}>
        <input
          className="gamertag"
          name="gamertag"
          placeholder="gamertag"
          type="text"
        />
        <input name="platform" placeholder="platform" type="text" />
        <button className="btn btn-info">Get Stats</button>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please enter your gamertag and platform(psn, battle, steam, xbl,
      uno(activision ID))
    </div>
  );
}

export default Header;
