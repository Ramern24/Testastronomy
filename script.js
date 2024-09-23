const questions = [
    { question: "¿Qué galaxia es la más cercana a la Vía Láctea?", value: 2, answers: [{ text: "Galaxia de Andrómeda", correct: true }, { text: "Galaxia del Sombrero", correct: false }, { text: "Galaxia de Triángulo", correct: false }, { text: "Galaxia del Cartwheel", correct: false }] },
    { question: "¿Cuál es el nombre del primer objeto artificial en órbita alrededor de la Tierra?", value: 2, answers: [{ text: "Apollo 11", correct: false }, { text: "Voyager 1", correct: false }, { text: "Sputnik 1", correct: true }, { text: "Hubble", correct: false }] },
    { question: "¿Cuál es el planeta más grande del sistema solar?", value: 2, answers: [{ text: "Tierra", correct: false }, { text: "Júpiter", correct: true }, { text: "Saturno", correct: false }, { text: "Urano", correct: false }] },
    { question: "¿Qué planeta es conocido como el planeta rojo?", value: 2, answers: [{ text: "Marte", correct: true }, { text: "Venus", correct: false }, { text: "Mercurio", correct: false }, { text: "Neptuno", correct: false }] },
    { question: "¿Qué fenómeno astronómico ocurre cuando la Luna pasa entre la Tierra y el Sol?", value: 2, answers: [{ text: "Eclipse solar", correct: true }, { text: "Eclipse lunar", correct: false }, { text: "Conjunción", correct: false }, { text: "Superluna", correct: false }] },
    { question: "¿Cuál es la estrella más cercana a la Tierra?", value: 2, answers: [{ text: "Sirius", correct: false }, { text: "Proxima Centauri", correct: true }, { text: "Alpha Centauri", correct: false }, { text: "Betelgeuse", correct: false }] },
    { question: "¿Qué es una nebulosa?", value: 2, answers: [{ text: "Un tipo de estrella", correct: false }, { text: "Una nube de gas y polvo en el espacio", correct: true }, { text: "Un planeta en formación", correct: false }, { text: "Una galaxia", correct: false }] },
    { question: "¿Qué científico propuso la teoría heliocéntrica?", value: 2, answers: [{ text: "Galileo Galilei", correct: false }, { text: "Nicolaus Copernicus", correct: true }, { text: "Isaac Newton", correct: false }, { text: "Albert Einstein", correct: false }] },
    { question: "¿Qué es un agujero negro?", value: 2, answers: [{ text: "Una estrella en explosión", correct: false }, { text: "Un área del espacio donde la gravedad es tan fuerte que nada puede escapar", correct: true }, { text: "Una nebulosa", correct: false }, { text: "Un planeta extraño", correct: false }] },
    { question: "¿Cuál es el planeta más pequeño del sistema solar?", value: 2, answers: [{ text: "Mercurio", correct: true }, { text: "Marte", correct: false }, { text: "Plutón", correct: false }, { text: "Venus", correct: false }] },
    { question: "¿Quién fue el primer ser humano en viajar al espacio?", value: 2, answers: [{ text: "Neil Armstrong", correct: false }, { text: "Yuri Gagarin", correct: true }, { text: "John Glenn", correct: false }, { text: "Buzz Aldrin", correct: false }] },
    { question: "¿Qué planeta tiene anillos?", value: 2, answers: [{ text: "Tierra", correct: false }, { text: "Júpiter", correct: false }, { text: "Saturno", correct: true }, { text: "Neptuno", correct: false }] },
    { question: "¿Qué instrumento se utiliza para observar objetos astronómicos?", value: 2, answers: [{ text: "Telescopio", correct: true }, { text: "Microscopio", correct: false }, { text: "Termómetro", correct: false }, { text: "Barómetro", correct: false }] },
    { question: "¿Cuál es el nombre del satélite natural de la Tierra?", value: 2, answers: [{ text: "Luna", correct: true }, { text: "Marte", correct: false }, { text: "Fobos", correct: false }, { text: "Deimos", correct: false }] },
    { question: "¿Qué es la Vía Láctea?", value: 2, answers: [{ text: "Un planeta", correct: false }, { text: "Una galaxia", correct: true }, { text: "Un agujero negro", correct: false }, { text: "Una estrella", correct: false }] },
    { question: "¿Qué ocurre en un eclipse lunar?", value: 2, answers: [{ text: "La Tierra bloquea la luz del Sol a la Luna", correct: true }, { text: "La Luna bloquea la luz del Sol a la Tierra", correct: false }, { text: "Las estrellas desaparecen", correct: false }, { text: "Los planetas se alinean", correct: false }] },
    { question: "¿Qué es una estrella fugaz?", value: 2, answers: [{ text: "Un cometa", correct: false }, { text: "Un meteoro que entra en la atmósfera terrestre", correct: true }, { text: "Una supernova", correct: false }, { text: "Un agujero negro", correct: false }] },
    { question: "¿Quién formuló la ley de la gravitación universal?", value: 2, answers: [{ text: "Galileo Galilei", correct: false }, { text: "Isaac Newton", correct: true }, { text: "Albert Einstein", correct: false }, { text: "Stephen Hawking", correct: false }] },
    { question: "¿Qué es la astrobiología?", value: 2, answers: [{ text: "El estudio de las estrellas", correct: false }, { text: "El estudio de la vida en el universo", correct: true }, { text: "El estudio de los planetas", correct: false }, { text: "El estudio de los agujeros negros", correct: false }] },
    { question: "¿Qué es el Big Bang?", value: 2, answers: [{ text: "Una explosión de una estrella", correct: false }, { text: "La teoría del origen del universo", correct: true }, { text: "Una galaxia lejana", correct: false }, { text: "Un tipo de agujero negro", correct: false }] },
    { question: "¿Cuál es el planeta más frío del sistema solar?", value: 2, answers: [{ text: "Neptuno", correct: true }, { text: "Marte", correct: false }, { text: "Júpiter", correct: false }, { text: "Plutón", correct: false }] },
];

