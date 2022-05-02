import { apiHandler } from "../../utils/api-handler";
const { v4: uuidv4 } = require('uuid');
import { conn } from "../../utils/database";

export default apiHandler({
    get: getQuestions,
    post: addQuestion,
})

async function getQuestions(_, res) {
    let questions = await conn.query('SELECT * FROM question WHERE uidT is null');
    res.status(200).json(questions.rows)
}

async function addQuestion(req, res) {
    const question = { 'uid': uuidv4(), ...req.body }
    await conn.query('INSERT INTO question VALUES ($1, $2, $3, $4)', [question.uid, question.description, question.percentage, null]);
    await setAnswersToQuestion(question)
    res.status(200).json({ "msg": "Succesfully question creation" });
}

async function setAnswersToQuestion(question) {
    question.answers.map(a => {
        conn.query('UPDATE answer SET uidQ = $1 WHERE uid = $2', [question.uid, a.uid])
    })
}
