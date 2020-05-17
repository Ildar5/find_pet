import { REGISTER_TOKEN_SUCCESS, REGISTER_TOKEN_START, REGISTER_TOKEN_FAILED } from './mutationTypes.js'

export const mutations = {
    [REGISTER_TOKEN_START](state) {
        state.isLoading = true;
    },

    [REGISTER_TOKEN_SUCCESS](state) {
        state.isLoading = false;
    },

    [REGISTER_TOKEN_FAILED](state) {
        state.isLoading = false;
    }
}