import React from "react";
import { useDispatch } from "react-redux";
import { setActionOnTable } from "../redux/remap/remap.actions";

import { Button } from "@mui/material";

export default function ActionButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setActionOnTable("INCREASE_TABLE"));
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Increase
    </Button>
  );
}
