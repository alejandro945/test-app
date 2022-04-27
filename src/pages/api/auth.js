import data from "../../data"

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { userName, password, role } = req.body
        let current = searchUser(userName, password, role)
        if (current) {
            res.status(200).json({ "msg": {...current,role} })
        } else {
            res.status(300).json({ "msg": "Incorrect username or password" })
        }
    }
}

function getList(role) {
    return (role === data.roles[0]) ? data.students : data.teachers
}

const searchUser = (username, password, role) => {
    var props = null
    getList(role).forEach(o => {
        if (o.userName.toUpperCase() === username & o.password === password) {
            props = o
        }
    });
    return props
}


