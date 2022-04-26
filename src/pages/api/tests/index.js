import data from "../../../data"
import { apiHandler } from "../../../utils/api-handler";
const { v4: uuidv4 } = require('uuid');

export default apiHandler({
    get: getTests,
    post: addTest,
    delete: removeTest,
    put: validateCode
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
    data.tests.push(test)
    res.status(200).json({ "msg": "Succesfully test creation" })
}

function removeTest(req, res) {
    const uid = req.body
    var newArray = data.tests.filter(t => t.UID !== uid)
    data.tests = newArray
    res.status(200).json({ "msg": "Succesfully test deletion" })
}

function validateCode(req, res) {
    const { code, test } = req.body;
    let centinel = data.tests.find(t => t.UID == test.UID);
    if (centinel.accesscode == code) {
        res.status(200).json({ "msg": "Correct Code" });
    } else {
        res.status(300).json({ "msg": "Incorrect Code" });
    }
}