import React from "react";
import Button from '@material-ui/core/Button';

export const ButtonComponent = (props) => {
    console.log("PropsDataButtom", props);
    return (
            <Button 
            variant={props.variant} 
            color={props.color} 
            height = {props.height}
            onClick = {props.handleChange}
            style={{backgroundColor:'#e9410c', marginLeft: props.margeLeft}}
            > {props.name} 
            </Button>
    )
  }