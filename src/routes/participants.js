// routes/participants.js
const express = require('express');
const participantsController = require('../controllers/participants');

const participantsRouter = express.Router();

participantsRouter.get('/', participantsController.getAllParticipants);
participantsRouter.get('/:id', participantsController.getParticipantById);
participantsRouter.post('/', participantsController.createParticipant);
participantsRouter.put('/:id', participantsController.updateParticipantById);
participantsRouter.delete('/:id', participantsController.deleteParticipantById);

module.exports = participantsRouter;
