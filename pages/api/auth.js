import data from "../../data";

export default function handler(req, res) {
    if (req.method === 'POST') {
        const user = req.body
        if (logIn(user.userName, user.password, user.role)) {
            res.status(200).json({ "msg": "Succesfull logged" })
        } else {
            res.status(300).json({ "msg": "Incorrect username or password " })
        }
    }
}

const logIn = (username, password, role) => {
    var props = false
    let list = (role === data.roles[0]) ? data.students : data.teachers
    list.forEach(o => {
        if (o.userName.toUpperCase() === username & o.password === password) {
            props = true
        }
    });
    return props
}

