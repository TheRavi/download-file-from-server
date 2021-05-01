const express = require('express');
const path = require('path');

const router = express.Router();
const logger = require('log4js').getLogger(path.parse(__filename).name);

/* GET root page. */
router.get('/', (req, res) => {
  logger.info("{ status: 'Up', version: '1.0' }");
  res.send({ status: 'Up', version: '1.0' });
});

module.exports = router;
