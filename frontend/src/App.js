import { useState } from 'react';
import BookList from "./components/Books/BookList";
import BookInfo from './components/Books/BookInfo';
import Header from "./components/UI/Header";

const App = () => {
  const [isQuerying, setIsQuerying] = useState(false);
  const [isbn, setIsbn] = useState(0);
  
  const queryHandler = (newState, newIsbn) => {
    setIsQuerying(newState);
    setIsbn(newIsbn);
  };

  return (
    <div>
      <Header/>
      {!isQuerying && <BookList onQuery={queryHandler}/>}
      {isQuerying && <BookInfo isbn={isbn} onClick={queryHandler}/>}
    </div>
  );
}

export default App;
