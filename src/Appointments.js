import Basecard from "./Basecard";
import React, { Component } from "react";

class Appointments extends Component {
  render() {
    return (
      <Basecard
        overlapgroup="appointments-overlap"
        overlay="appointments-overlay"
        count="3"
        label="Appointments"
        icon="https://anima-uploads.s3.amazonaws.com/projects/60bf00c71e213cd0a7db8f74/img/card-icon@2x.svg"
        pillValue="-0.10%"
        percentageArrow="https://anima-uploads.s3.amazonaws.com/projects/60bf00c71e213cd0a7db8f74/img/polygon-1-2@2x.svg"
      />
    );
  }
}

export default Appointments;
