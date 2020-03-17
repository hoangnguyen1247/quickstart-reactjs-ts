import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { History, UnregisterCallback } from 'history';

import { RootState } from '../reducers';
import { AppContext } from './AppContext';

import InitialComponent from './modules/common/initial-component/InitialComponent';

type Props = {
    history: History,
    children: React.ReactNode,
};

class AppContainer extends React.Component<Props> {

    state = {
        precacheData: {
            priceUnitOptions: [],
        },
    };

    unlistenHistory: UnregisterCallback;
    initialComponentRef: { current: null | InitialComponent };

    constructor(props: Props, context) {
        super(props, context);

        this.unlistenHistory = () => {};

        this.initialComponentRef = React.createRef();

        this.subscribeLocationChange = this.subscribeLocationChange.bind(this);
        this.unsubscribeLocationChange = this.unsubscribeLocationChange.bind(this);

        this.getUserProfile = this.getUserProfile.bind(this);
    }

    componentDidMount() {
        this.subscribeLocationChange();
    }

    componentDidUpdate(prevProps: Props) {

    }

    componentWillUnmount() {
        this.unsubscribeLocationChange();
    }

    subscribeLocationChange() {
        const { history } = this.props;

        if (history) {
            this.unlistenHistory = history.listen((location, action) => {
                console.log(action, location.pathname, location.state);
            });
        }
    };

    unsubscribeLocationChange() {
        if (this.unlistenHistory) {
            this.unlistenHistory();
        }
    };

    getUserProfile() {

    };

    render() {
        const { precacheData } = this.state;
        const {
            history,
            profile,
        } = this.props;

        return (
            <AppContext.Provider value={{
                history: history,
                location: typeof history === "object" ? history.location : {},
                initialComponentRef: this.initialComponentRef,
                profile,
            }}>
                <InitialComponent
                    ref={this.initialComponentRef}
                />
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const mapStateToProps = ({ profileReducer }: RootState ) => {
    return {
        profile: profileReducer.profile,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        ...bindActionCreators({
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(AppContainer);
