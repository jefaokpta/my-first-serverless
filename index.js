const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.run = async (event, context) => {
  const time = new Date();
  console.log(`Sua funcao CRON "${context.functionName}" rodou em ${time}`);
  // list all buckets

    await S3.listBuckets().promise()
        .then(data => console.log(data))
};
