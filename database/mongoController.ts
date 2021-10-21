import { Book } from '../models/book'

class MongoController {
    public getBooks = () => {
        return Book.find();
    }
}

export default MongoController;