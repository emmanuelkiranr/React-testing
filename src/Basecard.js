import React from "react";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import useStyles from "./styles/styles";
import data from "./data";

function Basecard() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container minWidth="sm">
        <Grid>
          {data.map(function (info) {
            return (
              <Card className={classes.card}>
                <Box className={classes.box} fontSize="large">
                  {info.icon}
                </Box>
                <CardContent>
                  <Typography className={classes.count} variant="h2">
                    {info.value}
                  </Typography>
                  <Typography className={classes.label} variant="h6">
                    {info.label}
                  </Typography>
                  <Card className={classes.pill}>
                    <Typography className={classes.percentage}>
                      {info.percentage}
                    </Typography>
                  </Card>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

// const Template = Styled(Card)`
//   position: relative;
//   margin: 20px;
//   height: 150px;
//   width: 250px;
//   border-radius: 15px;
//   background: linear-gradient(30deg, rgba(33,52,231,1) 10%, rgba(51,226,243,1) 100%);
//   /* box-shadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'; */
// `;

// const Icon = Styled(Box)`
//   position: absolute;
//   top: 20px;
//   height: 35px;
//   width: 35px;
//   left: 20px;
//   border-radius:4px;
//   padding:5px;
//   /* background: linear-gradient(30deg, rgba(33,52,231,1) 10%, rgba(51,226,243,1) 100%); */
//   color:white;
// `;

// const Count = Styled(Typography)`
//   position: absolute;
//   bottom: 35px;
//   min-width: 130px;
//   color: white;
//   font-family: poppins;
//   font-size:35px;
//   font-weight:500;
// `;

// const Label = Styled(Typography)`
//   position: absolute;
//   bottom: 20px;
//   color: white;
//   font-family: poppins;
//   font-size:12px;
//   letter-spacing: 0.4px;
// `;

// const Pill = Styled(Card)`
//   position: absolute;
//   top: 100px;
//   left: 155px;
//   height: 30px;
//   width: 75px;
//   color: white;
//   /* border: 0.5px solid #ffffff30; */
//   border-radius: 40px;
//   background-color: #ffffff1f;
// `;

// const Percentage = Styled(Typography)`
//   margin-top: 3px;
//   text-align: center;
//   font-family: poppins;
// `;

export default Basecard;
