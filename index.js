'use strict'

const {
  graphql,
  buildSchema
} = require('graphql');

// def schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// run query 'hello'
graphql(schema, '{ hello }').then(data => {
  console.log(data);
})
