const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = Schema({
  oldHabit: {
    type: String,
    required: true,
  },
  newHabit: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('HabitList', habitSchema);
