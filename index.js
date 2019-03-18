var express = require('express');
var cors = require('cors');
var app = express();

const { db } = require('./config/database');
const marketingRouter = require('./router/marketingRouter');

const bodyParser = require('body-parser');
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/marketing', marketingRouter);

db.authenticate().then(() => {
    console.log("Database connected");
}).catch(err => {
    console.log(err);
})

app.listen(3001, (err) => {
    if (err) {
        console.log('Error in connecting with port 3001');
    } else {
        console.log('Server has been set up on port 3001');
    }
});