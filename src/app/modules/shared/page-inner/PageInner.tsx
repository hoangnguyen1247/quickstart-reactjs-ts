import React from "react";
import { Container } from "reactstrap";

type Props = {
    children: React.ReactNode,
};

export function PageInner({ children }: Props) {

    return (
        <Container fluid className="d-block">
            {children}
        </Container>
    )
}
