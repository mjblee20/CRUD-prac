const express = require('express');
const router = express.Router();

const Habit = require('../model/habit');

router.route('/').get((req, res) => {
  // res.send('get');
  Habit.find()
    .then((list) => res.json(list))
    .catch((err) => console.log(err));
});

router.route('/').post((req, res) => {
  var { newHabit, oldHabit } = req.body;

  const habitItem = new Habit({
    oldHabit: oldHabit,
    newHabit: newHabit,
  });

  habitItem
    .save()
    .then(() => {
      res.json({
        message: 'New habit item successfully added',
      });
    })
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: 'Error creating habit item',
      })
    );
});

router.route('/update/:id').put((req, res) => {
  console.log('update');
});

router.route('/delete/:id').delete((req, res) => {
  console.log('delete');
});

module.exports = router;
