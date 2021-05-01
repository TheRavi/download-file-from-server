const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const logger = require('log4js').getLogger(path.parse(__filename).name);

const router = express.Router();
const directory = process.env.DOWNLOAD_DIRECTORY;

router.get('/:filename', (req, res) => {
  try {
    let filetodownload = req.params.filename;
    logger.info(`File Name: ${filetodownload}`);
    filetodownload = directory + filetodownload;
    if (fs.existsSync(filetodownload)) {
      res.download(filetodownload, path.basename(filetodownload));
    } else {
      logger.error(`File do not exists: ${req.params.filename}`);
      res.send({ error: 'file not found' });
    }
  } catch (err) {
    logger.error(err);
  }
});

module.exports = router;
