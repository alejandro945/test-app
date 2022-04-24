
export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};

function get(url) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(url, requestOptions)
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(res => { return res.json().then(({ msg }) => { return { res, msg } }) });
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(res => { return res.json().then(({ msg }) => { return { res, msg } }) });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url,params) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    return fetch(url, requestOptions).then(res => { return res.json().then(({ msg }) => { return { res, msg } }) });
}
