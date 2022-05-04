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
app.use(cors());
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 5000 || process.env.PORT;

connectDB();

const { User, Post } = require('./model');

//Registering a new user
app.get('/user/:username', function (req, res) {
  const user = User.find((c) => c.username == req.body.params);
  console.log(JSON.stringify(user.username));
  if (user) {
    res.send(user);
    console.log(user);
  } else {
    res.send('User not found');
  }
});
app.post('/user', function (req, res) {
  const user = User.find((c) => c.username == req.body.params);
  if (user) {
    res.send('User already found');
    console.log('User already registered');
  } else {
    const newuser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    newuser.save(function (err) {
      if (!err) {
        res.send('successfully added your account');
        console.log('successfully added your account');
      } else {
        res.send(err);
      }
    });
  }
});

// Posts
app.get('/post', function (req, res) {});
app.post('/post', function (req, res) {});

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`.bold.yellow);
});
