import Router from 'next/router'

export async function sendAlert(response,user) {
    let {msg} = await response.json();
    if (response.status == 200) {
        localStorage.setItem('user', JSON.stringify(user))
        redirect('dashboard')
        return { m: msg, type: 'success' }
    } else {
        return { m: msg, type: 'error' }
    }
}

export function logout() {
    localStorage.removeItem('user');
    redirect('/')
}

export const getAvatar = (name) => {
    return (name) ? `${name[0]}${(name[1]) ? name[1] : ''}` : "";
}

export function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in 
    const publicPaths = ['/'];
    const path = url.split('?')[0];
    if (!localStorage.getItem('user') && !publicPaths.includes(path)) {
        return false
    } else {
        return true
    }
}

export function redirect(url){
    Router.push(url);
    Router.reload();
}