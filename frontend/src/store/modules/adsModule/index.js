import actions from './actions'
// import { mutations } from './mutations'
import getters from './getters'

const state = {
    ads: {}
}

export const adsModule = {
    namespaced: true,
    actions,
    state,
    mutations,
    getters
}