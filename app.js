const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const serverPort = 3000;

const form = `
    <form action='/users' method='POST'>
        <input type='text' name='username'>
        <button type='submit'>Send</button>
    </form>
`;

const anotherUser = `
    <form action='/registerUser' method='GET'>
        <button type='submit'>Register User</button>
    </form>    
`

let name = ''

app.use(bodyParser.urlencoded({extended: false}));
 
app.post('/users',(req,res,next) => {
    name = req.body.username;
    res.redirect('/');
})

app.get('/registerUser',(req,res) => {
    res.send(form);
})

app.get('/test',(req,res) => {
    res.send(`<h1>Testing routes</h1>`);
})

app.get('/',(req,res) => {
    res.send(`      
        <h1>Server running on port ${serverPort} </h1>
        ${name ? '<p>' + name + '</p>' : ''}
        ${anotherUser}
    `);
})

app.listen(serverPort);