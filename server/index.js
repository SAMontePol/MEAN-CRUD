const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//MiddleWares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/employees', require('./routes/employee.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});