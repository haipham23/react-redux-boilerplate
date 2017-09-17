const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const sslRedirect = require('heroku-ssl-redirect');
const getenv = require('getenv');
const path = require('path');

const port = getenv('PORT', 3000);
const app = express();

app.use(helmet());
app.use(compression());
app.use(sslRedirect());
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port);
