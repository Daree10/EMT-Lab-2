import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react"
import EbookService from "../../Repository/Book-Shop-Repository"
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            authors: [],
            books: []
        }
    }

    render(){

        return(
            <Router>

                    <main>

                        <div className= "container">
                            <Route path={}exact render={() =>

                            }

                        </div>

                    </main>

            </Router>
        );

    }

    loadCountries = () => {
        EShopService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }

    loadBooks = () => {
        EShopService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadAuthors = () => {
        EShopService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

}


export default App;
