import React from "react";
import { Grid } from "@mui/material";
import { createSelectable } from "react-selectable-fast";

import { styles } from "./Cell.style";

function Cell(props) {
  const classes = styles();

  const { selectableRef, isSelected, isSelecting, value, color } = props;
  return (
    <Grid
      className={`${
        isSelecting || isSelected ? classes.cellSelected : classes.cell
      }`}
      style={{ background: isSelecting || isSelected ? undefined : color }}
      ref={selectableRef}
    >
      {value}
    </Grid>
  );
}

export default createSelectable(Cell);
