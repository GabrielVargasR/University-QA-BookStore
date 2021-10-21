import * as express from "express";
import BookController from "../controllers/bookController";

const app = express();
const bookController = new BookController();

app.get("/", (req, res, next) => {
  if (req.query.id) {
      // use controller
    res.send("<h1>Book with id</h1>");
  } else {
      // use controller
    res.send("<h1>Books</h1>");
  }
});

export default app;
