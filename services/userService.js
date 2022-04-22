import { fetchWrapper } from "../utils/fetchWrapper";

export const userService = {
    isAuth: false,
    logIn,
    logOut,
    get
}

function get() {
    return JSON.parse(localStorage.getItem('user'));
}

async function logIn(user, onResult) {
    fetchWrapper.post('/api/auth', user).then(response => {
        response.json().then(({ msg }) => {
            if (response.status == 200) {
                localStorage.setItem('user', JSON.stringify(user));
                userService.isAuth = true;
                onResult({m: msg, type: 'success' });
            } else {
                onResult({m: msg, type: 'error' });
            }
        });
    });
}

function logOut() {
    userService.isAuth = false
    localStorage.removeItem('user');
}