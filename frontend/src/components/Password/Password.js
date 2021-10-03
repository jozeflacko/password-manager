import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Password.css";

export default function Password(props) {

    const [what, setWhat] = React.useState(props.what);
    const [where, setWhere] = React.useState(props.where);
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState(props.password);

    function isDirty(){
        if(what !== props.what){
            return true;
        }
        if(where !== props.where){
            return true;
        }
        if(userName !== props.userName){
            return true;
        }
        if(password !== props.password){
            return true;
        }
        return false;
    }

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

    const Element = props.expanded ? Card : Accordion;

    return  <Element
        className={"password-panel"}
    >
        <AccordionSummary
            expandIcon={props.expanded ? undefined : <ExpandMoreIcon />}
            aria-controls="panel1a-content"
        >
            {what || 'New'}
        </AccordionSummary>
        <AccordionDetails>

            <TextField
                label={'what'}
                disabled={props.onUpdateClick !== undefined}
                value={what}
                onChange={event => setWhat(event.target.value)}
            />

            <TextField
                label={'where'}
                value={where}
                onChange={event => setWhere(event.target.value)}
            />

            <TextField
                label={'user name'}
                value={userName}
                onChange={event => setUserName(event.target.value)}
            />

            <TextField
                label={'password'}
                value={password}
                onChange={event => setPassword(event.target.value)}
            />

            <div className={'buttons'}>
                {props.onSaveClick && <Button
                    color="primary"
                    variant="contained"
                    onClick={handleSave}
                    disabled={isDirty() === false}
                >Save</Button>}

                {props.onUpdateClick && <Button
                    variant="contained"
                    color="primary"
                    disabled={isDirty() === false}
                    onClick={()=>{
                        props.onUpdateClick(what, where, userName, password)
                    }}
                >Update</Button>}

                {props.onUpdateClick && <Button
                    variant="contained"
                    onClick={resetFields}
                    disabled={isDirty() === false}
                >Reset</Button>}

                {props.onDeleteClick && <Button
                    variant="contained"
                    color="secondary"
                    disabled={isDirty()}
                    onClick={() =>  props.onDeleteClick(what)}
                >
                    delete
                </Button>}
            </div>

        </AccordionDetails>
    </Element>
}


