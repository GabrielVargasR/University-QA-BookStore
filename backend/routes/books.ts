import * as express from "express";
import BookController from "../controllers/bookController";

const app = express();
const bookController = new BookController();

// middleware for development stages only
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', "*");
  next();
});


app.get("/", (req, res, next) => {
  if (req.query.isbn) {
    bookController.getBook(req.query.isbn.toString())
    .then((book : object) =>{
        res.status(200).json({
            query: req.query.q,
            book
        })
    })
  } else {
    bookController.getBooks()
    .then((books : object)=>{
        res.status(200).json({
            query: req.query.q,
            books
        });
    })
    .catch(() => {
        res.status(400).json({
            message: "Error: Couldn't fetch articles"
        });
    })
  }
});

export default app;
