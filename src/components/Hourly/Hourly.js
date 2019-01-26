import React from "react";
import { Icon } from "semantic-ui-react";

const Hourly = props => {
  return (
    <div className="hourly">
      <span>{props.hour}</span>
      <Icon name={props.weather} size="big" />
      <span>{props.temperature}º</span>
    </div>
  );
};

export default Hourly;
