'use strict'

const errorHandler = (error, msg = 'Failed Operation') => {
  console.error(error)
  throw new Error(msg)
}

module.exports = errorHandler