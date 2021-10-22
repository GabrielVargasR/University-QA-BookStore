import { useState, useEffect, useCallback } from 'react';
import BookController from "../../controllers/BookController";
import BookInfoItem from './BookInfoItem';

const BookInfo = (props) => {
    const [book, setBook] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    const queryBook = useCallback(() => {
        setIsLoading(true);
        const bookController = new BookController();
        bookController.queryBook(props.isbn)
        .then((book) => {
            console.log(book.book[0]);
            setBook(book.book[0]);
        })
        .catch(() => {
            setBook({});
        })
        setIsLoading(false);
    }, [props.isbn]);

    useEffect(() => {
        queryBook();
    }, [queryBook])

    return(
    <div>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && Object.keys(book) === 0 && <h2>No info available</h2>}
        {!isLoading && <BookInfoItem book={book} onClick={props.onClick}/>}
    </div>);
}

export default BookInfo;