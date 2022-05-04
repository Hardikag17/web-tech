const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const { connectDB } = require('./connect');

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 5000 || process.env.PORT;

connectDB();

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`.bold.yellow);
});
