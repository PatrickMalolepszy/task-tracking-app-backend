/**
 * Created by Patrick on 2017-07-03.
 */
import express from 'express'
import bodyParser from 'body-parser'
import AWS from 'aws-sdk'
import login from './login'

AWS.config.update({region: 'us-west-2'});

const dynamodb = new AWS.DynamoDB();

const app = express();

app.use(bodyParser.json());

app.use('/login', login);

app.post('/createTask', (req, res) => {
  console.log("In backend..");
  console.log(req.body);
  const params = {
    Item: {
      "username": {
        S: "Patrick/" + req.body.taskTitle
      },
      "task": {
        S: req.body.taskTitle
      },
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "users"
  };
  console.log("trying dyan");
  try {
    dynamodb.putItem(params, function(err, data){
      console.log("in an error!");
      if (err) {
        console.log(err, err.stack);
      }
      console.log(data);
    });
  } catch (err) {
    console.log(err.message);
  }

  console.log("finished Dyn");
  res.send({
      message: 'I am from the backend server!'
  })
});

export default app