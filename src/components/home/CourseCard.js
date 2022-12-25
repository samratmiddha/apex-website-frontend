import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Box } from "@mui/system";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DoneIcon from "@mui/icons-material/Done";

export default function CourseCard(props) {
  return (
    <Card
      sx={{
        backgroundColor: "#EFE7BC",
        width: "19rem",
        margin: "2rem",
      }}
    >
      <CardActionArea>
        <Box>
          <Typography align="center" variant="h6">
            Course Name
          </Typography>
        </Box>
        <hr></hr>
        <Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <AccessTimeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="1 year" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="feature 1" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {" "}
                <DoneIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="feature 2" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {" "}
                <DoneIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="feature 2" />
            </ListItem>
          </List>
        </Box>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button>Apply</Button>
      </CardActions>
    </Card>
  );
}
