import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ input, onInputChange }) => {
  const onChangeText = React.useCallback((e) => {
    onInputChange(e.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextField
      value={input}
      onChange={onChangeText}
      placeholder="Type repo name in here ..."
    />
  )
}
export default React.memo(TextInput);
