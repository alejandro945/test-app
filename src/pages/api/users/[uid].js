import data from "../../../data";

export default function handler(req, res) {
    let id = req.query.uid;
    let user = (data.teachers.find(t => t.id == id)) ? data.teachers.find(t => t.id == id) : data.students.find(s => s.id == id)
    res.status(200).json(user)
}