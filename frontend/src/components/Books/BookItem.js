import style from './BookItem.module.css'

const BookItem = (props) => {

    const clickHandler = (event) => {
        props.onClick(true, props.book.isbn);
        console.log(props.book.isbn);
    }

    return (
    <div className={style['book_container']} onClick={clickHandler}>
        <img src={props.book.cover_uri} alt={`${props.book.title} - Cover`} className={style.image}/>
        <div className={style['title_container']}>
            <h2>{`${props.book.title}`}</h2>
            <p>{`${props.book.author}`}</p>
        </div>
    </div>);
};

export default BookItem;