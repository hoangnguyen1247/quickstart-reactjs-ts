import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { RootState } from "src/reducers";
import { IUser } from "src/app/dto/User";

import { apiProfile_getProfile } from "./service/ProfileService";

import { AppContext } from "./AppContext";

export function AppInitializer(props) {

    const { updateProfile } = useContext(AppContext);
    const profile = useSelector<RootState, IUser>(state => state.catalogReducer.profile);

    //
    // didMount and willUnmount
    React.useEffect(() => {

    }, [])

    //
    // didUpdate
    React.useEffect(() => {

    })

    React.useEffect(() => {
        if (profile?.id) {
            async function getProfile() {
                try {
                    const user = await apiProfile_getProfile();
                    updateProfile(user);

                    updateRefreshToken();
                } catch (err) {
                    console.log(err);
                    updateProfile(null);
                }
            }

            async function updateRefreshToken() {

            }

            getProfile();
        }
    }, [ profile, updateProfile ])

    return null;
}
