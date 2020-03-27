import React from "react";
import { Link } from "react-router-dom";
import {
    Button, Card, Container, CardHeader, CardBody,
} from "reactstrap";

import { AppContext } from "../../../AppContext";

class HomePage extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);

        this._handleButtonButtonClick = this._handleButtonButtonClick.bind(this);
    }

    _handleButtonButtonClick() {
        const { 
            confirmDialogRef,
        } = this.context;

        if (confirmDialogRef && confirmDialogRef.current) {
            confirmDialogRef.current.show({});
        }
    }

    render() {
        return (
            <div>
                <Link
                    to={`/login`}
                >
                    Login
                </Link>
                <Button
                    onClick={this._handleButtonButtonClick}
                >
                    Button
                </Button>
                <Container>
                    <Card>
                        <CardHeader>
                            Title
                        </CardHeader>
                        <CardBody>
                            Home page
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default HomePage;
