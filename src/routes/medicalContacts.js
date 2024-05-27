const express = require('express');
const medicalContactsController = require('../controllers/medicalContacts');

const medicalContactsRouter = express.Router();

medicalContactsRouter.post('/', medicalContactsController.createMedicalContact);
medicalContactsRouter.get('/:id', medicalContactsController.getMedicalContactById);
medicalContactsRouter.put('/:id', medicalContactsController.updateMedicalContactById);
medicalContactsRouter.delete('/:id', medicalContactsController.deleteMedicalContactById);

module.exports = medicalContactsRouter;
