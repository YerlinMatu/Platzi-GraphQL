'use strict'

const connectDb = require('./db');

const courses = [
  {
    title: 'Untitle1',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  },
  {
    title: 'Untitle2',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  },
  {
    title: 'Untitle3',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  }
]

const resolvers = {
  Query: {
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
      const course = courses.find(course => course._id  === args.id)
      return course
    }
  }
}

module.exports = resolvers