const db = require('../database');

// Get all participants
const getAllParticipants = (req, res) => {
    db.query('SELECT * FROM participants', (err, results) => {
        if (err) {
            console.error('Error getting participants: ' + err.stack);
            res.status(500).send('Error getting participants');
            return;
        }
        res.status(200).json(results);
    });
};

// Get a participant by id
const getParticipantById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM participants WHERE id = ?', id, (err, results) => {
        if (err) {
            console.error('Error getting participant: ' + err.stack);
            res.status(500).send('Error getting participant');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Participant not found');
            return;
        }
        res.status(200).json(results[0]);
    });
};

// Create a new participant
const createParticipant = (req, res) => {
    const participant = req.body;
    db.query('INSERT INTO participants SET ?', participant, (err, result) => {
        if (err) {
            console.error('Error creating participant: ' + err.stack);
            res.status(500).send('Error creating participant');
            return;
        }
        res.status(201).send('Participant created successfully');
    });
};

// Update a participant by id
const updateParticipantById = (req, res) => {
    const id = req.params.id;
    const updatedParticipant = req.body;
    db.query('UPDATE participants SET ? WHERE id = ?', [updatedParticipant, id], (err, result) => {
        if (err) {
            console.error('Error updating participant: ' + err.stack);
            res.status(500).send('Error updating participant');
            return;
        }
        res.status(200).send('Participant updated successfully');
    });
};

// Delete a participant by id
const deleteParticipantById = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM participants WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error deleting participant: ' + err.stack);
            res.status(500).send('Error deleting participant');
            return;
        }
        res.status(200).send('Participant deleted successfully');
    });
};

module.exports = {
    getAllParticipants,
    getParticipantById,
    createParticipant,
    updateParticipantById,
    deleteParticipantById
};
