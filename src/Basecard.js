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

export default Basecard;
