import axios from 'axios';
import { router } from "@/main.js"
import { REGISTER_TOKEN_SUCCESS, REGISTER_TOKEN_START, REGISTER_TOKEN_FAILED } from './mutationTypes.js'

const REGISTRATION_URL = 'http://127.0.0.1:8000/rest-auth/registration/';
const TOKEN_URL = 'http://127.0.0.1:8000/api/token/';

export const getApiToken = async (store, { email, password }) => {

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
            document.cookie = `TOKEN=${key}`;
            router.push('/success');
            commit(REGISTER_TOKEN_SUCCESS)
        })
        .catch(err => {
            console.log(err.response);
            commit(REGISTER_TOKEN_FAILED)
            throw new Error(err);
        })
}

export default {
    registerUser,
}