import {
  Typography,
  Button,
  CardActionArea,
  CardContent,
  Card,
  Slide,
} from "@mui/material";
import { Box } from "@mui/system";
import AboutUsCard from "../components/home/AboutUsCard";
import CourseCard from "../components/home/CourseCard";
import ImageSlider from "../components/home/imageSlider";
import StudentCard from "../components/home/StudentCard";

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
      <Box>
        <Slide>
          <ImageSlider />
        </Slide>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            width: "80%",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
                  Payment Portal
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
                  Noticeboard
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" align="center">
          About us
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" align="center">
          Our Courses
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" align="center">
          Our Meritorius Students
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
          <StudentCard></StudentCard>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#EFE7BC",
          padding: "5rem 8rem 2rem 5rem",
          display: "flex",
        }}
      >
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.382475909281!2d75.4017772156394!3d29.99717218189961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111f3c5517dda5%3A0xa6e40ac868de7526!2sRed%20Cross%20Computer%20Centre!5e0!3m2!1sen!2sin!4v1671710146481!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "6rem",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Address
          </Typography>
          <Typography variant="h6">
            Red Cross Computer Center, New Court Road,Near Bus Stand , Mansa
          </Typography>
          <br></br>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            email
          </Typography>
          <Typography variant="h6">apexmansa@gmail.com</Typography>
          <br></br>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {" "}
            Phone No
          </Typography>
          <Typography variant="h6">7589093002</Typography>
        </Box>
      </Box>
    </Box>
  );
}
