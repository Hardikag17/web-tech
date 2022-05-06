const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const { parse, stringify } = require('flatted');

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
const { response } = require('express');

//Registering a new user
app.post('/user/:username', function (req, res) {
  User.findOne({ username: req.params.username }, function (err, found) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('user found:', found);
      if (found.password === req.body.password) {
        console.log('Password is matched');
        res.send(found);
      }
    }
  });
});

app.post('/user', function (req, res) {
  const a = User.findOne({ username: req.body.username });
  console.log(a.data);

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
});

// Posts
app.get('/post', function (req, res) {
  Post.find(function (err, found) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(found);
      res.send(found);
    }
  });
});

app.post('/post', function (req, res) {
  const newpost = new Post({
    username: req.body.username,
    url: req.body.url,
    content: req.body.content,
    mobile: req.body.mobile,
    city: req.body.city,
    vac: req.body.vac,
  });

  newpost.save(function (err) {
    if (!err) {
      res.send('successfully added your post');
      console.log('successfully added your post');
    } else {
      res.send(err);
    }
  });
});

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`.bold.yellow);
});
