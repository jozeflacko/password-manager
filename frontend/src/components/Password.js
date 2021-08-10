import React from "react";

export default function Password(props) {

    const [what, setWhat] = React.useState(props.what);
    const [where, setWhere] = React.useState(props.where);
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState(props.password);

    function resetFields() {
        setWhat(props.what);
        setWhere(props.where);
        setUserName(props.userName);
        setPassword(props.password);
    }

    async function handleSave() {
        await props.onSaveClick(what, where, userName, password);
        resetFields();
    }

    return  <div className={"item"}>
       <div><input value={what} onChange={event => setWhat(event.target.value)}/></div>
       <div><input value={where} onChange={event => setWhere(event.target.value)}/></div>
       <div><input value={userName} onChange={event => setUserName(event.target.value)}/></div>
       <div><input value={password} onChange={event => setPassword(event.target.value)}/></div>
       <div>
           <button onClick={handleSave}>Save</button>
       </div>
    </div>;
}



