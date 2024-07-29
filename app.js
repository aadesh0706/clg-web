require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// for postman
const cors = require('cors');
app.use(cors());
// for postman

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log('http://localhost:5000')
