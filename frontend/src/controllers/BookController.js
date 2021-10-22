import axios from 'axios';

class BookController {

    config = {
        method: 'get',
        url: 'http://192.168.87.224:5000/api/books?'
    }

    listBooks = () => {
        return axios(this.config)
            .then(res=>{
                return res.data;
            })
            .catch (e => {
                console.log(e);
            })
        };

    queryBook = (pIsbn) => {
        const qConfig = {...this.config, params: {isbn: pIsbn}}
        return axios(qConfig)
            .then(res=>{
                return res.data;
            })
            .catch (e=>console.log(e))
    };
}

export default BookController;