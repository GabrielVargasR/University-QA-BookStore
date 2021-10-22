import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style['title_container']}>
          <h1>Book Store</h1>
        </div>
      );
}

export default Header;