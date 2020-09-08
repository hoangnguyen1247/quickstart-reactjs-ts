import React from "react";
import { Link } from "react-router-dom";
import {
    Button, Card, Container, CardHeader, CardBody,
} from "reactstrap";

function ChangeProfilePage(props) {

    return (
        <div>
            <Link
                to={`/login`}
            >
                Login
            </Link>
            <Button
            >
                Button
            </Button>
            <Container>
                <Card>
                    <CardHeader>
                        Title
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default ChangeProfilePage;
