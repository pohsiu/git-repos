import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  list: {
    height: "100%",
    overflowY: "auto",
    alignItems: "center",
    ...theme.div.flexContainerVertical,
  },
  progressContainer: {
    padding: 24,
    justifyContent: "center",
  },
}));


export const fetchStateEnum = {
  PENDING: "pending",
  RESOLVED: "resolved",
  ERROR: "error",
  IDLE: "idle",
}

const defaultScrollOffset = 120;
const ScrollableList = (props) => {
  const { fetchState, loadMore, children, scrollOffset = defaultScrollOffset } = props;
  const classes = useStyles();

  const onScroll = (e) => {
    const { clientHeight, scrollTop, scrollHeight } = e.target;
    if (clientHeight + scrollTop + scrollOffset >= scrollHeight) {
      loadMore();
    }
  }
  return (
    <MuiList className={classes.list} onScroll={onScroll}>
      {fetchState.state === fetchStateEnum.ERROR && <FormHelperText error>{fetchState.error}</FormHelperText>}
      {children}
      {fetchState.loading && (
        <ListItem className={classes.progressContainer}>
          <CircularProgress />
        </ListItem>
      )}
    </MuiList>
  )
}

export default React.memo(ScrollableList);