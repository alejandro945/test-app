import data from "../../../data"
import { apiHandler } from "../../../utils/api-handler";
const { v4: uuidv4 } = require('uuid');

export default apiHandler({
    get: getTests,
    post: addTest,
    delete: removeTest
})

function getTests(_, res) {
    let tests = []
        data.tests.map(ts => {
            if (ts.avaible) {
                tests.push(ts)
            }
        })
    res.status(200).json(tests)
}

function addTest(req, res) {
    const req_data = req.body;
    const test = { 'UID': uuidv4(), ...req_data }
    console.log(test);
    data.tests.push(test)
    res.status(200).json({ "msg": "Succesfully test creation" })
}

function removeTest(uid) {
}