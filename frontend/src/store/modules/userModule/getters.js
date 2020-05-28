export const isLoading = (state) => state.isLoading;

export const isUserLoggedIn = (state) => Boolean(state.token);

export default {
    isLoading,
    isUserLoggedIn,
}