import style from './BookInfoItem.module.css'

const BookInfoItem = (props) => {

    const clickHandler = () => {
        props.onClick(false, 0);
    }

    return (
        <div>
            <div>
            <img src={props.book.cover_uri} alt={`${props.book.title} - Cover`} className={style.image}/>
            </div>
            <div>
                <h1>{props.book.title}</h1>
                <h1>{props.book.author}</h1>
                <h1>{props.book.isbn}</h1>
                <h1>{`$${props.book.price}`}</h1>
                <h1>{props.book.language}</h1>
                <h1>{props.book.publication_date}</h1>
                <h1>{props.book.editorial}</h1>
                <h1>{props.book.genre}</h1>
                <h1>{props.book.book_type}</h1>
                <h1>{props.book.pages}</h1>
                <button type="button" onClick={clickHandler}>Back</button>
            </div>
        </div>
    );
}

export default BookInfoItem;