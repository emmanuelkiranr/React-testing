import React, { Component } from "react";

class Basecard extends Component {
  render() {
    return (
      <div className="container-center-horizontal">
        <div className={this.props.overlapgroup}>
          <div className="base-card-component">
            <div className={this.props.overlay}>
              <h1 className="count-number">{this.props.count}</h1>
              <div className="count-label">{this.props.label}</div>
              <img className="card-icon" src={this.props.icon} alt="" />
            </div>
          </div>
          <div className="percentage-pill">
            <div className="base-pill-overlap">
              <div className="pill-value">{this.props.pillValue}</div>
              <img
                className="percentage-arrow-up"
                src={this.props.percentageArrow}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Basecard;
