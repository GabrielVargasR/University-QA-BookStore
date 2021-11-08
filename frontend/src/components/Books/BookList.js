import { useState, useEffect, useCallback } from 'react';
import BookItem from './BookItem';
import BookController from '../../controllers/BookController'

const BookList = (props) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchBooks = useCallback(() => {
        setLoading(true);
        const bookController = new BookController();
        bookController.listBooks()
        .then((querriedBooks) => {
            setBooks(querriedBooks.books);
        })
        .catch(()=>{
            setBooks([]);
        })
        setLoading(false);
    }, []);
    
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {!loading && books.length <= 1 && <h2>No books</h2>}
            {!loading && books.map(book => {
                return (<BookItem book={book} key={book.isbn} onClick={props.onQuery}/>);
            })}
        </div>
    );
}

export default BookList;