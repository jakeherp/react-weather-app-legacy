import React from "react";
import { GridRow, GridColumn, Icon } from "semantic-ui-react";

const Daily = props => {
  const { day } = props;

  return (
    <GridRow>
      <GridColumn>{day.time}</GridColumn>
      <GridColumn textAlign="center">
        <Icon name={day.icon} size="large" />
      </GridColumn>
      <GridColumn textAlign="center">{day.temperatureHigh}º</GridColumn>
      <GridColumn textAlign="center">{day.temperatureLow}º</GridColumn>
    </GridRow>
  );
};

export default Daily;
