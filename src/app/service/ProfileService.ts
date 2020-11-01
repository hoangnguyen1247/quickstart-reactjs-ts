import { apiGet } from "./ApiCaller";

import { APIS_USER__GET_PROFILE } from "./ApiEndpoint";
import { User } from "../dto/User";

export function apiProfile_getProfile() {
    return new Promise((resolve, reject) => {
        apiGet(APIS_USER__GET_PROFILE)
            .then(res => {
                resolve(User(res.data.profile))
            })
            .catch(error => {
                reject(error && error.response ? error.response.data : {});
            });
    })
}
