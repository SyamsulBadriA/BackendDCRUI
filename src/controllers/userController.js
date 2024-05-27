const conn = require('../database');

const getAllParticipants = (req, res) => {
    const query = 'SELECT * FROM participants';
    conn.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    conn.query(query, [name, email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name, email });
    });
};

module.exports = {
    getAllParticipants,
    createUser
};
