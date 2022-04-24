let data = {
    teachers: [
        {
            id: 1,
            userName: "Triana",
            password: "12345",
            tests: []
        },
        {
            id: 2,
            userName: "Reyes",
            password: "rpc",
            tests: []
        },
        {
            id: 3,
            userName: "Juana",
            password: "345",
            tests: []
        }
    ],
    students: [
        {
            id: 1,
            userName: "Alejo",
            password: "23",
        },
        {
            id: 2,
            userName: "Gabriel",
            password: "45",
        }

    ],
    answers: [
        {
            UID: "c0f1-11ec",
            isCorrect: false,
            description: "La corriente se puede ver como dq/dt "
        },
        {
            UID: "c0f1-11ec-99od",
            isCorrect: true,
            description: "La resistencia de thevenin "
        },
        {
            UID: "fd45-11ec",
            isCorrect: false,
            description: "Euler a la rx es la una solución de la EDC "
        },
        {
            UID: "c0f1-43bg",
            isCorrect: false,
            description: "Oxigeno como compuesto de moleculas"
        }
    ],
    questions: [
        {
            UID: '8b313147-4aa3-4c2b-afa4-d98a202aead9',
            description: '¿Que es la capacitancia?',
            percentage: '434',
            answers: [
                {
                    UID: 'c0f1-43bg',
                    isCorrect: false,
                    description: 'Oxigeno como compuesto de moleculas'
                },
                {
                    UID: 'fd45-11ec',
                    isCorrect: false,
                    description: 'Euler a la rx es la una solución de la EDC '
                },
                {
                    UID: 'c0f1-11ec',
                    isCorrect: false,
                    description: 'La corriente se puede ver como dq/dt '
                },
                {
                    UID: 'c0f1-11ec-99od',
                    isCorrect: true,
                    description: 'La resistencia de thevenin '
                }
            ]
        }
    ],
    tests: [
        {
            UID: "d7ceb7d8-c0f1-11ec-9d64-0242ac120002",
            accessCode: 2567,
            avaible: true,
            img: "/img/test-1.jpeg",
            title: "Electromagnetismo",
            description: "Descarga de un condensador",
            questions: [
                {
                    UID: '8b313147-4aa3-4c2b-afa4-d98a202aead9',
                    description: '¿Que es la capacitancia?',
                    percentage: '50',
                    answers: [
                        {
                            UID: 'c0f1-43bg',
                            isCorrect: false,
                            description: 'Oxigeno como compuesto de moleculas'
                        },
                        {
                            UID: 'fd45-11ec',
                            isCorrect: false,
                            description: 'Capacidad de un componente o circuito para recoger y almacenar energía en forma de carga eléctrica'
                        },
                        {
                            UID: 'c0f1-11ec',
                            isCorrect: false,
                            description: 'La corriente se puede ver como dq/dt '
                        },
                        {
                            UID: 'c0f1-11ec-99od',
                            isCorrect: true,
                            description: 'La resistencia de thevenin '
                        }
                    ]
                }
            ]
        },
        {
            UID: "d7ceb7d8-c0f1",
            accessCode: 3554,
            avaible: true,
            img: "/img/test-6.jpeg",
            title: "Organica III",
            description: "Ondas y señales",
            questions: []
        },
        {
            UID: "d7ceb7d8-c0f1-11ec",
            accessCode: 34,
            avaible: true,
            img: "/img/test-3.jpeg",
            title: "Contabilidad",
            description: "Retención en la fuente",
            questions: []
        },
        {
            UID: "c0f1-11ec",
            accessCode: 34,
            avaible: true,
            img: "/img/test-5.jpeg",
            title: "Termodinamica",
            description: "Ecuación de Bernoulli",
            questions: []
        },
        {
            UID: "d7ceb7d8-c0f1-11ec-9d64",
            accessCode: 3,
            avaible: true,
            img: "/img/test-2.jpeg",
            title: "Electrónica",
            description: "Maxima transferencia de potencia",
            questions: []
        },
        {
            UID: "d7ceb7d8-c0f1-9d643",
            accessCode: 387,
            avaible: true,
            img: "/img/test-4.jpeg",
            title: "Ecuaciones diferenciales",
            description: "Transformadas de Laplace",
            questions: []
        }
    ],
    roles: [
        "Student", "Teacher"
    ]
}

export default data;




