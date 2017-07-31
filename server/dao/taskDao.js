import AWS from 'aws-sdk'

AWS.config.update({region: 'us-west-2'});
const dynamodb = new AWS.DynamoDB.DocumentClient();

const saveTask = (task) => {
  console.log("saving task");

  //TODO: account ids.
  task.user = "patrick";

  const params = {
    Item: task,
    ReturnConsumedCapacity: "TOTAL",
    TableName: "tasks"
  };

  dynamodb.put(params, (err, data) => {
    if (err) {
      console.log("Error: save failed:" + err)
    } else {
      console.log("Save succeeded:", data)
    }
  })

};

module.exports = {
  saveTask
};
