import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Header.css";

export default function Header(props){
    const [value, setValue] = React.useState('');

    React.useEffect(()=>{

        props.onFilterChange(value);

    }, [value]);

    return  <div id={'header'}>
        <h3>Password manager</h3>
        <TextField
           value={value}
           onChange={(event)=>{
                setValue(event.target.value);
           }}
        />
    </div>;


}