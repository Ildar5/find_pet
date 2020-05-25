import axios from 'axios';
import { router } from "@/main.js"
import {
    REGISTER_TOKEN_SUCCESS,
    REGISTER_TOKEN_START,
    REGISTER_TOKEN_FAILED,
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAILED,
} from './mutationTypes.js'

const REGISTRATION_URL = 'http://127.0.0.1:8000/rest-auth/registration/';
const AUTH_URL = 'http://127.0.0.1:8000/rest-auth/login/';

export const authUser = async ({ commit }, { email, password }) => {
    const postParams = {
        username: email,
        password
    }
    console.log(email, password)
    commit(AUTH_START);
    await axios.post(AUTH_URL, postParams)
        .then(({ data: { key } }) => {
            localStorage.setItem('user-token', key);
            commit(AUTH_SUCCESS);
            router.push('/');
            commit('notificationsModule/NOTIFICATION_SUCCESS', 'Вы упешно авторизовались!', { root: true })
        })
        .catch(({ response: { data: { password, non_field_errors } } }) => {
            const errorMsg = password || non_field_errors;
            commit(AUTH_FAILED);
            commit('notificationsModule/NOTIFICATION_FAILED', errorMsg[0], { root: true });
            throw new Error(errorMsg);
        });
}

export const registerUser = async ({ commit }, { email, password1, password2 }) => {
    const postParams = {
        username: email,
        password1,
        password2
    }

    commit(REGISTER_TOKEN_START);
    await axios.post(REGISTRATION_URL, postParams)
        .then(({ data: { key } }) => {
            router.push('/success');
            commit(REGISTER_TOKEN_SUCCESS);
        })
        .catch(({ response: { data: { password1, password2, non_field_errors } } }) => {
            const errorMsg = password1 || password2 || non_field_errors;
            commit(REGISTER_TOKEN_FAILED);
            commit('notificationsModule/NOTIFICATION_FAILED', errorMsg[0], { root: true });
            throw new Error(errorMsg);
        })
}

export default {
    registerUser,
    authUser,
}