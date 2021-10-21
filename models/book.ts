import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    cover_uri: String,
    price: Number,
    language: String,
    publication_date: Date,
    editorial: String,
    genre: String,
    book_type: String,
    pages: Number
});

// looks for 'books' collection
export const Book = mongoose.model('Book', bookSchema);