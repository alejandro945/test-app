import { apiHandler } from "../../../utils/api-handler";
import { conn } from "../../../utils/database";
const { v4: uuidv4 } = require('uuid');

export default apiHandler({
    get: getTests,
    post: addTest,
    delete: removeTest,
    put: validateCode,
})

async function getTests(_, res) {
    let tests = await conn.query('SELECT * FROM test WHERE avaible = true');
    res.status(200).json(tests.rows)
}

async function addTest(req, res) {
    const { test, user } = req.body;
    const newTest = { ...test, uid: uuidv4() }
    conn.query('INSERT INTO test VALUES ($1, $2, $3, $4, $5, $6, $7)', [newTest.uid, test.accesscode, true, test.img,
    test.title, test.description, user.id]);
    await setQuestionsToTest(newTest);
    res.status(200).json({ "msg": "Succesfully test creation" })
}

async function removeTest(req, res) {
    const uid = req.body;
    let results = await conn.query('DELETE FROM test WHERE uid = $1', [uid]);
    if (results.rows[0]) {
        res.status(200).json({ "msg": "Succesfully test deletion" })
    }
}

async function validateCode(req, res) {
    const { code, test } = req.body;
    let results = await conn.query('SELECT * FROM test WHERE uid = $1 AND accesscode = $2', [test.uid, parseInt(code)]);
    if (results.rows[0]) {
        res.status(200).json({ "msg": "Correct Code" });
    } else {
        res.status(300).json({ "msg": "Incorrect Code" });
    }
}

async function setQuestionsToTest(test) {
    test.questions.map(q => {
        conn.query('UPDATE question SET uidT = $1 WHERE uid = $2', [test.uid, q.uid])
    })
}