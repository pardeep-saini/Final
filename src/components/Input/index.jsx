import React from "react";
import TextField from "@material-ui/core/TextField";

export const InputField = (props) => {
    return (

        <TextField 
        id={props.id} 
        label={props.label}
        onChange={props.changeHandler}
         />
    )
  }