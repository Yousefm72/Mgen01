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
        type: "multiple",
        hasImage: false,
        comment: "TCP/IP هو البروتوكول الرئيسي للإنترنت لأنه يوفر الاتصال والتوجيه بين الأجهزة"
    },
    {
        question: "أقوال تتطرّق إلى عنوان الـ IP التالي: 172.10.10.10/16",
        options: [
            "هو عنوان عام من الفئة B",
            "هو عنوان خاص من الفئة B",   
            "هو عنوان عام من الفئة A",
            "هو عنوان خاص من الفئة A"
        ],
        correctAnswer: 0, // هو عنوان عام من الفئة B
        type: "multiple",
        hasImage: false,
        comment: "العنوان 172.10.x.x يقع ضمن نطاق الفئة B (128-191) وهو عنوان عام لأنه خارج نطاق العناوين الخاصة (172.16.0.0 - 172.31.255.255)"
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
        type: "multiple",
        hasImage: false
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
        question: "ما هو البروتوكول الذي يمكن توجيه رزم بيانات بين شبكات مختلفة؟",
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
    },
    
    
    {
        question: "ما هو الأمر الصحيح لتعريف واجهة GigabitEthernet 0/0 في Router0 كما هو موضح في الصورة؟",
        options: [
            "interface GigabitEthernet 0/0",
            "interface Gig0/0",
            "config GigabitEthernet 0/0",
            "router GigabitEthernet 0/0"
        ],
        correctAnswer: 0,
        type: "multiple",
        hasImage: true,
        imageUrl: "https://github.com/Yousefm72/Mgen01/blob/main/net1.PNG?raw=true",
        imageAlt: "صورة توضح واجهات Router0"
    },
    {
        question: "ما هو الأمر الصحيح لتعريف واجهة GigabitEthernet 0/1 في Router1 كما هو موضح في الصورة؟",
        options: [
            "interface GigabitEthernet 0/1",
            "interface Gig0/1",
            "config GigabitEthernet 0/1",
            "router GigabitEthernet 0/1"
        ],
        correctAnswer: 0,
        type: "multiple",
        hasImage: true,
        imageUrl: "https://github.com/Yousefm72/Mgen01/blob/main/net1.PNG?raw=true",
        imageAlt: "صورة توضح واجهات Router1"
    },
    {
        question: "ما هو الأمر الصحيح لعرض حالة واجهات GigabitEthernet0/0 في Router0 كما هو موضح في الصورة؟",
        options: [
            "show interfaces GigabitEthernet 0/0",
            "display GigabitEthernet 0/0",
            "show Gig0/0 status",
            "interface GigabitEthernet 0/0 status"
        ],
        correctAnswer: 0,
        type: "multiple",
        hasImage: true,
        imageUrl: "https://github.com/Yousefm72/Mgen01/blob/main/net1.PNG?raw=true",
        imageAlt: "صورة توضح حالة واجهات Router0"
    },
    {
        question: "ما هو الأمر الصحيح لتعريف عنوان IP لواجهة GigabitEthernet 0/0 في Router0 كما هو موضح في الصورة؟",
        options: [
            "ip address 192.168.1.1 255.255.255.0",
            "set ip GigabitEthernet 0/0 192.168.1.1/24",
            "address ip 192.168.1.1 mask 255.255.255.0",
            "configure ip GigabitEthernet 0/0 192.168.1.1 24"
        ],
        correctAnswer: 0,
        type: "multiple",
        hasImage: true,
        imageUrl: "https://github.com/Yousefm72/Mgen01/blob/main/net1.PNG?raw=true",
        imageAlt: "صورة توضح إعدادات IP في Router0"
    },
    {
        question: "ما هو الأمر الصحيح لتفعيل واجهة GigabitEthernet 0/1 في Router1 كما هو موضح في الصورة؟",
        options: [
            "no shutdown",
            "enable interface",
            "interface up",
            "activate GigabitEthernet 0/1"
        ],
        correctAnswer: 0,
        type: "multiple",
        hasImage: true,
        imageUrl: "https://github.com/Yousefm72/Mgen01/blob/main/net1.PNG?raw=true",
        imageAlt: "صورة توضح تفعيل واجهة Router1"
    },
    {
        question: "ما هو الأمر الصحيح لعرض جدول التوجيه في Router0 كما هو موضح في الصورة؟",
        options: [
            "show ip route",
            "display routing table",
            "show route",
            "route table"
        ],
        correctAnswer: 0,
        type: "multiple",
        hasImage: true,
        imageUrl: "https://github.com/Yousefm72/Mgen01/blob/main/net1.PNG?raw=true",
        imageAlt: "صورة توضح جدول التوجيه في Router0"
    },
    {
        question: "ما هو الرقم العشري (Decimal) المقابل للرقم الثنائي (Binary) 1010؟",
        options: ["8", "10", "12", "14"],
        correctAnswer: 1, // 10
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو الرقم الست عشري (Hexadecimal) المقابل للرقم العشري (Decimal) 255؟",
        options: ["FF", "F5", "FA", "F0"],
        correctAnswer: 0, // FF
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو الرقم الثنائي (Binary) المقابل للرقم الست عشري (Hexadecimal) A5؟",
        options: ["10100101", "10101010", "10101101", "10100001"],
        correctAnswer: 0, // 10100101
        type: "multiple",
        hasImage: false
    },
    {
        question: "كم عدد البتات (Bits) المطلوبة لتمثيل الرقم الست عشري (Hexadecimal) FF؟",
        options: ["4 bits", "8 bits", "16 bits", "32 bits"],
        correctAnswer: 1, // 8 bits
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو الرقم العشري (Decimal) المقابل للرقم الست عشري (Hexadecimal) 1A؟",
        options: ["25", "26", "27", "28"],
        correctAnswer: 1, // 26
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو الرقم الثنائي (Binary) المقابل للرقم العشري (Decimal) 42؟",
        options: ["101010", "101011", "101100", "101101"],
        correctAnswer: 0, // 101010
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو الرقم الست عشري (Hexadecimal) المقابل للرقم الثنائي (Binary) 11001100؟",
        options: ["CC", "DD", "EE", "FF"],
        correctAnswer: 0, // CC
        type: "multiple",
        hasImage: false
    },
    {
        question: "كم عدد البايتات (Bytes) المطلوبة لتمثيل الرقم الثنائي (Binary) 10101010؟",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        correctAnswer: 0, // 1 byte
        type: "multiple",
        hasImage: false
    },
    {
        question: "كم عدد طبقات نموذج OSI؟",
        options: ["5 طبقات", "6 طبقات", "7 طبقات", "8 طبقات"],
        correctAnswer: 2, // 7 طبقات
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يعمل في طبقة التطبيق (Application Layer)؟",
        options: ["TCP", "HTTP", "IP", "ARP"],
        correctAnswer: 1, // HTTP
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يعمل في طبقة النقل (Transport Layer)؟",
        options: ["HTTP", "FTP", "TCP", "IP"],
        correctAnswer: 2, // TCP
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يعمل في طبقة الشبكة (Network Layer)؟",
        options: ["TCP", "UDP", "IP", "HTTP"],
        correctAnswer: 2, // IP
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يعمل في طبقة ربط البيانات (Data Link Layer)؟",
        options: ["IP", "TCP", "Ethernet", "HTTP"],
        correctAnswer: 2, // Ethernet
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هي الطبقة المسؤولة عن تحويل البيانات إلى إشارات كهربائية في نموذج OSI؟",
        options: ["طبقة التطبيق", "طبقة العرض", "طبقة الجلسة", "طبقة الفيزيائية"],
        correctAnswer: 3, // طبقة الفيزيائية
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يستخدم في طبقة التطبيق للبريد الإلكتروني؟",
        options: ["HTTP", "FTP", "SMTP", "DNS"],
        correctAnswer: 2, // SMTP
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هي الطبقة المسؤولة عن تشفير وفك تشفير البيانات في نموذج OSI؟",
        options: ["طبقة التطبيق", "طبقة العرض", "طبقة النقل", "طبقة الشبكة"],
        correctAnswer: 1, // طبقة العرض
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يستخدم في طبقة التطبيق لنقل الملفات؟",
        options: ["HTTP", "FTP", "SMTP", "DNS"],
        correctAnswer: 1, // FTP
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هي الطبقة المسؤولة عن توجيه البيانات بين الشبكات المختلفة؟",
        options: ["طبقة النقل", "طبقة الشبكة", "طبقة ربط البيانات", "طبقة الفيزيائية"],
        correctAnswer: 1, // طبقة الشبكة
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يستخدم في طبقة التطبيق لتحويل أسماء النطاقات إلى عناوين IP؟",
        options: ["HTTP", "FTP", "SMTP", "DNS"],
        correctAnswer: 3, // DNS
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هي الطبقة المسؤولة عن إدارة الاتصال بين التطبيقات في نموذج OSI؟",
        options: ["طبقة التطبيق", "طبقة العرض", "طبقة الجلسة", "طبقة النقل"],
        correctAnswer: 2, // طبقة الجلسة
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يعمل في طبقة ربط البيانات للعثور على عنوان MAC؟",
        options: ["IP", "TCP", "ARP", "HTTP"],
        correctAnswer: 2, // ARP
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول HTTP؟",
        options: ["21", "25", "80", "443"],
        correctAnswer: 2, // 80
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول HTTPS؟",
        options: ["21", "25", "80", "443"],
        correctAnswer: 3, // 443
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port الافتراضي ) المستخدم لبروتوكول FTP؟",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1, // 21
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول SMTP؟",
        options: ["21", "22", "25", "80"],
        correctAnswer: 2, // 25
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول SSH؟",
        options: ["21", "22", "23", "25"],
        correctAnswer: 1, // 22
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول Telnet؟",
        options: ["21", "22", "23", "25"],
        correctAnswer: 2, // 23
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول DNS؟",
        options: ["53", "67", "68", "69"],
        correctAnswer: 0, // 53
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول DHCP Server؟",
        options: ["53", "67", "68", "69"],
        correctAnswer: 1, // 67
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول DHCP Client؟",
        options: ["53", "67", "68", "69"],
        correctAnswer: 2, // 68
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port) المستخدم لبروتوكول TFTP؟",
        options: ["53", "67", "68", "69"],
        correctAnswer: 3, // 69
        type: "multiple",
        hasImage: false
    },
    {
        question: "أي من البروتوكولات التالية يستخدم لنقل الملفات بشكل آمن؟",
        options: ["FTP", "TFTP", "SFTP", "HTTP"],
        correctAnswer: 2, // SFTP
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو البروتوكول المستخدم لإدارة الشبكات عن بعد؟",
        options: ["HTTP", "FTP", "SNMP", "SMTP"],
        correctAnswer: 2, // SNMP
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port الافتراضي ) المستخدم لبروتوكول SNMP؟",
        options: ["161", "162", "143", "110"],
        correctAnswer: 0, // 161
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو البروتوكول المستخدم للوصول إلى البريد الإلكتروني؟",
        options: ["SMTP", "POP3", "FTP", "HTTP"],
        correctAnswer: 1, // POP3
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port الافتراضي ) المستخدم لبروتوكول POP3؟",
        options: ["110", "143", "25", "80"],
        correctAnswer: 0, // 110
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو البروتوكول المستخدم للوصول إلى البريد الإلكتروني مع إمكانية الاحتفاظ بالرسائل على الخادم؟",
        options: ["POP3", "IMAP", "SMTP", "HTTP"],
        correctAnswer: 1, // IMAP
        type: "multiple",
        hasImage: false
    },
    {
        question: "ما هو رقم المنفذ (Port الافتراضي ) المستخدم لبروتوكول IMAP؟",
        options: ["110", "143", "25", "80"],
        correctAnswer: 1, // 143
        type: "multiple",
        hasImage: false
    }
];

