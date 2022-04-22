export const getAvatar = (name) => {
    return (name) ? `${name[0]}${(name[1]) ? name[1] : ''}` : "";
}