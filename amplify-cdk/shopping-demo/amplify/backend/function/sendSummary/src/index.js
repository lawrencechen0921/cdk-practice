/* Amplify Params - DO NOT EDIT
    API_AMPLIFIEDSHOPPING_GRAPHQLAPIENDPOINTOUTPUT
    API_AMPLIFIEDSHOPPING_GRAPHQLAPIIDOUTPUT
    API_AMPLIFIEDSHOPPING_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */
const fetch = require("node-fetch")
const AWS = require('aws-sdk')
const sns = new AWS.SNS()
const graphqlQuery = `query listShoppingItems {
    listShoppingItems {
        items {
            id
            ingredient
            quantity
            unit
        }
    }
}
`

exports.handler = async (event) => {
    const response = await fetch(process.env.API_AMPLIFIEDSHOPPING_GRAPHQLAPIENDPOINTOUTPUT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.API_AMPLIFIEDSHOPPING_GRAPHQLAPIKEYOUTPUT
        },
        body: JSON.stringify({
            query: graphqlQuery,
            operationName: "listShoppingItems",
        })
    })

    const result = await response.json()
    const shoppingItems = result.data.listShoppingItems.items

    await sns.publish({
        // For demo purposes hard-coded, normally recommended to use environment variable
        TopicArn: "arn:aws:sns:us-west-2:585445564315:sns-topic-shoppingdemo-dev",
        Message: `Here's shopping cart summary - ${new Date().toDateString()}:\n` +
            `${shoppingItems.map(item => `${item.quantity} ${item.unit} - ${item.ingredient}`)
                .join('\n')}`
    }).promise().catch(e => console.log(e))

    return true
};