let currentAnswers = new Array(questions.length).fill(null);
let userFeedback = new Array(questions.length).fill(null);

function createQuiz() {
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';
    imageUrl: "https://github.com/Yousefm72/Mgen01/blob/main/net1.PNG?raw=true",

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);
        
        // Add image if the question has one
        if (q.hasImage && q.imageUrl) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'question-image';
            
            const image = document.createElement('img');
            image.src = q.imageUrl;
            image.alt = q.imageAlt || 'صورة السؤال';
            image.className = 'quiz-image';
            
            // Add error handling for images
            image.onerror = function() {
                this.style.display = 'none';
                const errorMessage = document.createElement('p');
                errorMessage.className = 'image-error';
                errorMessage.textContent = 'لم يتم العثور على الصورة';
                imageContainer.appendChild(errorMessage);
            };
            
            imageContainer.appendChild(image);
            questionDiv.appendChild(imageContainer);
        }
        
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
    
    let feedbackText = isCorrect ? '✓ إجابة صحيحة' : '✗ إجابة خاطئة';
    
    // Add comment if available
    if (questions[questionIndex].comment) {
        feedbackText += `<br><div class="comment">💡 ${questions[questionIndex].comment}</div>`;
    }
    
    feedbackDiv.innerHTML = feedbackText;
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    // Update score
    updateScore();
}

function updateScore() {
    const correctAnswers = userFeedback.filter(feedback => feedback === true).length;
    const score = document.getElementById('score');
    const total = document.getElementById('total');
    const totalQuestions = document.getElementById('total-questions');
    
    score.textContent = correctAnswers;
    total.textContent = questions.length;
    totalQuestions.textContent = questions.length;
}

function restartQuiz() {
    currentAnswers = new Array(questions.length).fill(null);
    userFeedback = new Array(questions.length).fill(null);
    createQuiz();
    updateScore();
}

// Initialize quiz
document.addEventListener('DOMContentLoaded', () => {
    // Set total questions count immediately when page loads
    document.getElementById('total-questions').textContent = questions.length;
    createQuiz();
    document.getElementById('restart').addEventListener('click', restartQuiz);
}); 