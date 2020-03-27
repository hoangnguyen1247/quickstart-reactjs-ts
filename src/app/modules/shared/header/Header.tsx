import React from "react";
import { Container, Nav, NavItem } from "reactstrap";

export function Header() {

    return (
        <Container fluid>
            <Container size="lg">
                <div className="d-flex">
                    <div style={{ width: "240px" }} className="">
                        QuickStart
                    </div>
                    <div className="flex-fill"></div>
                    <div className="">
                        <Nav>
                            <NavItem>
                                Hello
                            </NavItem>
                        </Nav>
                    </div>
                </div>
            </Container>
        </Container>
    )
}
