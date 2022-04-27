const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = require('./router');

const connection = mysql.createConnection(
    'mysql://cdfi7dpyr55c:pscale_pw_6Oemw8ViWjOVWFpeAcGCvyy8YN0dWVEhpSGADBfNhfY@owd1rkj7a5n9.us-east-1.psdb.cloud/dnaregex?ssl={"rejectUnauthorized":true}'
);

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(router(connection));

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

