/**
 * Created by Patrick on 2017-07-07.
 *
 */

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  next();
});

/**
 * Route: /login/
 */
router.get('/', (req, res) => {
  console.log("In Login Post!..");
  res.send({
    message: 'I am from the backend server - login post!'
  })
});

export default router