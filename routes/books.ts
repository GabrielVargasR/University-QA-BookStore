import * as express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    if (req.query.id) {
        res.send('<h1>Book with id</h1>'); 
    } else {
        res.send('<h1>Books</h1>');
    }
    
});

export default app;