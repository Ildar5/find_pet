import axios from 'axios';
import { router } from "@/main.js"
import {
    LOADING_END,
    LOADING_START,
    AUTH_SUCCESS,
    AUTH_FAILED,
    USER_LOGOUT,
} from './mutationTypes.js'

const REGISTRATION_URL = 'http://127.0.0.1:8000/rest-auth/registration/';
const AUTH_URL = 'http://127.0.0.1:8000/rest-auth/login/';

export const authUser = async ({ commit }, { email, password }) => {
    const postParams = {
        username: email,
        password
    }
    console.log(email, password)
    commit(LOADING_START);
    await axios.post(AUTH_URL, postParams)
        .then(({ data: { key } }) => {
            localStorage.setItem('token', key);
            commit(AUTH_SUCCESS, key);
            router.push('/');
            commit('notificationsModule/NOTIFICATION_SUCCESS', 'Вы упешно авторизовались!', { root: true })
        })
        .catch(({ response: { data: { password, non_field_errors } } }) => {
            const errorMsg = password || non_field_errors;
            commit(AUTH_FAILED);
            commit('notificationsModule/NOTIFICATION_FAILED', errorMsg[0], { root: true });
            throw new Error(errorMsg);
        })
        .finally(() => {
            commit(LOADING_END);
        });
}

export const registerUser = async ({ commit }, { email, password1, password2 }) => {
    const postParams = {
        email,
        password1,
        password2,
        username: email,
    }

    commit(LOADING_START);
    await axios.post(REGISTRATION_URL, postParams)
        .then(({ data: { key } }) => {
            router.push('/success');
        })
        .catch(({ response: { data: { password1, password2, non_field_errors } } }) => {
            const errorMsg = password1 || password2 || non_field_errors;
            commit('notificationsModule/NOTIFICATION_FAILED', errorMsg[0], { root: true });
            throw new Error(errorMsg);
        })
        .finally(() => {
            commit(LOADING_END);
        })
}

export const logoutUser = ({ commit }) => {
    commit(USER_LOGOUT);
    localStorage.removeItem('token');
    router.push('/auth');
};

export default {
    registerUser,
    logoutUser,
    authUser,
}