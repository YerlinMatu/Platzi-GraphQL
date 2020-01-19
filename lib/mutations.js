'use strict'
const connectDB = require('./db');
const { ObjectID } = require('mongodb')

const mutations = {

  addCourse: async (root, { input }) => {
    try {
      const defaults = {
        teacher: '',
        topic: '',
      }

      const newCourse = Object.assign(defaults, input)
      const db = await connectDB()
      const course = await db.collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
      return newCourse

    } catch(error) {
      console.error(error)
    }
  },

  editCourse: async (root, { _id, input }) => {
    try {
      const db = await connectDB()
      await db.collection('courses').updateOne(
        { _id: ObjectID(_id) }, {$set: input} 
      )
      const course = await db.collection('courses').findOne({ _id: ObjectID(_id) })  
      return course
    } catch(error) {
      console.error(error)
    }
  },

  deleteCourse: async (root, { _id }) => {
    try {
      const db = await connectDB()
      const student = await db.collection('courses').findOne({ _id: ObjectID(_id) })  
      await db.collection('courses').deleteOne({ _id: ObjectID(_id) })
      return student
    } catch (error) {
      console.error(error)
    }
  },

  addStudent: async (root, { input }) => {
    try {
      const db = await connectDB()
      const student = await db.collection('students').insertOne(input)
      input._id = student.insertedId
      return input
    } catch(error) {
      console.error(error)
    }
  },

  editStudent: async (root, { _id, input }) => {
    try {
      const db = await connectDB()
      await db.collection('students').updateOne(
        { _id: ObjectID(_id) }, {$set: input} 
      )
      const student = await db.collection('students').findOne({ _id: ObjectID(_id) })  
      return student
    } catch(error) {
      console.error(error)
    }
  },

  deleteStudent: async (root, { _id }) => {
    try {
      const db = await connectDB()
      const student = await db.collection('students').findOne({ _id: ObjectID(_id) })  
      await db.collection('students').deleteOne({ _id: ObjectID(_id) })
      return student
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = mutations