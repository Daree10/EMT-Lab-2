import axios from "../Custom-Axios/axsios"

const BookService = {
    fetchCountries:() => {
        return axios.get("/countries")
    },
    fetchAuthors: () => {
        return axios.get("/authors")
    },
    fetchBooks:() => {
        return axios.get("/books")
    }
}

export default EBookService;