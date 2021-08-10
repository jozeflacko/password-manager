import React from "react";

export default function ReadOnlyPassword(props) {
    return  <div className={"item"}>
       <div>{props.what}</div>
       <div>{props.where}</div>
       <div>{props.userName}</div>
       <div>{props.password}</div>
    </div>;
}



