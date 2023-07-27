const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const response = await fetch('https://medium.com/feed/' + process.env.MEDIUM_USERNAME);
    const data = await response.text();
    console.log(data);
    return {
        statusCode: 200,
        body: data,
    };
};
