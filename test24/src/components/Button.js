import React from "react";
import Button from '@material-ui/core/Button';

const ButtonComponent = ({ onClick, color, name }) => {
  return (
    <Button onClick={onClick} color={color} variant="contained">
      {name}
    </Button>
  )
}

export default ButtonComponent;
