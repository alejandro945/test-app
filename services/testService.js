import { fetchWrapper } from "../utils/fetchWrapper"

export const testService = {
    getTests,
    addTest,
    getAnswers,
    addAnswer,
    getQuestions,
    addQuestion,
    removeTest
}

async function getTests() {
    return fetchWrapper.get('http://localhost:3000/api/tests/')
}
async function getAnswers() {
    return fetchWrapper.get('http://localhost:3000/api/tests/answer')
}
async function getQuestions() {
    return fetchWrapper.get('http://localhost:3000/api/tests/question')
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

function addQuestion(question, onResult) {
    fetchWrapper.post('/api/tests/question', question).then(({ res, msg }) => {
        if (res.status == 200) {
            onResult({ m: msg, type: 'info' });
        } else {
            onResult({ m: msg, type: 'error' });
        }
    })
}

function removeTest(UID) {

}