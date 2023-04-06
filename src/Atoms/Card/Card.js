import React from "react";
import { Card, CardMedia } from "@mui/material";
import "./style.scss";

const CardComp = (props) => {
  return (
    <div className='card-main'>
      <Card>
        <CardMedia
          component='img'
          image={props.image}
          onClick={props.onClick}
        />
        {props.children}
      </Card>
    </div>
  );
};

export default CardComp;
