const express = require('express');
const app = express();
const morgan = require('morgan');

const { mongoose } = require('./database');

//settings
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/usuarios', require('./routes/usuario.routes'));

//start
app.listen(app.get('port'), ()=>{
    console.log('sever on port', app.get('port'));
})