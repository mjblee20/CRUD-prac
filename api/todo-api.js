const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.send('get');
});

router.route('/').post((req, res) => {
  res.send('post');
});

router.route('/update').put((req, res) => {
  res.send('put');
});

router.route('/delete').delete((req, res) => {
  res.send('delete');
});

module.exports = router;
