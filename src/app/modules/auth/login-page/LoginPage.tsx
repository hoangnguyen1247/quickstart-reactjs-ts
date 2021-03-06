import React from "react";

import {
    apiAuth_login,
} from "src/app/service/AuthService";

import { LoginForm } from "./children/LoginForm";

function LoginPage(props) {

    const _handleLoginByEmail = (data, callback) => {
        apiAuth_login(data)
            .then(res => {
                if (typeof callback === "function") {
                    callback();
                }
            })
            .catch(error => {
                if (typeof callback === "function") {
                    callback();
                }
            })
    }

    return (
        <div className="login-page position-fixed d-flex align-items-center" style={{ width: "100%", height: "100%", }}>
            <div className="login-page-inner w-100 d-flex justify-content-center">
                <LoginForm
                    onLogin={_handleLoginByEmail}
                />
            </div>
        </div>
    )
}

export default LoginPage;
