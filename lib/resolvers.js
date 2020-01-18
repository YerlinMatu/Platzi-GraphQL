'use strict'

const courses = [
  {
    _id: 'anyid1',
    title: 'Untitle1',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  },
  {
    _id: 'anyid2',
    title: 'Untitle2',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  },
  {
    _id: 'anyid3',
    title: 'Untitle3',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  }
]

const resolvers = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.find(course => course._id  === args.id)
      return course
    }
  }
}

module.exports = resolvers