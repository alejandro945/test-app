import data from "../../../data";

export default function handler(req, res) {
    var studentUID = req.query.code;
    console.log(data.teachers[0].tests);
    res.json(studentUID)
}

