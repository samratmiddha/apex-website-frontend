import { createTheme } from "@mui/material";

const theme = createTheme({
  Light: {
    type: "light",
    primary: { main: "#AA1111", contrastText: "#000000", light: "#E2E6Ed" },
    secondary: { main: "#3C4048", contrastText: "#00ABB3" },
    background: { default: "#FFFFFF", paper: "#EBEBEB" },
  },
});

export default theme;
