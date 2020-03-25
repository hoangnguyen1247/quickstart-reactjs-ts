import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { History, UnregisterCallback } from 'history';

import { RootState } from '../reducers';
import { AppContext } from '../app/AppContext';

import InitialComponent from '../app/modules/common/initial-component/InitialComponent';
import { ConfirmDialog } from '../app/core-ui/dialog/ConfirmDialog';

const mapStateToProps = ({ catalogReducer, profileReducer }: RootState ) => {
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
    minWith992MediaQuery: any;
    darkModeMediaQuery: any;

    initialComponentRef: { current: null | InitialComponent };
    _confirmDialogRef: { current: null | ConfirmDialog };

    constructor(props: Props, context: any) {
        super(props, context);

        this.unlistenHistory = () => {};

        this.initialComponentRef = React.createRef();
        this._confirmDialogRef = React.createRef();

        this.subscribeLocationChange = this.subscribeLocationChange.bind(this);
        this.unsubscribeLocationChange = this.unsubscribeLocationChange.bind(this);

        this.getUserProfile = this.getUserProfile.bind(this);
    }

    componentDidMount() {
        this.subscribeLocationChange();
        this.subscribeWindowResize();
        this.subscribeConnectionChange();
        this.subscribeMinWidthChange();
        this.subscribeDarkModeChange();
    }

    componentDidUpdate(prevProps: Props) {

    }

    componentWillUnmount() {
        this.unsubscribeLocationChange();
        this.unsubscribeWindowResize();
        this.unsubscribeConnectionChange();
        this.unsubscribeMinWidthChange();
        this.unsubscribeDarkModeChange();
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

    subscribeWindowResize() {
        window.addEventListener('resize', () => {
        }, false);
    }

    unsubscribeWindowResize() {
        window.removeEventListener('resize', () => {

        });
    };

    subscribeConnectionChange() {
        window.addEventListener("online", () => {

        });
        window.addEventListener("offline", () => {

        });
    }

    unsubscribeConnectionChange() {
        window.removeEventListener("online", () => {

        });
        window.removeEventListener("offline", () => {

        });
    };

    subscribeMinWidthChange() {
        if (window.matchMedia) {
            this.minWith992MediaQuery = window.matchMedia('(min-width: 992px)');
            this.changeMinWidth992(this.minWith992MediaQuery.matches);

            this.minWith992MediaQuery.addListener((e) => {
                const minWith992Match = e.matches;
                // const { current } = this._confirmDialogRef;
                // if (current) {
                    // current.show({}, () => {
                        this.changeMinWidth992(minWith992Match);
                    // })
                // }
            });
        }
    }

    unsubscribeMinWidthChange() {
        if (this.minWith992MediaQuery) {
            this.minWith992MediaQuery.removeListener((e) => {
            });
        }
    }

    subscribeDarkModeChange() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            this.changeDarkMode(this.darkModeMediaQuery.matches);

            this.darkModeMediaQuery.addListener((e) => {
                const darkModeMatch = e.matches;
                // console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
                
                const { current } = this._confirmDialogRef;
                if (current) {
                    current.show({}, () => {
                        this.changeDarkMode(darkModeMatch);
                    })
                }
            });
        }
    }

    unsubscribeDarkModeChange() {
        if (this.darkModeMediaQuery) {
            this.darkModeMediaQuery.removeListener((e) => {
            });
        }
    }

    changeMinWidth992(match: boolean) {

    }
    
    changeDarkMode(match: boolean) {

    }

    getUserProfile() {

    };

    render() {
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
                <ConfirmDialog
                    ref={this._confirmDialogRef}
                />
                {this.props.children}
                <h1>Hello</h1>
            </AppContext.Provider>
        );
    }
}

export default connector(AppContainer);
