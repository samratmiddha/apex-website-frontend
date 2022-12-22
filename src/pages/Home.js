import {
  Typography,
  Button,
  CardActionArea,
  CardContent,
  Card,
} from "@mui/material";
import { Box } from "@mui/system";

export default function Home() {
  let logo = require("../assets/red_cross_logo.jpg");
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ paddingLeft: "2rem", paddingTop: "2rem", display: "flex" }}>
          <img src={logo} alt="Red Cross Logo" style={{ width: "8rem" }} />
          <Typography
            variant="h3"
            sx={{ alignSelf: "center", marginLeft: "1rem" }}
          >
            Red Cross Computer Center,Mansa
          </Typography>
        </Box>
        <Box sx={{ alignSelf: "center", paddingRight: "3rem" }}>
          <Button variant="contained" size="large">
            Log In
          </Button>
        </Box>
      </Box>
      <hr></hr>
      <Box></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", width: "60%", flexWrap: "wrap" }}>
          <Card
            sx={{
              width: "15rem",
              height: "10rem",
              backgroundColor: "#98D7C2",
              margin: "4rem",
              display: "flex",
              alignContent: "center",
            }}
          >
            <CardActionArea>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Typography variant="h4" sx={{ alignSelf: "center" }}>
                  Courses
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: "15rem",
              height: "10rem",
              backgroundColor: "#98D7C2",
              margin: "4rem",
              display: "flex",
              alignContent: "center",
            }}
          >
            <CardActionArea>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignSelf: "center",
                }}
              >
                <Typography variant="h4" sx={{ alignSelf: "center" }}>
                  Cerificate{" "}
                </Typography>
                <Typography variant="h4" sx={{ alignSelf: "center" }}>
                  Verification{" "}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: "15rem",
              height: "10rem",
              backgroundColor: "#98D7C2",
              margin: "4rem",
              display: "flex",
              alignContent: "center",
            }}
          >
            <CardActionArea>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Typography variant="h4" sx={{ alignSelf: "center" }}>
                  Apply Online
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" align="center">
          Our Meritorius Students
        </Typography>
        <Box></Box>
      </Box>
    </Box>
  );
}
