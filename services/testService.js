import { fetchWrapper } from "../utils/fetchWrapper"

export const testService = {
    get,
    addTest,
    addAnswer,
    addQuestion,
    removeTest
}

 async function get() {
    return fetchWrapper.get('http://localhost:3000/api/tests/')
}

function addTest(test, onResult) {
    fetchWrapper.post('/api/tests/', test).then(({ res, msg }) => {
        if (res.status == 200) {
            onResult({ m: msg, type: 'success' });
        } else {
            onResult({ m: msg, type: 'error' });
        }
    })
}

function addAnswer(answer, onResult) {
    fetchWrapper.post('/api/tests/answer', answer).then(({ res, msg }) => {
        if (res.status == 200) {
            onResult({ m: msg, type: 'info' });
        } else {
            onResult({ m: msg, type: 'error' });
        }
    })
}

function addQuestion(answer, onResult) {
    fetchWrapper.post('/api/tests/answer', answer).then(({ res, msg }) => {
        if (res.status == 200) {
            onResult({ m: msg, type: 'info' });
        } else {
            onResult({ m: msg, type: 'error' });
        }
    })
}

function removeTest(params) {

}