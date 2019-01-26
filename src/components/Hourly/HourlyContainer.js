import React from "react";
import { Container } from "semantic-ui-react";
import Hourly from "./Hourly";

const HourlyContainer = props => {
  return (
    <Container>
      <div className="hourly-wrapper">
        <Hourly hour={12} weather="sun" temperature="12" />
        <Hourly hour={13} weather="sun" temperature="12" />
        <Hourly hour={14} weather="sun" temperature="12" />
        <Hourly hour={15} weather="sun" temperature="12" />
        <Hourly hour={16} weather="sun" temperature="12" />
        <Hourly hour={17} weather="sun" temperature="12" />
        <Hourly hour={18} weather="sun" temperature="12" />
      </div>
    </Container>
  );
};

export default HourlyContainer;
