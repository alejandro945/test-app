import { conn } from "../../../utils/database";

export default async function handler(req, res) {
    let uid = req.query.code;
    let test = await conn.query('SELECT FROM test WHERE uid = $1', [uid]);
    if(test.rows.length > 0 ){
        res.status(200).json(test.rows[0])
    }
}

