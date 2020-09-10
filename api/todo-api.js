const express = require('express');
const router = express.Router();

const Todo = require('../model/todo');

router.route('/').get((req, res) => {
  res.send('get');
  // Todo.find()
  //   .then((tasks) => res.json(tasks))
  //   .catch((err) => console.log(err));
});

router.route('/').post((req, res) => {
  res.send('post');
  // const task = req.body.task;

  // const todoItem = new Todo({
  //   task: task,
  // });

  // todoItem
  //   .save()
  //   .then(() => {
  //     res.json({
  //       message: 'New to-do task successfully added',
  //     });
  //   })
  //   .catch((err) =>
  //     res.status(400).json({
  //       error: err,
  //       message: 'Error creating todo task',
  //     })
  //   );
});

router.route('/update/:id').put((req, res) => {
  res.send('update');
  // Todo.findByIdAndUpdate(req.params.id, (err) => {
  //   if (!err) {
  //     res.json({ msg: 'successfully updated' });
  //   } else {
  //     console.log(err);
  //   }
  // });
});

router.route('/delete/:id').delete((req, res) => {
  res.send('delete');
  // Todo.findByIdAndDelete(req.params.id, (err) => {
  //   if (!err) {
  //     res.json({ msg: 'successfully deleted' });
  //   } else {
  //     console.log(err);
  //   }
  // });
});

module.exports = router;
