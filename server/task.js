/**
 * Created by Patrick on 2017-07-07.
 */
import express from 'express';
import joi from 'joi';
import dao from './dao/taskDao'

const router = express.Router();

router.use((req, res, next) => {
  next();
});

/**
 * GET Tasks
 * Route: /task/
 */
router.get('/', (req, res) => {
  console.log("Getting tasks...");
  res.send({
    message: 'I am from the backend server - get tasks!'
  })
});

/**
 * GET Tasks
 * Route: /task/id
 */
router.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log("Getting task with id = " + id);
  res.send({
    message: 'I am from the backend server - Getting task with id = ' + id
  })
});

/**
 * GET Tasks
 * Route: /task/id
 */
router.post('/', (req, res) => {
  console.log("Received task!");

  const task = req.body;

  const schema = joi.object().keys({
    taskTitle: joi.string().alphanum().min(3).max(30).required(),
    description: joi.string().max(200),
    taskColor: joi.string().max(8),
    estimatedWorkUnits: joi.number().integer().min(1).max(4),
  });

  const valid = joi.validate(task, schema);
  if (valid.error) {
    res.send({
      message: 'BAD REQUEST ' + task.toString()
    })
  } else {
    dao.saveTask(task);
    res.send({
      message: 'I am from the backend server - Thank you for your task: ' + task.toString()
    })
  }
});

export default router