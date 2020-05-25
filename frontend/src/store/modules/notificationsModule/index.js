import { mutations } from './mutations';
import getters from './getters';
import actions from './actions'

const state = {
    type: '',
    msg: '',
}

export const notificationsModule = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}