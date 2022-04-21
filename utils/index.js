export async function sendAlert(response) {
    let {msg} = await response.json();
    if (response.status == 200) {
        return { m: msg, type: 'success' }
    } else {
        return { m: msg, type: 'error' }
    }
}

export const getAvatar = (name) => {
    return (name) ? `${name[0]}${(name[1]) ? name[1] : ''}` : "";
}