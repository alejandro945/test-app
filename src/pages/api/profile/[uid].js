import data from "../../../data";

export default function handler(req, res) {
    console.log('sapa');
    let {uid,role} = req.query.uid;
    let repository = (role == 'Student') ? data.students : data.teachers
    const user = repository.find(u => u.UID === uid)
    res.status(200).json(user)
}