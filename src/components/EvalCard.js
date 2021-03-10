import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    margin: "0 auto",
    marginTop: "25px",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    outline: "1px solid black",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Free Case Evaluation
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}>
          Click Here
        </Button>
      </CardActions>
    </Card>
  );
}
