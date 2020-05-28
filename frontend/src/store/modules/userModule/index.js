import actions from './actions'
import { mutations } from './mutations'
import getters from './getters'

const state = {
    isLoading: false,
    token: localStorage.getItem('token'),
}

export const userModule = {
    namespaced: true,
    actions,
    state,
    mutations,
    getters
}