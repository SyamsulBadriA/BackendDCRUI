// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const participantsRouter = require('./routes/participants'); // Import participantsRouter from the correct path
const accountsRouter = require('./routes/accounts');
const protectedRoutes = require('./routes/protected'); // Import protectedRoutes from the correct path

const app = express();
app.use(bodyParser.json());

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/participants', participantsRouter);
app.use('/api/accounts', accountsRouter);
app.use('/api', routes);
app.use('/api', protectedRoutes); // Add protectedRoutes here

module.exports = app;
