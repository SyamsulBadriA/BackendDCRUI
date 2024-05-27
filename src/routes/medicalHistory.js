const express = require('express');
const medicalHistoryController = require('../controllers/medicalHistory');

const medicalRouter = express.Router();

medicalRouter.post('/', medicalHistoryController.createMedicalHistory);
medicalRouter.get('/:id', medicalHistoryController.getMedicalHistoryById);
medicalRouter.put('/:id', medicalHistoryController.updateMedicalHistoryById);
medicalRouter.delete('/:id', medicalHistoryController.deleteMedicalHistoryById);

module.exports = medicalRouter;