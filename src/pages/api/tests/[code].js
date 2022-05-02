import { conn } from "../../../utils/database";

export default async function handler(req, res) {
    let uid = req.query.code;
    let test = await conn.query('SELECT * FROM test WHERE uid = $1', [uid]);
    let questions = await conn.query('SELECT * FROM question WHERE uidT = $1', [uid]);
    getQuestions(questions.rows, (questions) => {
        const newTest = { ...test.rows[0], questions }
        if (test.rows.length > 0) {

            res.status(200).json(newTest);
        }
    });
}

function getQuestions(questions, onResult) {
    let arrayQ = [];
    questions.map((q, i) => {
        getAnswers(q, (result) => {
            arrayQ.push(result);
            if (i == questions.length - 1) {
                onResult(arrayQ);
            }
        });
    });

}

function getAnswers(q, onResult) {
    conn.query('SELECT * FROM answer WHERE uidQ = $1', [q.uid], (err, result) => {
        q.answers = result.rows;
        onResult(q);
    })
}