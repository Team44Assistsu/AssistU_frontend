import { CardMedia } from "@mui/material";
import React, { Component } from "react";
import a from "../../Assests/images/a.png";
import "./style.scss";

import { NavigationBar, Card } from "../../Atoms";

class TherapistHomePage extends Component {
  render() {
    const selections = [
      { id: 1, name: "Avatar1", email: "abc@gmail.com" },
      { id: 2, name: "Avatar2", email: "abc@gmail.com" },
      { id: 3, name: "Avatar3", email: "abc@gmail.com" },
      { id: 4, name: "Avatar4", email: "abc@gmail.com" },
      { id: 5, name: "Avatar5", email: "abc@gmail.com" },
      { id: 6, name: "Avatar6", email: "abc@gmail.com" },
    ];
    return (
      <>
        <NavigationBar isTherapistHomePage />
        <div className="TherapistHomePage">
          {selections.map((item) => (
            <Card
              image={a}
              onClick={() => console.log("therapist home page")}
              key={item.id}
            >
              <div>{item.name}</div>
              <div>{item.email}</div>
            </Card>
          ))}
        </div>
      </>
    );
  }
}

export default TherapistHomePage;
