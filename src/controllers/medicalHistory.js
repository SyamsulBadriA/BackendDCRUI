const createMedicalHistory = (req, res) => {
    const { participant_id, participated_before, link_result, blood_type, illnesses, allergies } = req.body;
    db.query('INSERT INTO medical_history (participant_id, participated_before, link_result, blood_type, illnesses, allergies) VALUES (?, ?, ?, ?, ?, ?)',
        [participant_id, participated_before, link_result, blood_type, illnesses, allergies], (err, result) => {
            if (err) {
                console.error('Error creating medical history: ' + err.stack);
                res.status(500).send('Error creating medical history');
                return;
            }
            res.status(201).send('Medical history created successfully');
        });
};

const getMedicalHistoryById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM medical_history WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error getting medical history: ' + err.stack);
            res.status(500).send('Error getting medical history');
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Medical history not found');
            return;
        }
        res.status(200).json(result[0]);
    });
};

const updateMedicalHistoryById = (req, res) => {
    const id = req.params.id;
    const { participant_id, participated_before, link_result, blood_type, illnesses, allergies } = req.body;
    db.query('UPDATE medical_history SET participant_id = ?, participated_before = ?, link_result = ?, blood_type = ?, illnesses = ?, allergies = ? WHERE id = ?',
        [participant_id, participated_before, link_result, blood_type, illnesses, allergies, id], (err, result) => {
            if (err) {
                console.error('Error updating medical history: ' + err.stack);
                res.status(500).send('Error updating medical history');
                return;
            }
            res.status(200).send('Medical history updated successfully');
        });
};

const deleteMedicalHistoryById = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM medical_history WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error deleting medical history: ' + err.stack);
            res.status(500).send('Error deleting medical history');
            return;
        }
        res.status(200).send('Medical history deleted successfully');
    });
};

module.exports = {
    createMedicalHistory,
    getMedicalHistoryById,
    updateMedicalHistoryById,
    deleteMedicalHistoryById
};
