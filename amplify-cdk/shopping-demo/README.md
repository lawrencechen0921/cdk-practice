# Extend Amplify Backend with AWS CDK

Today, AWS Amplify announces a new amplify add custom command to add any of the 175+ AWS services to an Amplify-created backend using the AWS Cloud Development Kit (CDK) or AWS CloudFormation. The new ability to add custom resources enables developers to add additional resources beyond Amplify’s built-in use cases with a single command.

AWS Amplify is the fastest and easiest way to build cloud-powered mobile and web apps on AWS. Amplify comprises a set of tools and services that enables frontend web and mobile developers to leverage the power of AWS services to build innovative and feature-rich applications. The AWS Amplify CLI is a command line toolchain that helps frontend developers create app backends in the cloud.

## Scenario

![](images/architecture.png)

We would use this blog to create another prototype for our scenario.

After this repo, you will be able to learn:


* Add a custom AWS resource to an Amplify project
* Make custom AWS resources compatible with Amplify’s multi-environment workflows
* How to access custom resources from a Lambda function


### Prerequisites

* Install the latest Amplify CLI; version 7 and above required.
  *  run `npm i -g @aws-amplify/cli`

## Task 1: Initialze your React and Amplify project

* First we have to create a new directory and initialize your Amplify Project.

```bash
npx create-react-app shopping-demo
cd shopping-demo
amplify init -y
```
An Amplify project is your starting point for developing your app backend. After an Amplify project is initialized, you can easily add backend resources such as a GraphQL API backed by Amazon DynamoDB via `amplify add api`.

As you go through the CLI, you’ll be asked to edit your GraphQL schema. The GraphQL schema is going to define your data model and therefore also the underlying infrastructure that Amplify will generate for you.

```bash
type ShoppingItem @model { #Creates a database for ShoppingItem
  id: ID!
  ingredient: String
  quantity: Float
  unit: String
}

type Mutation{
  sendSummaryEmail: Boolean @function(name: "sendSummary-${env}")
}
```
