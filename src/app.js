const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('log4js').getLogger(path.parse(__filename).name);

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/filedownload', require('./routes/filedownload'));

app.use((req, res) => {
  logger.error(`Unknown URL: ${req.url}`);
  res.status(404);
  res.send({ error: 'Error 404 not found.' });
});

module.exports = app;
