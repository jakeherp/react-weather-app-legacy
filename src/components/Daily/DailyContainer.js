import React from "react";
import { Grid } from "semantic-ui-react";
import Daily from "./Daily";

const DailyContainer = props => {
  return (
    <Grid
      centered
      padded="horizontally"
      columns="equal"
      style={{ fontSize: "1.5rem" }}
    >
      <Daily day="Monday" weather="sun" minTemp={12} maxTemp={20} />
      <Daily day="Tuesday" weather="sun" minTemp={12} maxTemp={20} />
      <Daily day="Wednesday" weather="sun" minTemp={12} maxTemp={20} />
      <Daily day="Thursday" weather="sun" minTemp={12} maxTemp={20} />
      <Daily day="Friday" weather="sun" minTemp={12} maxTemp={20} />
      <Daily day="Saturday" weather="sun" minTemp={12} maxTemp={20} />
      <Daily day="Sunday" weather="sun" minTemp={12} maxTemp={20} />
    </Grid>
  );
};

export default DailyContainer;
