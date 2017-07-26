import AWS from 'aws-sdk'
AWS.config.update({region: 'us-west-2'});
const dynamodb = new AWS.DynamoDB();

export function saveTask(task) {
  console.log("saving task");
  const params = {
    Item: task,
    ReturnConsumedCapacity: "TOTAL",
    TableName: "tasks"
  };
  dynamodb.putItem(task);
}