import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "./List";
import TextInput from "../components/TextInput";
import AppContext from "../context/app";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40vw",
    padding: 48,
    height: "calc(100vh - 48px)",
    margin: "24px auto",
    ...theme.div.flexContainerVertical,
  },
  h5: {
    marginBottom: 16,
  }
}));

const Main = () => {
  const classes = useStyles();
  const { input, onInputChange } = React.useContext(AppContext);

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.h5}>Github Repository Search</Typography>
      <TextInput input={input} onInputChange={onInputChange} />
      <List />
    </Paper>
  )
}

export default Main;
