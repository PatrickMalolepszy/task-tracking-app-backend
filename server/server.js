/**
 * Created by Patrick on 2017-07-03.
 */
import express from 'express'
import bodyParser from 'body-parser'
import AWS from 'aws-sdk'
import users from './users'
import task from './task'

AWS.config.update({region: 'us-west-2'});

const app = express();
app.use(bodyParser.json());
app.use('/users', users);
app.use('/task', task);

export default app