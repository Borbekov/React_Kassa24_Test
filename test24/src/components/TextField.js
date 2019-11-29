import React from "react";
import TextField from '@material-ui/core/TextField';

const TextFieldComponent = (props, { label }) => {
  return (
    <TextField
      {...props}
      label={label}
    />
  )
}

export default TextFieldComponent;
