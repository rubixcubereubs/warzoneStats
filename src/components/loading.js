import React from "react";

function Loading() {
  return (
    <div className="loading">
      <h1>Your stats are loading, please wait</h1>
      <img
        src={require("./assets/load.gif")}
        className="img-fluid"
        alt="logo"
      />
    </div>
  );
}

export default Loading;
