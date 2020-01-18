'use strict'
const connectDB = require('./db');

const queries = {
  getCourses: async () => {
    let db, courses = []
    try {
      db = await connectDb()
      courses = await db.collection('courses').find().toArray()
    } catch (error) {
      console.log(error);
    }
    return courses
  },
  getCourse: (root, args) => {
    const course = courses.find(course => course._id === args.id)
    return course
  }
}

module.exports = queries