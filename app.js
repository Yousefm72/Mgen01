const questions = [
    {
        question: "أي من البروتوكولات التالية يعتبر بروتوكولاً رئيسياً في الإنترنت؟",
        options: [
            "HTTP",
            "FTP",
            "TCP/IP",
            "SMTP"
        ],
        correctAnswer: 2 // TCP/IP
    },
    {
        question: "أقوال تتطرّق إلى عنوان الـ IP التالي: 172.10.10.10/16",
        options: [
            "هو عنوان خاص من الفئة B",
            "هو عنوان عام من الفئة A",
            "هو عنوان خاص من الفئة A",
            "هو عنوان عام من الفئة B"
        ],
        correctAnswer: 0 // هو عنوان خاص من الفئة B
    },
    {
        question: "أيّ عنوان من بين العناوين التالية هو عنوان APIPA",
        options: [
            "192.168.1.1",
            "169.254.1.1",
            "172.16.1.1",
            "10.0.0.1"
        ],
        correctAnswer: 1 // 169.254.1.1
    }
];

let currentAnswers = new Array(questions.length).fill(null);

function createQuiz() {
    const questionsContainer = document.getElementById('questions');
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        q.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            
            optionDiv.addEventListener('click', () => {
                // Remove selected class from all options in this question
                optionsDiv.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                optionDiv.classList.add('selected');
                
                // Store the answer
                currentAnswers[index] = optionIndex;
            });
            
            optionsDiv.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

function showResults() {
    const quiz = document.getElementById('quiz');
    const results = document.getElementById('results');
    const score = document.getElementById('score');
    const total = document.getElementById('total');
    
    const correctAnswers = currentAnswers.filter((answer, index) => 
        answer === questions[index].correctAnswer
    ).length;
    
    score.textContent = correctAnswers;
    total.textContent = questions.length;
    
    quiz.classList.add('hide');
    results.classList.remove('hide');
}

function restartQuiz() {
    const quiz = document.getElementById('quiz');
    const results = document.getElementById('results');
    
    // Reset answers
    currentAnswers = new Array(questions.length).fill(null);
    
    // Clear questions container
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';
    
    // Recreate quiz
    createQuiz();
    
    // Show quiz, hide results
    quiz.classList.remove('hide');
    results.classList.add('hide');
}

// Initialize quiz
document.addEventListener('DOMContentLoaded', () => {
    createQuiz();
    
    // Add event listeners
    document.getElementById('submit').addEventListener('click', showResults);
    document.getElementById('restart').addEventListener('click', restartQuiz);
}); 