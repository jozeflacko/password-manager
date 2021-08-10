import './App.css';
import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import * as fetch from './fetch';

export default function App() {

    const [passwords, setPasswords] = React.useState([]);

    async function handleReadPasswords() {
        const passwords = await fetch.readPasswords()
        setPasswords(passwords);
    }

    async function handleSaveClick(what, where, userName, password) {
        await fetch.createPassword(what,where,userName,password);
        await handleReadPasswords();
    }

    React.useEffect(async ()=>{
        await handleReadPasswords();
    },[]);

   return passwords.length < 1 ? 'Loading...' : (
       <div id={'password-manager'}>
           <Header/>
           <Body
               passwords={passwords}
               onSaveClick={handleSaveClick}
           />
       </div>
   );
}














