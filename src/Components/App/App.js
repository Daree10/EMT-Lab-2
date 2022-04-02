import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react"

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            authors: [],
            books: []
        }
    }
}
export default App;
