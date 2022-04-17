import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardAction,
  Button,
} from "@mui/material";

const Statistics = (props) => {
  console.log("HERE IS PROPS", props);

  const { cases } = props.data;
  const { deaths } = props.data;
  return (
    <div>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://res.cloudinary.com/mackr/image/upload/v1615472322/t4nnqo7ctzmcyiiyss0z.jpg'
          alt='This should be a picture'></CardMedia>
        <CardContent>
          <Typography variant={"h1"} align={"center"}>
            {props.data.contenant}
          </Typography>
          <Typography variant={"h3"} align={"center"}>
            {props.data.country}
          </Typography>
          <Button>
            <Typography varient={"h5"} align={"center"}>
              {cases.new}
            </Typography>
          </Button>
          <Button>
            <Typography varient={"primary"}>{deaths.total}</Typography>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
