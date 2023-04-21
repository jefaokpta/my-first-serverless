const AWS = require('aws-sdk');
const cloudFormation = new AWS.CloudFormation();

module.exports.run = async (event, context) => {
  console.log(`${context.functionName}" subiu a Intancia Cliente`);

  await cloudFormation.updateStack({
    StackName: 'cf-cliente',
    TemplateURL: 'https://cf-templates-jefones.s3.amazonaws.com/cf-micro.yml',
  }).promise()
      .then(data => console.log(data))
};
