import React, { Component } from "react";
import { Card, Table } from "@mui/material";
import { NavigationBar } from "../../Atoms";

class TherapistHomePage extends Component {
  render() {
    const selections = [
      { id: 1, name: "Avatar1" },
      { id: 2, name: "Avatar2" },
      { id: 3, name: "Avatar3" },
      { id: 4, name: "Avatar4" },
      { id: 5, name: "Avatar5" },
      { id: 6, name: "Avatar6" },
    ];
    return (
      <>
        <NavigationBar isTherapistHomePage />
        <div>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
            <Card.Header>Patient Details</Card.Header>
            <div>
              {selections.map((selection) => (
                <tr key={selection.id}>
                  <td style={{ width: "50%" }}>{selection.name}</td>
                  <td style={{ width: "50%" }}>{selection.price.toFixed(2)}</td>
                </tr>
              ))}
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default TherapistHomePage;
