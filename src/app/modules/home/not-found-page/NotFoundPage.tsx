import React from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {

    render() {
        return (
            <div>
                <Link
                    to={`/login`}
                >
                    Not Found
                </Link>
            </div>
        );
    }
}

export default NotFoundPage;
