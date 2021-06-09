import Basecard from "./Basecard";
import React, { Component } from "react";

class Availablestaff extends Component {
  render() {
    return (
      <Basecard
        overlapgroup="availablestaff-overlap"
        overlay="appointments-overlay"
        count="45"
        label="Available staff"
        icon="https://anima-uploads.s3.amazonaws.com/projects/60bf00c71e213cd0a7db8f74/img/card-icon@2x.svg"
        pillValue="+1.01%"
        percentageArrow="https://anima-uploads.s3.amazonaws.com/projects/60bf00c71e213cd0a7db8f74/img/polygon-1-2@2x.svg"
      />
    );
  }
}

export default Availablestaff;
