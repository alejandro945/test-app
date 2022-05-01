import { apiHandler } from "../../utils/api-handler";
import { conn } from "../../../utils/database";
const { v4: uuidv4 } = require('uuid');

export default apiHandler({
    get: getQuestions,
    post: addQuestion,
})

async function getQuestions(_, res) {
    let questions = await conn.query('SELECT * FROM question');
    res.status(200).json(questions.rows)
}

async function addQuestion(req, res) {
    const question = { 'uid': uuidv4(), ...req.body }
    let setter = await setAnswersToQuestion(question)
    if (setter.rows[0]) {
        let results = await conn.query('INSERT INTO question VALUES ($1, $2, $3, $4)', [question.uid, question.description, question.percentage, null]);
        if(results.rows[0]){
            res.status(200).json({ "msg": "Succesfully question creation" })
        }
    }
}

async function setAnswersToQuestion(question) {
    question.answers.map(a => {
        await conn.query('UPDATE answer SET uidQ = $1 WHERE uid = $2', [question.uid, a.uid])
    })
}