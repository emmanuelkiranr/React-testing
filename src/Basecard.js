import React, { Component } from "react";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import Styled from "styled-components";
import data from "./data";

class Basecard extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Container minWidth="sm">
          <Grid>
            {data.map(function (info) {
              return (
                <Template>
                  <Icon fontSize="large">{info.icon}</Icon>
                  <CardContent>
                    <Count variant="h2">{info.value}</Count>
                    <Label variant="h6">{info.label}</Label>
                    <Pill>
                      <Percentage>{info.percentage}</Percentage>
                    </Pill>
                  </CardContent>
                </Template>
              );
            })}
          </Grid>
        </Container>
      </>
    );
  }
}

const Template = Styled(Card)`
  position: relative;
  margin: 20px;
  height: 150px;
  width: 250px;
  border-radius: 15px;
  background: linear-gradient(30deg, rgba(33,52,231,1) 10%, rgba(51,226,243,1) 100%);
  /* box-shadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'; */
`;

const Icon = Styled(Box)`
  position: absolute;
  top: 20px;
  height: 35px;
  width: 35px;
  left: 20px;
  border-radius:4px;
  padding:5px;
  /* background: linear-gradient(30deg, rgba(33,52,231,1) 10%, rgba(51,226,243,1) 100%); */
  color:white;
`;

const Count = Styled(Typography)`
  position: absolute;
  bottom: 35px;
  min-width: 130px;
  color: white;
  font-family: poppins;
  font-size:35px;
  font-weight:500;
`;

const Label = Styled(Typography)`
  position: absolute;
  bottom: 20px;
  color: white;
  font-family: poppins;
  font-size:12px;
  letter-spacing: 0.4px;
`;

const Pill = Styled(Card)`
  position: absolute;
  top: 100px;
  left: 155px;
  height: 30px;
  width: 75px;
  color: white;
  /* border: 0.5px solid #ffffff30; */
  border-radius: 40px;
  background-color: #ffffff1f;
`;

const Percentage = Styled(Typography)`
  margin-top: 3px;
  text-align: center; 
  font-family: poppins;
`;

export default Basecard;
