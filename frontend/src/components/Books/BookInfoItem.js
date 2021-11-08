import style from './BookInfoItem.module.css'

const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    return date.toLocaleString('en-US', { day: '2-digit', month: 'long', year: 'numeric'});
}

const BookInfoItem = (props) => {

    const clickHandler = () => {
        props.onClick(false, 0);
    }

    return (
        <div className={style.container}>
            <div className={style.column}>
                <button type="button" onClick={clickHandler} className={style.back}>{'<'}</button>
                <div className={style.info}>
                    <h2>{`Title: ${props.book.title}`}</h2>
                    <h2>{`Author: ${props.book.author}`}</h2>
                    <h2>{`ISBN: ${props.book.isbn}`}</h2>
                    <h2>{`Price: $${props.book.price}`}</h2>
                    <h2>{`Language: ${props.book.language}`}</h2>
                    <h2>{`Publication Date: ${formatDate(props.book.publication_date)}`}</h2>
                    <h2>{`Editorial: ${props.book.editorial}`}</h2>
                    <h2>{`Genre: ${props.book.genre}`}</h2>
                    <h2>{`Book Type: ${props.book.book_type}`}</h2>
                    <h2>{`Pages: ${props.book.pages}`}</h2>
                </div>
            </div>
            <div className={style.column}>
                <div className={style['cover-container']}>
                    <img src={props.book.cover_uri} alt={`${props.book.title} - Cover`} className={style.image}/>
                </div>
            </div>
        </div>
    );
}

export default BookInfoItem;