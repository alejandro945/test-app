export const getAvatar = (name) => {
    return (name) ? `${name[0]}${(name[1]) ? name[1] : ''}` : "";
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function getNote(answers){
    var note = 0;
    console.log(answers);
    answers.map(a => {
        if(a.value == 'true'){
            note += (a.percentage * 5)/100
        }
    })
    return note
}