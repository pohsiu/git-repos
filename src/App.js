import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppContext from "./context/app";
import Main from "./containers/Main";

// implement the app required context in here;

function App() {
  const [input, setInput] = React.useState("");
  const onInputChange = (value) => setInput(value);
  return (
    <AppContext.Provider value={{ onInputChange, input }}>
      <CssBaseline />
      <Main />
    </AppContext.Provider>
  );
}

export default App;
