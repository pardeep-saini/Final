import React from "react";
import Button from '@material-ui/core/Button';

export const ButtonComponent = (props) => {
    return (
            <Button 
            variant={props.variant} 
            color={props.color}
            onClick = {props.handleChange}
            style={{backgroundColor:'#e9410c', marginLeft: props.margeLeft,height:props.height, fontSize: '10px'}}
            > {props.name} 
            </Button>
    )
  }