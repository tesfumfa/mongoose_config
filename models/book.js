const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* create book schema */
const BookSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  author: {
    type: String
  }
})

/* create book model */
const Book = mongoose.model('Book', BookSchema)

module.exports = Book