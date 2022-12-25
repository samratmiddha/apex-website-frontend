import { Avatar, Card, CardActionArea, Typography, Box } from "@mui/material";

export default function StudentCard() {
  return (
    <Card
      sx={{
        backgroundColor: "#EFE7BC",
        height: "10rem",
        width: "19rem",
        margin: "2rem",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          src="https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg"
          sx={{ width: "6rem", height: "6rem", marginRight: "1rem" }}
        ></Avatar>
        <Box>
          <Typography variant="h6" sx={{ color: "#18A558" }}>
            Samrat Middha
          </Typography>
          <Typography>Student at IIT Roorkee</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
