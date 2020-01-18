'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Untitle1',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  },
  {
    _id: 'anyid',
    title: 'Untitle2',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  },
  {
    _id: 'anyid',
    title: 'Untitle3',
    teacher: 'Professor',
    description: 'A description',
    topic: 'programing',
  }
]

const resolvers = {
  getCourses: () => {
    return courses
  },
}

module.exports = resolvers