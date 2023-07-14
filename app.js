let express = require('express');
const dotenv = require('dotenv').config();
let app = express();
let path = require('path');

let publicPath = path.join(__dirname,'./public')
app.use(express.static(publicPath))

app.get('/' ,(req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register' ,(req,res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login' ,(req,res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})



app.listen(process.env.PORT,()=> {
console.log('Servidor corriendo en el puerto '+ process.env.PORT + ' http://localhost:'+ process.env.PORT);
})  