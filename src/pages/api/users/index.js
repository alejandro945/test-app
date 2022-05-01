import { apiHandler } from "../../../utils/api-handler"
import { conn } from "../../../utils/database"

export default apiHandler({
    get: getUsers,
})

async function getUsers(_, res) {
    let users = [await conn.query('SELECT * FROM student'), await conn.query('SELECT * from teacher')];
    res.status(200).json(users);
}   