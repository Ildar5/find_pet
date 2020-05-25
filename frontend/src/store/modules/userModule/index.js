import actions from './actions'
import { mutations } from './mutations'
import getters from './getters'

const state = {
    isLoading: false,
}

export const userModule = {
    namespaced: true,
    actions,
    state,
    mutations,
    getters
}