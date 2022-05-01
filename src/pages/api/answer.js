import { apiHandler } from '../../utils/api-handler';
import { conn } from "../../../utils/database";
const { v4: uuidv4 } = require('uuid');

export default apiHandler({
    get: getAnswers,
    post: addAnswer,
})

async function getAnswers(_, res) {
    let answers = await conn.query('SELECT * FROM answer');
    res.status(200).json(answers.rows)
}

async function addAnswer(req, res) {
    const answer = { 'uid': uuidv4(), ...req.body }
    let results = await conn.query('INSERT INTO answer VALUES ($1, $2, $3, $4)', [answer.uid, answer.iscorrect, answer.description, null]);
    if (results.rows[0]) {
        res.status(200).json({ "msg": "Succesfully answer creation" })
    }
}