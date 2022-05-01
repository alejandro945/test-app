import { conn } from "../../../utils/database";

export default async function handler(req, res) {
    let id = req.query.uid;
    let idS = await conn.query('SELECT * FROM student WHERE id = $1', [id]);
    if (idS.rows[0] === undefined) {
        let idT = await conn.query('SELECT * FROM teacher WHERE id = $1', [id]);
        res.status(200).json(idT.rows[0])
    } else {
        res.status(200).json(idS.rows[0]);
    }
}