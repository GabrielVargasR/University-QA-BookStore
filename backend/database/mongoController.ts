import { Book } from '../models/book'

class MongoController {
    public getBooks = () => Book.find();

    public getBook = (isbn : string) => Book.find({'isbn' : isbn});
}

export default MongoController;