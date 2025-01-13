import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, "Book title is required"]
  },
  author:{
    type: String,
    required: [true, "Book author is required"]
  }
})

export const Book = mongoose.model('Book', BookSchema)
 
