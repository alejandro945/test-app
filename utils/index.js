export const getAvatar = (name) => {
    return (name) ? `${name[0]}${(name[1]) ? name[1] : ''}` : "";
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}