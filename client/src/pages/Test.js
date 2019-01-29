import React, { Component } from "react";
import ManagerPage from "../components/ManagerPage";
import NavTabsManager from "../components/NavTabsManager";
// import API from "../utils/API";
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