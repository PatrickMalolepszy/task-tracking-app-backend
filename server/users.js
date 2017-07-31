/**
 * Created by Patrick on 2017-07-07.
 */

const express = require('express');
var HttpStatus = require('http-status-codes');
const router = express.Router();

router.use((req, res, next) => {
  next();
});

/**
 * Route: /users/register
 */
router.post('/register', (req, res) => {
  console.log("Registering user!");
  console.log('Body:\n' + JSON.stringify(req.body, null, 4));
  res.status(HttpStatus.BAD_REQUEST).send({
    message: 'I am from the backend server - bad request example'
  });
  res.send({
    message: 'I am from the backend server - register post!'
  })
});

/**
 * Route: /users/login
 */
router.post('/login', (req, res) => {
  console.log("logging user!");
  res.send({
    message: 'I am from the backend server - login post!'
  })
});

export default router