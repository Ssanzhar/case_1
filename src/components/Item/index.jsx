import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function List({ title, id, date, description, link }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: 600,
        marginTop: 3,
        marginBottom: 3,
        backgroundColor: "#181818",
        color: "#FFFFFF",
        borderRadius: 5,
        border: "solid",
        borderColor: "#242424",
      }}
    >
      <CardHeader
        sx={{ color: "#FFFFFF" }}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        }
        title={`ID: ${id}`}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "white" }}>
          Title: {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          Link: {link}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          Date: {date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "#FFFFFF" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Description:</Typography>
          <Typography sx={{ marginBottom: 2 }}>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
