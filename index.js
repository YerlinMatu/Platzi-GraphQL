'use strict'

const {
  graphql,
  buildSchema
} = require('graphql');

const express = require('express');
const gqlMiddleware = require('express-graphql');

const app = express();
const port = process.env.port || 3000
// def schema
const schema = buildSchema(`
  type Query {
    hello: String
    greeted: String
  }
`)

// Resolvers config
const resolvers = {
  hello: () => {
    return 'Hello World'
  },
  greeted: () => {
    return 'Welcome'
  }
}

// run query 'hello'
graphql(schema, '{ hello }', resolvers).then(data => {
  console.log(data);
})

graphql(schema, '{ greeted }', resolvers).then(data => {
  console.log(data);
})

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})