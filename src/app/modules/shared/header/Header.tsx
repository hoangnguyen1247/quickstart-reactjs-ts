import React from "react";
import { Container, Nav, NavItem, Button } from "reactstrap";

import { AppContext } from "../../../AppContext";

import { DesktopHeaderBar } from "./children/DesktopHeaderBar";

export function Header() {

    const { minWidth992 } = React.useContext(AppContext);

    if (!minWidth992) {
        return (
            <div></div>
        )
    } else {
        return (
            <DesktopHeaderBar>
            </DesktopHeaderBar>
        )
    }
}
