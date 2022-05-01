import data from "../../../data"
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
    const { test, user } = req.body
    console.log(req.body)
    conn.query('INSERT INTO test VALUES ($1, $2, $3, $4, $5, $6, $7)', [uuidv4(), test.accesscode, true, test.img,
    test.title, test.description, user.id]);
    res.status(200).json({ "msg": "Succesfully test creation" })
}

function removeTest(req, res) {
    const uid = req.body;
    conn.query('DELETE FROM test WHERE uid = $1', [uid]);
    res.status(200).json({ "msg": "Succesfully test deletion" })
}

async function validateCode(req, res) {
    const { code, test } = req.body;
    console.log(req.body)
    let centinel = await conn.query('SELECT * FROM test WHERE uid = $1 AND accesscode = $2', [test.uid, parseInt(code)]);
    if (centinel.rows[0]) {
        res.status(200).json({ "msg": "Correct Code" });
    } else {
        res.status(300).json({ "msg": "Incorrect Code" });
    }
}