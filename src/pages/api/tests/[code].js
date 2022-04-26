import data from "../../../data";

export default function handler(req, res) {
    let uid = req.query.code;
    const test = data.tests.find(t => t.UID === uid)
    res.status(200).json(test)
}

