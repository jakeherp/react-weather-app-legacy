import React from "react";
import { Header } from "semantic-ui-react";

const Currently = () => {
  return (
    <Header
      as="h1"
      textAlign="center"
      className="weather-now"
      style={{ marginTop: "3rem" }}
    >
      San Francisco
      <span>Clear</span>
      <strong>26ºC</strong>
      <span>Feels like 29ºC</span>
    </Header>
  );
};

export default Currently;
