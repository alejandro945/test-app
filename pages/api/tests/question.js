import data from "../../../data"
import { apiHandler } from "../../../utils/api-handler";
const { v4: uuidv4 } = require('uuid');

export default apiHandler({
    get: getQuestions,
    post: addQuestion,
})

function getQuestions(_, res) {
    res.status(200).json(data.questions)
}

function addQuestion(req, res) {
    const req_data = req.body;
    const question = { 'UID': uuidv4(), ...req_data }
    data.questions.push(question)
    res.status(200).json({ "msg": "Succesfully question creation" })
}