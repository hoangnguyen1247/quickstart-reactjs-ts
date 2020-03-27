import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { Button } from "reactstrap";
import { I18n } from "react-redux-i18n";
import { Helmet } from "react-helmet-async";
import PlusIcon from "mdi-react/PlusIcon";

import { AppContext } from "../../../AppContext";

import { Header } from "../../shared/header/Header";
import { PageInner } from "../../shared/page-inner/PageInner";
import { NavigationBar } from "../../shared/navigation/NavigationBar";
import { Toolbar } from "../../shared/toolbar/Toolbar";

const mapStateToProps = () => {
    return {

    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        ...bindActionCreators({

        }, dispatch),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true });

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
        const homeI18n = I18n.t("home");

        return (
            <div>
                <Helmet>
                    <title>{homeI18n.meta.title}</title>
                </Helmet>
                <Header
                />
                <div className="d-flex">
                    <NavigationBar />
                    <PageInner>
                        <Toolbar
                            breadcrumbActiveItemLabel="Home"
                        >
                            <Button>
                                <PlusIcon />
                            </Button>
                        </Toolbar>
                        <div>
                            Content
                        </div>
                    </PageInner>
                </div>
            </div>
        );
    }
}

export default connector(HomePage);
