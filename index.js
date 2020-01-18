'use strict'

const {
  graphql,
  buildSchema
} = require('graphql');

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

