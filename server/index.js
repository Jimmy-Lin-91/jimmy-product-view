const express = require('express');
const router = require('./router.js');
const path = require('path');
const morgan = require('morgan');
const port = 3000;
const bodyparser = require('body-parser');
const app = express();
const db = require('../db/index');

app.use(morgan('dev'));
//dirname is global but path goes based on relative files.
//it was routing to the old path.
app.use(express.static(path.join(__dirname, '..','client', 'dist')));
app.use('/api', router);
app.use(bodyparser.json());

app.listen(port, () => console.log(`Listening on ${port}`));