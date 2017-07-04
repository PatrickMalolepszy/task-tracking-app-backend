/**
 * Created by Patrick on 2017-07-03.
 */
import express from 'express'
const app = express();
app.get('/helloWorld', (req, res) => {
  res.send({
  message: 'I am a server route and can also be hot reloaded!'
})
});
export default app