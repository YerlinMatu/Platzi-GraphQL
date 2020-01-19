'use strict'
const connectDB = require('./db');
const { ObjectID } = require('mongodb')
const errorHandler = require('../utils/errorHandler')

const queries = {
  getCourses: async () => {
    try {
      const db = await connectDB()
      const courses = await db.collection('courses').find().toArray() || []
      return courses
    } catch (error) {
      errorHandler(error)
    }
  },

  getCourse: async (root, { id }) => {
    try {
      const db = await connectDB()
      const course = await db.collection('courses').findOne({ _id: ObjectID(id) })
      return course
    } catch (error) {
      errorHandler(error)
    }
  },

  getPerson: async (root, { id }) => {
    try {
      const db = await connectDB()
      const student = await db.collection('students').findOne({ _id: ObjectID(id) })
      return student
    } catch (error) {
      errorHandler(error)
    }
  },

  getPeople: async () => {
    try {
      const db = await connectDB()
      const students = await db.collection('students').find().toArray() || []
      return students
    } catch (error) {
      errorHandler(error)
    }
  },
}

module.exports = queries