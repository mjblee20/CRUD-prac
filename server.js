const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const todoAPI = require('./api/todo-api');
app.use('/api/todos', todoAPI);
const habitAPI = require('./api/habit-api');
app.use('/api/habits');

const connection = process.env.MONGODB_URI;
mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('Database Connected Successfully'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome To The Habit-Server');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is up and running on port 5000');
});
