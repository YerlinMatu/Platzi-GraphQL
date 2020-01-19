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

  getSingleCourse: async (root, { id }) => {
    try {
      const db = await connectDB()
      const course = await db.collection('courses').findOne({ _id: ObjectID(id) })
      return course
    } catch (error) {
      console.error(error)
    }
  },

  getSingleStudent: async (root, { id }) => {
    try {
      const db = await connectDB()
      const student = await db.collection('students').findOne({ _id: ObjectID(id) })
      return student
    } catch (error) {
      console.error(error)
    }
  },

  getStudents: async () => {
    try {
      const db = await connectDB()
      const students = await db.collection('students').find().toArray() || []
      return students
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = queries