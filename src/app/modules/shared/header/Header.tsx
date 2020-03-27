import React from "react";
import { Container, Nav, NavItem, Button } from "reactstrap";

export function Header() {

    return (
        <Container fluid>
            <Container size="lg" className="py-2">
                <div className="d-flex">
                    <div style={{ width: "240px" }} className="d-flex align-items-center">
                        QuickStart
                    </div>
                    <div className="flex-fill"></div>
                    <div className="">
                        <Nav>
                            <NavItem>
                                <Button
                                    className="rounded-0"
                                >
                                    Hello
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    outline
                                    className="rounded-0"
                                >
                                    Hello
                                </Button>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
            </Container>
        </Container>
    )
}
