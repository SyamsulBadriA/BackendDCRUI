const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/auth');

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Anda telah mengakses rute terproteksi', user: req.user });
});

module.exports = router;