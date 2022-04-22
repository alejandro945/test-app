import { fetchWrapper } from "../utils/fetchWrapper"



export const testService = {
    get,
    add,
    remove
}

 async function get() {
    return fetchWrapper.get('http://localhost:3000/api/tests/main')
}

function add(params) {
    
}

function remove(params) {

}