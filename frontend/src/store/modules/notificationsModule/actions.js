import { CLEAR_NOTIFICATION } from './mutationTypes';

export const clearNotification = ({ commit }) => {
    commit(CLEAR_NOTIFICATION)
}

export default {
    clearNotification
}