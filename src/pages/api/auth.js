import { conn } from "../../utils/database"

export default async function handler(req, res) {

    if (req.method === 'POST') {

        const { username, password, role } = req.body
        if (role == "Student") {
            conn.query('SELECT * FROM student WHERE username = $1 AND password = $2', [username, password], (err, result) => {
                handleResponse(err, result, res, role);
            });
        } else {
            conn.query('SELECT * FROM teacher WHERE username = $1 AND password = $2', [username, password], (err, result) => {
                handleResponse(err, result, res, role)
            });
        }
    }

    function handleResponse(err, result, res, role) {
        if (err) {
            res.tatus(300).json({ "msg": "Server Error" })
        } else if (result.rows.length > 0) {
            res.status(200).json({ "msg": { ...result.rows[0], role } })
        } else {
            res.status(300).json({ "msg": "Password Incorrect" })
        }
    }
}