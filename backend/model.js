const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

const postSchema = Schema({
  id: Number,
  username: String,
  url: String,
  content: String,
  mobile: Number,
  city: String,
  vac: Boolean,
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = { User, Post };
