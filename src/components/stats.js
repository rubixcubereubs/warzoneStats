import React from "react";

function Stats(props) {
  let wins = props.info.wins;
  let gamesPlayed = props.info.gamesPlayed;
  let winPcent = (wins / gamesPlayed) * 100;
  let kills = props.info.kills;
  let deaths = props.info.deaths;
  let rounded = kills / deaths;
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <br />
        <br />

        {!props.info.wins ? (
          <div className="alert alert-info m-4">
            <p>
              This is an application used to get your latest Modern Warfare
              Warzone Statistics.
              <br /> Enter your <strong>gamertag</strong> and the{" "}
              <strong>platform</strong> you play on. Stats are limited to{" "}
              <strong>PSN, XBL, steam, battle, uno(Activition ID)</strong>.
              <br />
              <br />
              <strong>
                If you've been returned to this screen after entering your
                details then your info couldn't be found, please try again.
              </strong>
            </p>
          </div>
        ) : null}

        {props.info.wins ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wins</h5>
              <p className="card-text">{props.info.wins}</p>
            </div>
          </div>
        ) : null}

        {props.info.gamesPlayed ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Games Played</h5>
              <p className="card-text">{props.info.gamesPlayed}</p>
            </div>
          </div>
        ) : null}

        {winPcent ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Win Percentage</h5>
              <p className="card-text">{winPcent.toFixed(2)}%</p>
            </div>
          </div>
        ) : null}

        {props.info.topFive ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Top Fives</h5>
              <p className="card-text">{props.info.topFive}</p>
            </div>
          </div>
        ) : null}

        {props.info.topTen ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Top Tens</h5>
              <p className="card-text">{props.info.topTen}</p>
            </div>
          </div>
        ) : null}

        {props.info.topTwentyFive ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Top Twenty Fives</h5>
              <p className="card-text">{props.info.topTwentyFive}</p>
            </div>
          </div>
        ) : null}

        {rounded ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Kill/Death Ratio</h5>
              <p className="card-text">{rounded.toFixed(2)}</p>
            </div>
          </div>
        ) : null}

        {props.info.downs ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Downs</h5>
              <p className="card-text">{props.info.downs}</p>
            </div>
          </div>
        ) : null}

        {props.info.kills ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Kills</h5>
              <p className="card-text">{props.info.kills}</p>
            </div>
          </div>
        ) : null}

        {props.info.deaths ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Deaths</h5>
              <p className="card-text">{props.info.deaths}</p>
            </div>
          </div>
        ) : null}

        {props.info.revives ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revives</h5>
              <p className="card-text">{props.info.revives}</p>
            </div>
          </div>
        ) : null}

        {props.info.score ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Score</h5>
              <p className="card-text">{props.info.score}</p>
            </div>
          </div>
        ) : null}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Stats;
