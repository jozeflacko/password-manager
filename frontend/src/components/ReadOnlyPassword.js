import React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


export default function ReadOnlyPassword(props) {



    return  <Card raised={true} className={"item"}>

        <div>{props.what}</div>
        <div>{props.where}</div>
        <div>{props.userName}</div>
        <div>{props.password}</div>
    </Card>;
}



