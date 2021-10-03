import React from "react";
import Password from "../Password";
import "./Body.css";


export default function Body(props) {
    return <div id={'body'}>
        <div id={'items'}>

            {props.passwords.map((password, index)=> <Password
                key={password.what + '_' + index} // must use when using map!
                what={password.what}
                where={password.where}
                userName={password.userName}
                password={password.password}
                onDeleteClick={props.onDeleteClick}
                onUpdateClick={props.onUpdateClick}
            />)}

            <Password
                expanded={true}
                key={'new_item'}
                onSaveClick={props.onSaveClick}
                what={''}
                where={''}
                userName={''}
                password={''}
            />
        </div>
    </div>;
}