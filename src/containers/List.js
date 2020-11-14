import React from "react";
import debounce from "lodash/debounce";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import ScrollableList, { fetchStateEnum } from "../components/ScrollableList";
import { requestRepoApi } from "../utils";
import AppContext from "../context/app";

const useStyles = makeStyles((theme) => ({
  item: {
    justifyContent: "center",  
  }
}));

const List = () => {
  const classes = useStyles();
  const { input } = React.useContext(AppContext);
  const [items, setItems] = React.useState([]);
  const pageRef = React.useRef(0); // Won't affect render, no need to use state
  const [fetchState, setFetchState] = React.useState({ state: fetchStateEnum.IDLE, loading: false });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchRepos = React.useCallback(
    debounce(async (querySearch, isMore) => {
      if (!querySearch) return;
      try {
        setFetchState({ state: fetchStateEnum.PENDING, loading: true });
        if (isMore) {
          pageRef.current = pageRef.current + 1;
        } else {
          pageRef.current = 1;
        }
        const response = await requestRepoApi(querySearch, pageRef.current);
        await new Promise(resolve => setTimeout(resolve, 500)); // Add timeout
        setFetchState({ state: fetchStateEnum.RESOLVED, loading: false });
        setItems(prev => {
          if (!isMore) return response.data.items;
          return prev.concat(response.data.items)
        })
      } catch (e) {
        setFetchState({ state: fetchStateEnum.ERROR, error: e.message, loading: false });
      }
    }, 1000)
  , []);

  React.useEffect(() => {
    setItems([]);
    fetchRepos(input, false);
  }, [fetchRepos, input]);

  const loadMore = React.useCallback(
    () => fetchRepos(input, true),
  [fetchRepos, input]);

  const renderItems = () => {
    if (fetchState.state === fetchStateEnum.ERROR) return null;
    if (fetchState.state === fetchStateEnum.RESOLVED && items.length === 0) {
      return (
        <ListItem>No match result</ListItem>
      )
    }
    return items.map((item) => {
      const onClick = () => {
        window.open(item.html_url, "_blank", "noreferrer=yes");
      }
      return (
        <ListItem button key={item.node_id} className={classes.item} onClick={onClick} >
          <ListItemAvatar>
            <Avatar alt={item.name} src={item.owner.avatar_url}>
              {!item.owner?.avatar_url && item.name[0]}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.description} />
        </ListItem>
      )
    });
  }
  return (
    <ScrollableList loadMore={loadMore} fetchState={fetchState}>
      {renderItems()}
    </ScrollableList>
  )
}

export default List;
