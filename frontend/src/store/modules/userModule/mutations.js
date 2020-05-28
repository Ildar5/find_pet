import { LOADING_END, LOADING_START, AUTH_SUCCESS, USER_LOGOUT } from './mutationTypes.js'

export const mutations = {
    [LOADING_START](state) {
        state.isLoading = true;
    },

    [LOADING_END](state) {
        state.isLoading = false;
    },

    [AUTH_SUCCESS](state, token) {
        state.token = token;
    },

    [USER_LOGOUT](state) {
        state.token = '';
    }
}