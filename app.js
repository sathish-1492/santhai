require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { connectDB } = require('./models/db');

const configurationController = require('./controllers/configurationController');

const app = express();

// Setup access logs
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Use morgan for logging
app.use(morgan('combined', { stream: accessLogStream }));  // Logs all requests to access.log

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'dashboard.html'));
});

async function startServer() {

    // Connect to DB
    connectDB();
    await configurationController.createConfiguration(); // Update the database with config.json

    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    console.log('App initiated')

}


startServer();
