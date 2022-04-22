import data from "../../../data"
import { apiHandler } from "../../../utils/api-handler";

export default apiHandler({
    get: getTests,
    post: addTest,
    delete: removeTest
})

function getTests(_, res) {
    let tests = []
    data.teachers.map(t => {
        t.tests.map(ts => {
            tests.push(ts)
        })
    })
    res.status(200).json(tests)
}

function addTest(params) {
    
}

function removeTest(params) {
}