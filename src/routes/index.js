// routes/index.js
const express = require('express');
const participantsRouter = require('./participants');

const router = express.Router();

router.use('/participants', participantsRouter);

module.exports = router;
