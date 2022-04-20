import data from "../../data";

export default function handler(req, res) {
    if (req.method === 'POST') {
        const user = req.body
        if (logIn(user.username, user.password, user.role)) {
            res.status(200).json({ "msg": "Succesfull logged" })
        } else {
            res.status(500).json({ "msg": "Fail logged" })
        }
    }
}

const logIn = (username, password, role) => {
    var props = false
    let list = (role === "student") ? data.students : data.teachers
    list.forEach(o => {
        if (o.username === username & o.password === password) {
            props = true
        }
    });
    return props
}