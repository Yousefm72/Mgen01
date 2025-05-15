const questions = [
    {
        question: "أي من البروتوكولات التالية يعتبر بروتوكولاً رئيسياً في الإنترنت؟",
        options: [
            "HTTP",
            "FTP",
            "TCP/IP",
            "SMTP"
        ],
        correctAnswer: 2, // TCP/IP
        type: "multiple"
    },
    {
        question: "أقوال تتطرّق إلى عنوان الـ IP التالي: 172.10.10.10/16",
        options: [
            "هو عنوان خاص من الفئة B",
            "هو عنوان عام من الفئة A",
            "هو عنوان خاص من الفئة A",
            "هو عنوان عام من الفئة B"
        ],
        correctAnswer: 0, // هو عنوان خاص من الفئة B
        type: "multiple"
    },
    {
        question: "أيّ عنوان من بين العناوين التالية هو عنوان APIPA",
        options: [
            "192.168.1.1",
            "169.254.1.1",
            "172.16.1.1",
            "10.0.0.1"
        ],
        correctAnswer: 1, // 169.254.1.1
        type: "multiple"
    },
    {
        question: "الرسالة التي يقوم ببثها الحاسوب الخادم DHCP للحصول على عنوان هي",
        options: ["DHCP DISCOVER", "DHCP REQUEST", "DHCP OFFER", "DHCP ACK"],
        correctAnswer: 0,
        type: "multiple"
    },
    {
        question: "ما هو الأمر الصحيح لتعريف الواجهة Gig0/0 في الراوتر؟",
        options: [
            "interface GigabitEthernet 0/0",
            "interface Gig0/0",
            "config Gig0/0",
            "router Gig0/0"
        ],
        correctAnswer: 0,
        type: "multiple"
    },
    {
        question: "ما هو البروتوكول الذي يمكن توجيه رزم معطيات بين شبكات مختلفة؟",
        options: ["HTTP", "FTP", "IP", "SMTP"],
        correctAnswer: 2,
        type: "multiple"
    },
    {
        question: "حسب اي عنوان يتعرف المفتاح (switch) على الأجهزة المرتبطة به؟",
        options: ["IP Address", "MAC Address", "Subnet Mask", "Default Gateway"],
        correctAnswer: 1,
        type: "multiple"
    },
    {
        question: "أي من العناوين التالية هو عنوان IP خاص (Private IP)?",
        options: ["8.8.8.8", "192.168.1.1", "172.32.1.1", "200.1.1.1"],
        correctAnswer: 1,
        type: "multiple"
    },
    {
        question: "أي من البروتوكولات التالية يعمل في طبقة التطبيق (Application Layer) في نموذج OSI?",
        options: ["TCP", "IP", "HTTP", "Ethernet"],
        correctAnswer: 2,
        type: "multiple"
    },
    {
        question: "أي من الأوامر التالية يستخدم لعرض جدول التوجيه في الراوتر؟",
        options: ["show ip route", "show route", "display route", "route table"],
        correctAnswer: 0,
        type: "multiple"
    },
    {
        question: "أي من العناوين التالية هو عنوان IPv6 صحيح؟",
        options: [
            "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
            "192.168.1.1",
            "2001:0db8:85a3:0000:0000:8a2e:0370",
            "2001:0db8:85a3:0000:0000:8a2e:0370:7334:1234"
        ],
        correctAnswer: 0,
        type: "multiple"
    },
    {
        question: "أي من الأوامر التالية يستخدم لعرض حالة المنافذ في السويتش؟",
        options: ["show ports", "show interfaces", "display ports", "port status"],
        correctAnswer: 1,
        type: "multiple"
    }
];

let currentAnswers = new Array(questions.length).fill(null);
let userFeedback = new Array(questions.length).fill(null);

function createQuiz() {
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';
    
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
            
            const optionContent = document.createElement('span');
            optionContent.textContent = option;
            optionDiv.appendChild(optionContent);
            
            const feedbackIcon = document.createElement('span');
            feedbackIcon.className = 'feedback-icon';
            optionDiv.appendChild(feedbackIcon);
            
            optionDiv.addEventListener('click', () => {
                if (userFeedback[index] !== null) return; // Prevent changing answer after feedback
                
                // Remove selected class from all options in this question
                optionsDiv.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                optionDiv.classList.add('selected');
                
                // Store the answer
                currentAnswers[index] = optionIndex;
                
                // Show immediate feedback
                showFeedback(index, optionIndex);
            });
            
            optionsDiv.appendChild(optionDiv);
        });
        
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback';
        feedbackDiv.id = `feedback-${index}`;
        questionDiv.appendChild(feedbackDiv);
        
        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

function showFeedback(questionIndex, selectedAnswer) {
    const feedbackDiv = document.getElementById(`feedback-${questionIndex}`);
    const isCorrect = selectedAnswer === questions[questionIndex].correctAnswer;
    userFeedback[questionIndex] = isCorrect;
    
    feedbackDiv.textContent = isCorrect ? '✓ إجابة صحيحة' : '✗ إجابة خاطئة';
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    // Update score
    updateScore();
}

function updateScore() {
    const correctAnswers = userFeedback.filter(feedback => feedback === true).length;
    const score = document.getElementById('score');
    const total = document.getElementById('total');
    
    score.textContent = correctAnswers;
    total.textContent = questions.length;
}

function restartQuiz() {
    currentAnswers = new Array(questions.length).fill(null);
    userFeedback = new Array(questions.length).fill(null);
    createQuiz();
    updateScore();
}

// Initialize quiz
document.addEventListener('DOMContentLoaded', () => {
    createQuiz();
    document.getElementById('restart').addEventListener('click', restartQuiz);
}); 