import data from "../../../data"
import { apiHandler } from "../../../utils/api-handler";
const { v4: uuidv4 } = require('uuid');

export default apiHandler({
    get: getAnswers,
    post: addAnswer,
})

function getAnswers(_, res) {
    res.status(200).json(data.answers)
}

function addAnswer(req, res) {
    const req_data = req.body;
    const answer = { 'UID': uuidv4(), ...req_data }
    data.answers.push(answer)
    res.status(200).json({ "msg": "Succesfully answer creation" })
}