import './App.css';
import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import * as fetch from './fetch';

export default function App() {

    const [allPasswords, setAllPasswords] = React.useState([]);
    const [filteredPasswords, setFilteredPasswords] = React.useState([]);

    async function handleReadPasswords() {
        const passwords = await fetch.readPasswords()
        setAllPasswords(passwords);
    }

    async function handleSaveClick(what, where, userName, password) {
        await fetch.createPassword(what,where,userName,password);
        await handleReadPasswords();

    }

    async function handleUpdateClick(what, where, userName, password) {
        await fetch.updatePassword(what,where,userName,password);
        await handleReadPasswords();

    }

    async function handleDeleteClick(what) {
        await fetch.deletePassword(what);
        await handleReadPasswords();
    }

    function handleFilterChange(filterValue){

        if(filterValue==='') {
           setFilteredPasswords(allPasswords)
        } else{

            const temp = allPasswords.filter((item)=>{

                if(item.what.indexOf(filterValue) > -1) {
                    return true;
                }

                if(item.where.indexOf(filterValue) > -1) {
                    return true;
                }

                if(item.userName.indexOf(filterValue) > -1) {
                    return true;
                }

                return false;

            })

            setFilteredPasswords(temp);
        }


    }

    React.useEffect(async ()=>{
        await handleReadPasswords();
    },[]);

   return allPasswords.length < 1 ? 'Loading...' : (
       <div id={'Password-manager'}>
           <Header
                onFilterChange={handleFilterChange}
           />

           <Body
               passwords={filteredPasswords}
               onSaveClick={handleSaveClick}
               onUpdateClick={handleUpdateClick}
               onDeleteClick={handleDeleteClick}
           />
       </div>
   );
}