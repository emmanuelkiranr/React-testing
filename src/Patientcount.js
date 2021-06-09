import Basecard from "./Basecard";
import React, { Component } from "react";

class Patientcount extends Component {
  render() {
    return (
      <Basecard
        overlapgroup="patient-count-overlap"
        overlay="patient-count-overlay"
        count="2436"
        label="Patients Count"
        icon="https://anima-uploads.s3.amazonaws.com/projects/60bf00c71e213cd0a7db8f74/img/card-icon@2x.svg"
        pillValue="+2.01%"
        percentageArrow="https://anima-uploads.s3.amazonaws.com/projects/60bf00c71e213cd0a7db8f74/img/polygon-1-2@2x.svg"
      />
    );
  }
}

export default Patientcount;
