import { fetchWrapper } from "../utils/fetchWrapper";

export const userService = {
    isAuth: false,
    logIn,
    logOut,
    get,
    getUser,
    getAll
}

async function getUser(uid) {
    return fetchWrapper.get('http://localhost:3000/api/users/' + uid)
}

async function getAll() {
    return fetchWrapper.get('http://localhost:3000/api/users/')
}

function get() {
    return JSON.parse(localStorage.getItem('user'));
}

async function logIn(user, onResult) {
    fetchWrapper.post('/api/auth', user).then(({ res, msg }) => {
        if (res.status == 200) {
            localStorage.setItem('user', JSON.stringify(msg));
            userService.isAuth = true;
            onResult({ m: 'Succesfully authenticated', type: 'success' });
        } else {
            onResult({ m: msg, type: 'error' });
        }
    })
}

function logOut() {
    userService.isAuth = false
    localStorage.removeItem('user');
}