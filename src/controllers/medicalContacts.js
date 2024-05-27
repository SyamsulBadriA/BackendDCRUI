const createMedicalContact = (req, res) => {
    const { participant_id, name, kinship_relationship, phone_number } = req.body;
    db.query(
        'INSERT INTO medical_contacts (participant_id, name, kinship_relationship, phone_number) VALUES (?, ?, ?, ?)',
        [participant_id, name, kinship_relationship, phone_number],
        (err, result) => {
            if (err) {
                console.error('Error creating medical contact: ' + err.stack);
                res.status(500).send('Error creating medical contact');
                return;
            }
            res.status(201).send('Medical contact created successfully');
        }
    );
};

const getMedicalContactById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM medical_contacts WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error getting medical contact: ' + err.stack);
            res.status(500).send('Error getting medical contact');
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Medical contact not found');
            return;
        }
        res.status(200).json(result[0]);
    });
};

const updateMedicalContactById = (req, res) => {
    const id = req.params.id;
    const { participant_id, name, kinship_relationship, phone_number } = req.body;
    db.query(
        'UPDATE medical_contacts SET participant_id = ?, name = ?, kinship_relationship = ?, phone_number = ? WHERE id = ?',
        [participant_id, name, kinship_relationship, phone_number, id],
        (err, result) => {
            if (err) {
                console.error('Error updating medical contact: ' + err.stack);
                res.status(500).send('Error updating medical contact');
                return;
            }
            res.status(200).send('Medical contact updated successfully');
        }
    );
};

const deleteMedicalContactById = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM medical_contacts WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error deleting medical contact: ' + err.stack);
            res.status(500).send('Error deleting medical contact');
            return;
        }
        res.status(200).send('Medical contact deleted successfully');
    });
};

module.exports = {
    createMedicalContact,
    getMedicalContactById,
    updateMedicalContactById,
    deleteMedicalContactById
};

