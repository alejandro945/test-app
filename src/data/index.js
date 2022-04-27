let data = {
    teachers: [
        {
            id: 1,
            userName: "TRIANA",
            password: "12345",
            tests: []
        },
        {
            id: 2,
            userName: "REYES",
            password: "rpc",
            tests: []
        },
        {
            id: 3,
            userName: "JUANA",
            password: "345",
            tests: []
        }
    ],
    students: [
        {
            id: 4,
            userName: "ALEJO",
            password: "23",
        },
        {
            id: 5,
            userName: "GABRIEL",
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
            isCorrect: false,
            description: "La resistencia de thevenin "
        },
        {
            UID: "fd45-11ec",
            isCorrect: true,
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
            percentage: 50,
            answers: [
                {
                    UID: 'c0f1-43bg',
                    isCorrect: false,
                    description: 'Oxigeno como compuesto de moleculas'
                },
                {
                    UID: 'fd45-11ec',
                    isCorrect: true,
                    description: 'Euler a la rx es la una solución de la EDC '
                },
                {
                    UID: 'c0f1-11ec',
                    isCorrect: false,
                    description: 'La corriente se puede ver como dq/dt '
                },
                {
                    UID: 'c0f1-11ec-99od',
                    isCorrect: false,
                    description: 'La resistencia de thevenin '
                }
            ]
        },
        {
            UID: '8b313147-4aa3-4c2b-afa4-d98a202dfasf45',
            description: '¿Que es la energia electromagnética?',
            percentage: 50,
            answers: [
                {
                    UID: 'c0f1-43bg-4523',
                    isCorrect: true,
                    description: 'Ondas de campos electricos y magneticos que se propagan a traves del espacio'
                },
                {
                    UID: 'fd45-11ec-45se',
                    isCorrect: false,
                    description: 'Combinación de energia cinetica y potencial'
                },
                {
                    UID: 'c0f1-11ec-ads4',
                    isCorrect: false,
                    description: 'Es equivalente a la energia mecanica'
                },
                {
                    UID: 'c0f1-11ec-99od-4sdas',
                    isCorrect: false,
                    description: 'Energia en el espacio'
                }
            ]
        }
    ],
    tests: [
        {
            UID: "d7ceb7d8-c0f1-11ec-9d64-0242ac120002",
            accesscode: 2567,
            avaible: true,
            img: "/img/test-1.jpeg",
            title: "Electromagnetismo",
            description: "Descarga de un condensador",
            questions: [
                {
                    UID: '8b313147-4aa3-4c2b-afa4-d98a202aead9',
                    description: '¿Que es la capacitancia?',
                    percentage: 50,
                    answers: [
                        {
                            UID: 'c0f1-43bg',
                            isCorrect: false,
                            description: 'Oxigeno como compuesto de moleculas'
                        },
                        {
                            UID: 'fd45-11ec',
                            isCorrect: true,
                            description: 'Capacidad de un componente o circuito para recoger y almacenar energía en forma de carga eléctrica'
                        },
                        {
                            UID: 'c0f1-11ec',
                            isCorrect: false,
                            description: 'La corriente se puede ver como dq/dt '
                        },
                        {
                            UID: 'c0f1-11ec-99od',
                            isCorrect: false,
                            description: 'La resistencia de thevenin '
                        }
                    ]
                },
                {
                    UID: '8b313147-4aa3-4c2b-afa4-d98a202dfasf45',
                    description: '¿Que es la energia electromagnética?',
                    percentage: 50,
                    answers: [
                        {
                            UID: 'c0f1-43bg-4523',
                            isCorrect: true,
                            description: 'Ondas de campos electricos y magneticos que se propagan a traves del espacio'
                        },
                        {
                            UID: 'fd45-11ec-45se',
                            isCorrect: false,
                            description: 'Combinación de energia cinetica y potencial'
                        },
                        {
                            UID: 'c0f1-11ec-ads4',
                            isCorrect: false,
                            description: 'Es equivalente a la energia mecanica'
                        },
                        {
                            UID: 'c0f1-11ec-99od-4sdas',
                            isCorrect: false,
                            description: 'Energia en el espacio'
                        }
                    ]
                }
            ]
        },
        {
            UID: "d7ceb7d8-c0f1",
            accesscode: 3554,
            avaible: true,
            img: "/img/test-6.jpeg",
            title: "Organica III",
            description: "Ondas y señales",
            questions: []
        },
        {
            UID: "d7ceb7d8-c0f1-11ec",
            accesscode: 34,
            avaible: true,
            img: "/img/test-3.jpeg",
            title: "Contabilidad",
            description: "Retención en la fuente",
            questions: []
        },
        {
            UID: "c0f1-11ec",
            accesscode: 34,
            avaible: true,
            img: "/img/test-5.jpeg",
            title: "Termodinamica",
            description: "Ecuación de Bernoulli",
            questions: []
        },
        {
            UID: "d7ceb7d8-c0f1-11ec-9d64",
            accesscode: 3,
            avaible: true,
            img: "/img/test-2.jpeg",
            title: "Electrónica",
            description: "Maxima transferencia de potencia",
            questions: []
        },
        {
            UID: "d7ceb7d8-c0f1-9d643",
            accesscode: 387,
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




