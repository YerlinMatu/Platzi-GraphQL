'use strict'
const connectDB = require('./db');
const { ObjectID } = require('mongodb')

const mutations = {

  createCourse: async (root, { input }) => {
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

  addPeople: async (root, { courseID, personID }) => {
    try {
      const db = await connectDB()
      const course = await db.collection('courses').findOne({ _id: ObjectID(courseID) })
      const person = await db.collection('students').findOne({ _id: ObjectID(personID) })

      if (!course || !person) throw new Error('The person or course does not exist')

      await db.collection('courses').updateOne(
        { _id: ObjectID(courseID) },
        { $addToSet: { people: ObjectID(personID) } }
      )
      return course
    } catch (error) {
      console.error(error)
    }
  },

  createPerson: async (root, { input }) => {
    try {
      const db = await connectDB()
      const student = await db.collection('students').insertOne(input)
      input._id = student.insertedId
      return input
    } catch(error) {
      console.error(error)
    }
  },

  editPerson: async (root, { _id, input }) => {
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