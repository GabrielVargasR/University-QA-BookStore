import { Book } from '../models/book'

class MongoController {
    public getBooks = () => {
        return Book.find();
    }

    public getBook = (isbn : string) => {
        return Book.find({'isbn' : isbn});
    };
}

export default MongoController;