import data from "../../../data"

export default function handler(req, res) {
    if (req.method === 'POST') {
        if (signIn(req.body.username, req.body.password)) {
            res.status(200).json({ "msg": "Succesfully logged" })
        } else {
            res.status(500).json({ "msg": "Fail logged" })
        }
    }
}

const signIn = (username, password) => {
    var props = false
    data.students.forEach(s => {
        if (s.username === username & s.password === password) {
            props = true
        }
    });
    return props
}