//Import the dependencies and styles for the card components
import React from "react";
import { Card, CardMedia } from "@mui/material";
import "./style.scss";

//functional component for the card which takes props
const CardComp = (props) => {
  return (
    <div className="card-main">
      <Card>
        <CardMedia
          component="img"
          image={props.image}
          onClick={props.onClick}
          // image="/static/images/cards/contemplative-reptile.jpg"
          //   title="green iguana"
        />
        {props.children}
      </Card>
    </div>
  );
};
//export the card component for use in other parts of application.
export default CardComp;
