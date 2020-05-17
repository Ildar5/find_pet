import actions from './actions'
import { mutations } from './mutations'
import getters from './getters'

const state = {
    isLoading: false,
}

console.log(getters);

export const userModule = {
    actions,
    state,
    mutations,
    getters
}