import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function AboutUsCard() {
  return (
    <Card
      sx={{
        backgroundColor: "#EFE7BC",
        margin: "4rem",
        width: "50rem",
        height: "20rem",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src={require("../../assets/slider_images/nature-image-for-website.jpg")}
          style={{ width: "20rem", height: "20rem" }}
        />
      </Box>
      <Box sx={{ padding: "2rem" }}>
        <Typography variant="h6">
          Aut laborum ratione non dolorem officiis sit numquam officia id
        </Typography>
        <br></br>
        <Typography variant="body1">
          Aut laborum ratione non dolorem officiis sit numquam officia id
          voluptatem unde ea velit incidunt ut delectus tempore. Eum voluptates
          nihil eum molestiae laborum At unde sint et velit temporibus 33
          dignissimos fugit? Qui tenetur cumque aut enim impedit ex velit
          tempore. Quo iure earum id sint doloribus quo quaerat consequatur qui
          assumenda perspiciatis est eius architecto non dolores quia id
          distinctio autem!
        </Typography>
      </Box>
    </Card>
  );
}