const motivationalMessages = [
    "La astronomía compone un bello poema que los seres humanos intentan descifrar. - Carl Sagan",
    "El universo no solo es más extraño de lo que imaginamos, es más extraño de lo que podemos imaginar. - J.B.S. Haldane",
    "No somos solo una colección de átomos. Somos una colección de átomos que observa el universo. - Lawrence M. Krauss",
    "La ciencia no es solo un conjunto de conocimientos, es un enfoque para resolver problemas. - Carl Sagan",
    "El cosmos es todo lo que es, o fue, o será. - Carl Sagan",
    "En el vasto universo, nuestro planeta es solo un grano de arena en una playa infinita. - Neil deGrasse Tyson",
    "La ciencia avanza no por la creencia, sino por la duda y la crítica. - Karl Popper",
    "La astronomía es la historia de la luz. - David Malin",
    "El universo es un lugar mucho más vasto y misterioso de lo que podemos imaginar. - Stephen Hawking",
    "Cada estrella que ves tiene un sueño, un viaje en su propia vida. - Pablo Neruda",
    "La exploración espacial es la búsqueda de nuestra humanidad. - Buzz Aldrin",
    "La curiosidad es la esencia del descubrimiento. - Albert Einstein",
    "No hay mayor satisfacción que entender lo que vemos. - Galileo Galilei",
    "Las estrellas son agujeros en el cielo por donde entra la luz del infinito. - Confucio",
    "El cosmos está en nosotros. Somos hechos de estrella. - Neil deGrasse Tyson",
    "La mente que se abre a una nueva idea jamás regresa a su tamaño original. - Albert Einstein",
    "El universo no tiene límites. Solo hay límites en nuestra mente. - Edgar Mitchell",
    "Las maravillas del universo están en todas partes. Solo hay que mirar. - William Herschel",
    "La ciencia es un hermoso regalo para la humanidad. - Albert Einstein",
    "El universo es un espejo de nuestro propio ser. - Deepak Chopra",
    "La curiosidad es la fuerza que nos lleva hacia adelante en el conocimiento. - Max Tegmark"
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 11;
let timer;
const answersRecord = []; // Arreglo para almacenar las respuestas

const startButton = document.getElementById('start-button');
const nameInput = document.getElementById('name');
const questionContainer = document.getElementById('question-container');
const phraseElement = document.getElementById('phrase');
const timeElement = document.getElementById('time');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');

startButton.addEventListener('click', () => {
    const userName = nameInput.value.trim();
    if (userName) {
        questionContainer.classList.remove('hidden');
        nameInput.parentElement.classList.add('hidden');
        score = 0;
        currentQuestionIndex = 0;
        answersRecord.length = 0; // Reinicia el registro de respuestas
        phraseElement.textContent = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        timeLeft = 11; // Reinicia el tiempo
        startTimer();
        showQuestion();
    }
});

function startTimer() {
    clearInterval(timer); // Limpia cualquier temporizador anterior
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
        if (timeLeft <= 0) {
            timeElement.textContent = "¡Se acabó el tiempo!";
            clearInterval(timer);
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    showFinalScore();
                }
            }, 1000);
        }
    }, 1000);
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer');
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
    timeLeft = 11; // Reinicia el tiempo aquí
    timeElement.textContent = `Tiempo restante: ${timeLeft} segundos`; // Actualiza el texto del tiempo
    startTimer(); // Reinicia el temporizador
    updateScoreDisplay(); // Mostrar puntaje actual
}

function resetState() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    const correct = answer.correct;
    answersRecord.push({ question: currentQuestion.question, correct }); // Guarda la respuesta
    if (correct) {
        score += currentQuestion.value; // Suma el valor de la pregunta
    }
    Array.from(answersElement.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === answer.text) {
            button.classList.add(correct ? 'correct' : 'wrong');
        }
    });

    updateScoreDisplay(); // Actualizar puntaje después de seleccionar una respuesta

    if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 1000);
    } else {
        showFinalScore();
    }
}

function updateScoreDisplay() {
    scoreElement.textContent = `Puntuación total: ${score}`;
}

function showFinalScore() {
    clearInterval(timer); // Asegúrate de que el temporizador esté detenido
    finalScoreElement.classList.remove('hidden');

    // Mensaje motivacional
    const finalMotivationalMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

    // Mostrar puntaje y desglose
    finalScoreElement.innerHTML = `Gracias por jugar!<br>Tu puntuación final es: ${score}/${questions.reduce((total, q) => total + q.value, 0)}<br>${finalMotivationalMessage}<br><br>Desglose de respuestas:<br>`;
    
    answersRecord.forEach((record, index) => {
        const status = record.correct ? 'Correcta' : 'Incorrecta';
        finalScoreElement.innerHTML += `Pregunta ${index + 1}: ${record.question} - Respuesta: ${status}<br>`;
    });

    questionContainer.classList.add('hidden');
}

