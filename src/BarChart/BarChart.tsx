import React, { useState, useEffect } from "react";
import MicroBarChart from "react-micro-bar-chart";
import { Grid } from "@mui/material";
import { convertRowToNumberArray } from "../utils/convertRowToNumberArray";

export default function BarChart(props) {
  const [delay, setDelay] = useState<boolean>(false);
  const data = convertRowToNumberArray(props.row);

  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 10);
  }, [props.row]);

  if (!delay) {
    return (
      <Grid style={{ marginLeft: "7px" }}>
        <MicroBarChart
          data={data}
          width={150}
          height={20}
          hoverColor={"rgb(161,130,214)"}
          fillColor={"rgb(210,193,237)"}
        />
      </Grid>
    );
  } else {
    return <Grid>` </Grid>;
  }
}
