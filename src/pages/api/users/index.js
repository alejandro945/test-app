import data from "../../../data"
import { apiHandler } from "../../../utils/api-handler"

export default apiHandler({
    get: getUsers,
})

function getUsers(_, res) {
    let users = []
    data.teachers.map(t=>users.push(t))
    data.students.map(s=>users.push(s))
    res.status(200).json(users)
}