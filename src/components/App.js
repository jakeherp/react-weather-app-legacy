import React from "react";
import { Divider, Loader, Dimmer } from "semantic-ui-react";
import axios from "axios";
import "./App.css";

import Currently from "./Currently/Currently";
import Refreshed from "./Currently/Refreshed";
import HourlyContainer from "./Hourly/HourlyContainer";
import DailyContainer from "./Daily/DailyContainer";
import Daily from "./Daily/Daily";

class App extends React.Component {
  state = {
    weather: null
  };

  componentDidMount() {
    axios
      .get(
        "https://cors.io/?https://api.darksky.net/forecast/e417134e59034c96c581e0444164aa35/51.5074,0.1278?units=si&exclude=minutely,flags"
      )
      .then(response => {
        this.setState({ weather: response.data });
      });
  }

  render() {
    const { weather } = this.state;

    console.log(weather);

    if (!weather) {
      return (
        <Dimmer active>
          <Loader size="huge" content={"Loading weather"} />
        </Dimmer>
      );
    }
    return (
      <React.Fragment>
        <Currently />
        {weather &&
          weather.daily.data.map((day, key) => {
            return <Daily key={key} day={day} />;
          })}
        <Divider inverted />
        <Refreshed />
        <Divider inverted />
        <HourlyContainer />
        <Divider inverted />
        <DailyContainer />
        <Divider inverted />
      </React.Fragment>
    );
  }
}

export default App;
