import React, { Component } from "react";
import Stats from "./stats";
import Header from "./header.component";
import Footer from "./footer";
import Loading from "./loading";

class GenerateStats extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      stats: [],
      gamertag: undefined,
      platform: undefined,
      error: false,
    };
  }

  getStats = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const gamertag = e.target.elements.gamertag.value;
    const platform = e.target.elements.platform.value;
    const platformL = platform.toLowerCase();

    if (gamertag && platformL) {
      const api_call = await fetch(
        `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platformL}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          },
        }
      );
      const response = await api_call.json();

      //console.log(response);

      this.setState({
        stats: response,
        gamertag: this.state.gamertag,
        platform: this.state.platform,
        error: false,
        loading: false,
      });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    let myData = this.state.stats.br || {};
    if (this.state.loading) {
      return (
        <div>
          <Header getStats={this.getStats} error={this.state.error} />
          <Loading />
          <Footer />
        </div>
      );
    } else
      return (
        <div>
          <Header getStats={this.getStats} error={this.state.error} />
          <Stats info={myData} states={this.state} />
          <Footer />
        </div>
      );
  }
}

export default GenerateStats;
