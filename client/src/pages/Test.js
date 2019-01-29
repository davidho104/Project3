import React, { Component } from "react";
import ManagerPage from "../components/ManagerPage";
import NavTabsManager from "../components/NavTabsManager";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";


var str = "This is for Testing";

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeSelected: true,
            books: [],
            title: "",
            author: "",
            synopsis: ""
        };
        // this.handleClick = this.handleClick.bind(this);
    }



    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <NavTabsManager />
                <Row>
                    <ManagerPage>
                        {str}
                        {this.props.uid}
                        {this.props.id}
                    </ManagerPage>
                </Row>
            </Container>
        );
    }
}

export default Test;