let whatArray = [];
let whereArray = [];
let userNameArray = [];
let passwordArray = [];

function createPassword(what, where, userName, password){

    whatArray.push(what);
    whereArray.push(where);
    userNameArray.push(userName);
    passwordArray.push(password);

    return {
        what,
        where,
        userName,
        password
    };
}

function readPasswordsAsStrings() {
    const passwords = [];
    whatArray.forEach((what, index)=>{
        // const what = whatArray[index];
        const where = whereArray[index];
        const userName = userNameArray[index];
        const password = passwordArray[index];
        passwords.push(`For "${what}" on web side "${where}" you should use username "${userName}" and password "${password}".`);
    });
    return passwords;
}

function readPasswords() {
    const passwords = [];
    whatArray.forEach((what, index)=>{
        // const what = whatArray[index];
        const where = whereArray[index];
        const userName = userNameArray[index];
        const password = passwordArray[index];
        passwords.push({
            what,
            where,
            userName,
            password
        });
    });
    return passwords;
}

function updatePassword(what, where, userName, password){
    let indexOfWhat;
    whatArray.forEach((value, index)=>{
        if (value === what) {
            indexOfWhat = index;
        }
    });

    whereArray[indexOfWhat] = where;
    userNameArray[indexOfWhat] = userName;
    passwordArray[indexOfWhat] = password;

    return {
        what,
        where,
        userName,
        password
    };
}
function deletePassword(what){
    let indexOfWhat;
    whatArray.forEach((value, index)=>{
        if (value === what) {
            indexOfWhat = index;
        }
    });

    const af = (value, index) => index !== indexOfWhat;
    whatArray = whatArray.filter(af);
    whereArray = whereArray.filter(af);
    userNameArray = userNameArray.filter(af);
    passwordArray = passwordArray.filter(af);
}

function deletePasswords(){
    whatArray = [];
    whereArray = [];
    userNameArray = [];
    passwordArray = [];
}

const publicAPI = {
    createPassword,
    readPasswords,
    readPasswordsAsStrings,
    deletePasswords,
    deletePassword,
    updatePassword
};

module.exports = publicAPI;
