const passwordService = require('./passwordService')
const cors = require("cors")
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

passwordService.createPassword( 'jö','www.jö.at','dashenka92','12345');
passwordService.createPassword( 'spar','www.spar.at','dashenka92','65498');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/', function (req, res) {
    const passwords = passwordService.readPasswords();
    res.end(passwords);
})

// READ
app.get('/passwordservice', (req, res) => {
    const passwords = passwordService.readPasswords();
    res.setHeader('Content-Type', 'application/json');
    return res.send(JSON.stringify(passwords));
});

// CREATE
app.post('/passwordservice', (req, res) => {
    console.log('data', JSON.stringify(req.body))
    const what = req.body.what;
    const where = req.body.where;
    const userName = req.body.userName;
    const password = req.body.password;
    const response = passwordService.createPassword(what, where, userName, password);

    return res.send(response);
});

// UPDATE
app.put('/passwordservice/:what', (req, res) => {
    const what = req.params.what;
    const where = req.body.where;
    const userName = req.body.userName;
    const password = req.body.password;

    const response = passwordService.updatePassword(what, where, userName, password);
    return res.send(response);
});

// DELETE
app.delete('/passwordservice/:what', (req, res) => {
    const what = req.params.what;
    passwordService.deletePassword(what);

    return res.send(JSON.stringify({ deleted: true }));
});

app.listen(3001)
console.log('app has started on port 3001')