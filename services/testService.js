import { fetchWrapper } from "../utils/fetchWrapper"

export const testService = {
    getTest,
    getTests,
    addTest,
    getAnswers,
    addAnswer,
    getQuestions,
    addQuestion,
    removeTest,
    accessCode
}
async function getTest(uid) {
    return fetchWrapper.get('http://localhost:3000/api/tests/' + uid)
}
async function getTests() {
    return fetchWrapper.get('http://localhost:3000/api/tests/')
}
async function getAnswers() {
    return fetchWrapper.get('http://localhost:3000/api/answer')
}
async function getQuestions() {
    return fetchWrapper.get('http://localhost:3000/api/question')
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
    fetchWrapper.post('/api/answer', answer).then(({ res, msg }) => {
        if (res.status == 200) {
            onResult({ m: msg, type: 'info' });
        } else {
            onResult({ m: msg, type: 'error' });
        }
    })
}

function addQuestion(question, onResult) {
    fetchWrapper.post('/api/question', question).then(({ res, msg }) => {
        if (res.status == 200) {
            onResult({ m: msg, type: 'info' });
        } else {
            onResult({ m: msg, type: 'error' });
        }
    })
}

function removeTest(UID, onResult) {
    fetchWrapper.delete('/api/tests/', UID).then(({ res, msg }) => {
        if (res.status == 200) {
            onResult({ m: msg, type: 'success' });
        } else {
            onResult({ m: msg, type: 'error' });
        }
    })
}

function accessCode(prop, onResult) {
    fetchWrapper.put('/api/tests/', prop).then(({ res, msg }) => {
        if (res.status == 200) {
            onResult({ m: msg, type: 'success' });
        } else {
            onResult({ m: msg, type: 'error' })
        }
    })
}