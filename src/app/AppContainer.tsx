import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { History, UnregisterCallback } from 'history';

import { RootState } from '../reducers';
import { AppContext } from './AppContext';

import InitialComponent from './modules/common/initial-component/InitialComponent';

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

const connector = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true });

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    history?: History,
    children: React.ReactNode,
    profile: any,
};

class AppContainer extends React.Component<Props> {

    state = {
        precacheData: {
            priceUnitOptions: [],
        },
    };

    unlistenHistory: UnregisterCallback;
    initialComponentRef: { current: null | InitialComponent };

    constructor(props: Props, context: any) {
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
                <h1>Hello</h1>
            </AppContext.Provider>
        );
    }
}

export default connector(AppContainer);
