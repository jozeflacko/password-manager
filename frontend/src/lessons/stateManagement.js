import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <div>{['Daria', 'Jozef', 'Olivia'].map(name=><SimplestComponent name={name}/>)}</div>,
    document.getElementById('root')
);

function SimplestComponent(props){
    return <div>
        <div>{'hello ' + props.name + ' how are you?'}</div>
        <CounterButton name={props.name}/>
    </div>;
}

function CounterButton(props) {
    let stateManagement = React.useState(0);
    let [clicked, setClicked] = stateManagement;
    return <button onClick={() =>  setClicked(++clicked)}>
        {'You already clicked on ' + props.name + ' ' + clicked + ' times'}
    </button>;
}