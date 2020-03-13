let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = async (event) => {
    debugger;

    let messageBody = "From SLAppForge Sigma IDE - Hello Change!";

    console.log(messageBody);

    try {
        let data = await sqs.sendMessage({
            MessageBody: messageBody,
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/sqs`,
            DelaySeconds: '0',
            MessageAttributes: {}
        }).promise();
        return "Submitted : " + messageBody;
    } catch (error) {
        return "Failed";
    }
};