import React from "react";
import ReadOnlyPassword from "./ReadOnlyPassword";
import Password from "./Password";


export default function Body(props) {
    return <div id={'body'}>
        <div id={'items'}>
            {props.passwords.map((password, index)=> <ReadOnlyPassword
                key={password.what + '_' + index} // must use when using map!
                what={password.what}
                where={password.where}
                userName={password.userName}
                password={password.password}
            />)}

            <Password
                onSaveClick={props.onSaveClick}
                what={''}
                where={''}
                userName={''}
                password={''}
            />
        </div>
    </div>;
}
