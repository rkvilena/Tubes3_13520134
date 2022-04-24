const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = require('./router');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dna',
    password: 'dnaregex',
    database: 'dnaregex'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(router(connection));

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

