import { makeStyles, WithTheme } from "@mui/styles";

export const styles = makeStyles((theme: WithTheme) => ({
  cell: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "cell",
    fontSize: "12px",
    width: "70px !important",
    height: "30px !important",
    textAlign: "center",
    color: "black",
    fontWeight: 100,
    "&:hover": {
      background: "rgb(228, 190, 190)"
    }
  },
  cellSelected: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "cell",
    fontSize: "12px",
    width: "70px !important",
    height: "30px !important",
    textAlign: "center",
    background: "#ccc",
    fontWeight: 100
  }
}));
