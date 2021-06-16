import React, { Component } from "react";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  Typography,
  Grid,
} from "@material-ui/core";
import Styled from "styled-components";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Style } from "@material-ui/icons";

class Basecard extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Container>
          <Grid>
            <Template>
              <Icon fontSize="large" />
              <CardContent>
                <Count variant="h2">6234</Count>
                <Label variant="h6">Patient count</Label>
                <Pill>
                  <Percentage>+1.07%</Percentage>
                </Pill>
              </CardContent>
            </Template>
          </Grid>
        </Container>
      </>
    );
  }
}

const Template = Styled(Card)`
  position: relative;
  top: 10px;  /*added*/
  height: 150px;
  width: 250px;
  border-radius: 15px;
  background: linear-gradient(30deg, rgba(33,52,231,1) 10%, rgba(51,226,243,1) 100%);
  /* box-shadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'; */
`;

const Icon = Styled(GroupAddIcon)`
  position: absolute;
  top: 15px;
  left: 15px;
  color:white;
`;

const Count = Styled(Typography)`
  position: absolute;
  bottom: 40px;
  min-width: 130px;
  color: white;
  font-size:40px;
  font-weight:900;
`;

const Label = Styled(Typography)`
  position: absolute;
  bottom: 20px;
  color: white;
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
`;

export default Basecard;
