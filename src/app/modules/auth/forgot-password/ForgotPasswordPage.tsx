import React from "react";
import { I18n } from "react-redux-i18n";
import { Helmet } from "react-helmet-async";
import { History } from "history";

import { ForgotPasswordForm } from "./children/ForgotPasswordForm";

type Props = {
    history: History,
};

const defaultProps = {

};

function ForgotPasswordPage(props: Props) {

    return (
        <div className={"forgot-password-page"}>
            <Helmet>
                <title>{I18n.t("login.meta.title")}</title>
            </Helmet>
            <div className={"forgot-password-page-inner"}>
                <div className={"background"}>
                </div>
                <ForgotPasswordForm
                />
            </div>
        </div>
    );
}

ForgotPasswordPage.defaultProps = defaultProps;

export default ForgotPasswordPage;
