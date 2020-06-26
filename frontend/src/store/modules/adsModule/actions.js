
const CREATE_AD_URL = 'http://127.0.0.1:8000/create/';

// export const createAd = async (title, desc) => {
//     console.log('createAd');
//     const postParams = {
//         title,
//         desc,
//         status: 1,
//         owner: 
//     };
//     await axios.post(CREATE_AD_URL, postParams)
//         .then(({ data: { key } }) => {
//             localStorage.setItem('token', key);
//             commit(AUTH_SUCCESS, key);
//             router.push('/');
//             commit('notificationsModule/NOTIFICATION_SUCCESS', 'Вы упешно авторизовались!', { root: true })
//         })
//         .catch(({ response: { data: { password, non_field_errors } } }) => {
//             const errorMsg = password || non_field_errors;
//             commit(AUTH_FAILED);
//             commit('notificationsModule/NOTIFICATION_FAILED', errorMsg[0], { root: true });
//             throw new Error(errorMsg);
//         })
//         .finally(() => {
//             commit(LOADING_END);
//         });
// }
