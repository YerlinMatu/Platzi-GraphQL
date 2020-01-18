'use strict'

const {
    MongoClient
} = require('mongodb');
const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

// const uri = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`

let connection

async function connectDB() {
    if (connection) return connection
    let client

    try {
        client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        connection = client.db(DB_NAME)
    } catch (error) {
        console.log('Could not connect to db', uri, error)
        process.exit(1)
    }
    return connection
}

module.exports = connectDB