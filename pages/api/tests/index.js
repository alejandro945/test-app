import data from "../../../data"
import { apiHandler } from "../../../utils/api-handler";

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
    console.log(req.body);
    res.status(200).json({ "msg": "Succesfully test creation" })
}

function removeTest(params) {
}