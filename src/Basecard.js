import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Overlapgroup from "./StyledComponents/Basestyle";

class Basecard extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <Overlapgroup>
          <h1>{this.props.count}</h1>
          <label>{this.props.label}</label>
          <img src={this.props.icon} alt="" />
          <div>
            <label>{this.props.pillValue}</label>
            <img src={this.props.percentageArrow} alt="" />
          </div>
        </Overlapgroup>
      </Container>
    );
  }
}

export default Basecard;
