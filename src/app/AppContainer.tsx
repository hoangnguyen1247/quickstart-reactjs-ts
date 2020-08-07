import React from 'react';
import { History } from 'history';
import { ToastContainer } from "react-toastify";
import { I18n } from "react-redux-i18n";
import { Helmet } from 'react-helmet-async';
import useMedia, { useMediaLayout } from 'use-media';
import {
    useWindowWidth,
} from '@react-hook/window-size';

import { AppContext } from '../app/AppContext';

import { ConfirmDialog } from '../app/core-ui/dialog/ConfirmDialog';
import { ScrollupButton } from './core-ui/scrollup/ScrollupButton';

import { AppInitializer } from './AppInitializer';
import { MessageDialog } from './core-ui/dialog/MessageDialog';

const uiSettingsReducer = (state, action) => {
    return {
        ...state,
        ...action,
    }
}

type Props = {
    history?: History,
    children: ({ profile }) => React.ReactNode,
};

export function AppContainer({
    history,
    children,
}: Props) {

    const [ uiSettings, dispatchUiSettings ] = React.useReducer(uiSettingsReducer, {});
    const windowWidth = useWindowWidth();

    const [ isOpenMessageDialog, setIsOpenMessageDialog ] = React.useState(false);
    const [ isOpenConfirmDialog, setIsOpenConfirmDialog ] = React.useState(false);

    const [ profile, setProfile ] = React.useState(undefined);

    const applicationI18n = I18n.t("application");

    const minWidth992 = useMediaLayout('(min-width: 992px)');
    const darkMode = useMedia('(prefers-color-scheme: dark)');

    const _updateState = (name, state) => {
        dispatchUiSettings({ [name]: state });
    }

    return (
        <AppContext.Provider value={{
            history: history || {},
            // location: typeof history === "object" ? history?.location : {},
            profile,

            windowWidth,
            minWidth992,
            darkMode,

            isShowMobileHomeBar: uiSettings.isShowMobileHomeBar,
            isShowMobileSearchBar: uiSettings.isShowMobileSearchBar,
            isShowMobileActionBar: uiSettings.isShowMobileActionBar,
            navigationInRight: uiSettings.navigationInRight,

            updateProfile: (data) => setProfile(data),

            changeMobileSearchBar: (state) => _updateState("isShowMobileSearchBar", !state),
            changeMobileActionBar: (state) => _updateState("isShowMobileActionBar", !state),
            changeNavigationInRight: (state) => _updateState("isShowNavigationInRight", !state),
        }}>
            <Helmet>
                <title>{applicationI18n.meta.title}</title>
            </Helmet>
            <AppInitializer
            />
            <MessageDialog
                isOpen={isOpenMessageDialog}
                value={""}
                toggleOpen={() => setIsOpenMessageDialog(!isOpenMessageDialog)}
                onChange={() => {}}
            />
            <ConfirmDialog
                isOpen={isOpenConfirmDialog}
                value={""}
                toggleOpen={() => setIsOpenConfirmDialog(!isOpenConfirmDialog)}
                onChange={() => {}}
            />
            <ToastContainer
                autoClose={5000}
            />
            <ScrollupButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{}}
                ToggledStyle={{}}
            />
            {children({
                profile,
            })}
        </AppContext.Provider>
    );
}
