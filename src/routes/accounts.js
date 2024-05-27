const express = require('express');
const accountsController = require('../controllers/accounts');

const accountsRouter = express.Router();

accountsRouter.post('/', accountsController.searchParticipant);
accountsRouter.get('/:id', accountsController.getAccountById);
accountsRouter.post('/create', accountsController.createAccount);
accountsRouter.put('/:id', accountsController.updateAccountById);
accountsRouter.delete('/:id', accountsController.deleteAccountById);

module.exports = accountsRouter;
