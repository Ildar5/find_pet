import { NOTIFICATION_SUCCESS, NOTIFICATION_FAILED, CLEAR_NOTIFICATION } from './mutationTypes';

export const mutations = {
    [NOTIFICATION_SUCCESS](state, msg) {
        state.type = "is-success";
        state.msg = msg;
    },

    [NOTIFICATION_FAILED](state, msg) {
        state.type = 'is-danger';
        state.msg = msg;
    },

    [CLEAR_NOTIFICATION](state) {
        state.msg = '';
        state.type = '';
    }
}

