import React from "react";
import validator from "validator";
import { I18n } from "react-redux-i18n";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import { AnyObject } from 'src/common';
import { FORM_STATES } from "src/app/utils/Constants";

import {
    apiAuth_forgotPassword,
} from "src/app/service/AuthService";

import { AppContext } from 'src/app/AppContext';
import { InputFormGroup } from "src/app/core-ui/form-group/InputFormGroup";
import { Toastify } from "src/app/core-ui/toastify/Toastify";
import { Image } from "src/app/core-ui/image/Image";

type Props = {
};

type State = {
    fields: AnyObject,
    fieldErrors: AnyObject,
    formState: string,
}

const defaultProps = {

}

const initialState = {
    fields: { 
        email: "",
        phoneNumber: "",
    },
    fieldErrors: {
        email: "",
        phoneNumber: "",
    },
    dirtyFields: {},
    formState: FORM_STATES.PRISTINE,
}

export class ForgotPasswordForm extends React.Component<Props, State> {

    static defaultProps = defaultProps;
    static contextType = AppContext;

    state: State = initialState;

    handleForgotPassword = (data) => {
        const serverValidationsI18n = I18n.t("server_validations");

        apiAuth_forgotPassword(data)
            .then(res => {
                Toastify.showSuccessToast("Đã gửi yêu cầu");

                const { history } = this.context;
                if (history) {
                    history.push(`/reset-password`);
                }
            })
            .catch(error => {
                Toastify.showDangerToast(serverValidationsI18n[error.errorCode]);
            });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const errorMessage = this.validateField(name, value);
        this.setState({ 
            fields: { ...this.state.fields, [name]: value, }, 
            fieldErrors: Object.assign({}, this.state.fieldErrors, { [name]: errorMessage } ),
            formState: FORM_STATES.DIRTIED,
        });
    };

    handleRecaptchaChange = (value) => {
        this.setState({ fields: { ...this.state.fields, recaptcha: value, }, formState: FORM_STATES.DIRTIED });
    };

    validateField = (field, value) => {
        const validationsI18n = I18n.t("validations");

        switch (field) {
            case "phoneNumber":
                if (validator.isEmpty(value.trim())) {
                    return validationsI18n.fieldIsRequired;
                } else return "";
            case "email":
                if (validator.isEmpty(value.trim())) {
                    return validationsI18n.fieldIsRequired;
                } return "";
            default:
                if (validator.isEmpty(value.trim())) {
                    return validationsI18n.fieldIsRequired;
                } return "";
        }
    };

    validateForm = () => {
        const { fields } = this.state;

        const fieldErrors = {
            "phoneNumber": this.validateField("phoneNumber", this.state.fields.phoneNumber),
        };

        this.setState({ fieldErrors });
        return !Object.keys(fieldErrors).some(key => fieldErrors[key]);
    };

    handleSubmitForm = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            const { phoneNumber, recaptcha } = this.state.fields;

            this.handleForgotPassword({ phoneNumber: phoneNumber, reCaptchaResponse: recaptcha });
        }
    };

    render() {
        const { fields, fieldErrors, formState } = this.state;

        return (
            <div className={"forgot-password-form d-flex align-items-center justify-content-center"} >
                <div className={"forgot-password-form-inner"}>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="needs-validation"
                    >
                        <Image
                            src={"/assets/images/logo.png"}
                            width={"128px"}
                            height={"128px"}
                            className={"logo"}
                        />

                        <p className={"headline"}>
                            {I18n.t("forgot_password.form.headline")}
                        </p>

                        <InputFormGroup
                            className={"form-group text-left"}
                            name={"phoneNumber"}
                            value={fields.phoneNumber}
                            placeholder={I18n.t("forgot_password.form.placeholder.phoneNumber")}
                            label={I18n.t("forgot_password.form.placeholder.phoneNumber")}
                            errorMessage={fieldErrors.phoneNumber}
                            onChange={this.handleInputChange}
                        />
                        <div className={"form-group button-wrap"}>
                            <Button
                                color="primary"
                                type="submit" 
                                className={"btn-login text-uppercase"}
                                disabled={formState === FORM_STATES.PRISTINE || 
                                    Object.keys(fieldErrors).some(key => fieldErrors[key])
                                }
                                onClick={this.handleSubmitForm}
                            >
                                {I18n.t("forgot_password.form.button.send_request_link")}
                            </Button>
                        </div>

                        <Link to={"/login"} className={"btn btn-link go-back-link"}>
                            {I18n.t("forgot_password.form.link.back_to_login")}
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
