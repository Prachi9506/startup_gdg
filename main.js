// Data
const startupIdeas = {
    india: [
        { title: 'AgriTech Solutions', description: 'Smart farming solutions using IoT and AI', potential: 'High', investment: '₹10-50L', sector: 'Agriculture' },
        { title: 'EdTech Platform', description: 'Vernacular language learning apps', potential: 'Very High', investment: '₹25-75L', sector: 'Education' },
        { title: 'FinTech Services', description: 'Digital payment solutions for rural areas', potential: 'High', investment: '₹50L-2Cr', sector: 'Finance' },
        { title: 'Healthcare App', description: 'Telemedicine and health monitoring', potential: 'Very High', investment: '₹30-80L', sector: 'Healthcare' },
        { title: 'Local Commerce', description: 'Hyperlocal delivery platform', potential: 'High', investment: '₹20-60L', sector: 'Retail' },
        { title: 'EV Infrastructure', description: 'Electric vehicle charging network', potential: 'Very High', investment: '₹1-5Cr', sector: 'Transportation' }
    ],
    usa: [
        { title: 'HealthTech Platform', description: 'AI-driven healthcare diagnostics', potential: 'Very High', investment: '$500K-2M', sector: 'Healthcare' },
        { title: 'Clean Energy Solutions', description: 'Renewable energy for homes', potential: 'High', investment: '$1M-5M', sector: 'Energy' },
        { title: 'SpaceTech Ventures', description: 'Commercial space technologies', potential: 'Very High', investment: '$2M-10M', sector: 'Space' },
        { title: 'AI Services', description: 'Enterprise AI solutions', potential: 'Very High', investment: '$1M-3M', sector: 'Technology' },
        { title: 'BioTech Research', description: 'Gene therapy solutions', potential: 'High', investment: '$5M-20M', sector: 'Biotechnology' },
        { title: 'Quantum Computing', description: 'Quantum software development', potential: 'Very High', investment: '$2M-8M', sector: 'Technology' }
    ],
    europe: [
        { title: 'Sustainable Fashion', description: 'Eco-friendly clothing line', potential: 'High', investment: '€200K-1M', sector: 'Fashion' },
        { title: 'Smart City Solutions', description: 'Urban planning technology', potential: 'High', investment: '€500K-2M', sector: 'Infrastructure' },
        { title: 'FoodTech Innovation', description: 'Plant-based food alternatives', potential: 'Very High', investment: '€1M-5M', sector: 'Food' },
        { title: 'Green Energy', description: 'Wind and solar solutions', potential: 'High', investment: '€2M-8M', sector: 'Energy' },
        { title: 'Digital Health', description: 'Mental health platforms', potential: 'Very High', investment: '€500K-2M', sector: 'Healthcare' },
        { title: 'Circular Economy', description: 'Waste reduction technology', potential: 'High', investment: '€1M-4M', sector: 'Sustainability' }
    ],
    asia: [
        { title: 'E-commerce Platform', description: 'Cross-border trading solution', potential: 'High', investment: '$300K-1M', sector: 'Retail' },
        { title: 'Digital Banking', description: 'Mobile-first banking services', potential: 'Very High', investment: '$1M-3M', sector: 'Finance' },
        { title: 'Smart Manufacturing', description: 'Industry 4.0 solutions', potential: 'High', investment: '$500K-2M', sector: 'Manufacturing' },
        { title: 'EdTech Solutions', description: 'Mobile learning platforms', potential: 'High', investment: '$200K-1M', sector: 'Education' },
        { title: 'Gaming Studio', description: 'Mobile game development', potential: 'Very High', investment: '$500K-2M', sector: 'Entertainment' },
        { title: 'AgriTech Platform', description: 'Precision farming solutions', potential: 'High', investment: '$400K-1.5M', sector: 'Agriculture' }
    ]
};

const successStories = [
    {
        name: 'TechFlow',
        founder: 'Sarah Chen',
        description: 'Started as a small AI consulting firm, now valued at $1.2B',
        journey: 'Bootstrapped for 2 years before raising Series A',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'GreenEnergy',
        founder: 'Michael Schmidt',
        description: 'Pioneering solar technology company with global impact',
        journey: 'Started in a garage, now in 20 countries',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
        name: 'HealthFirst',
        founder: 'Dr. Priya Sharma',
        description: 'Revolutionary healthcare app serving 10M+ users',
        journey: 'From pilot in rural India to global healthcare solution',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
];

const roadmapSteps = [
    {
        phase: 'Ideation',
        steps: [
            'Market Research',
            'Competitor Analysis',
            'Value Proposition',
            'Initial Business Plan'
        ]
    },
    {
        phase: 'Validation',
        steps: [
            'MVP Development',
            'Customer Feedback',
            'Product Iterations',
            'Market Fit Analysis'
        ]
    },
    {
        phase: 'Launch',
        steps: [
            'Legal Setup',
            'Team Building',
            'Marketing Strategy',
            'Official Launch'
        ]
    },
    {
        phase: 'Growth',
        steps: [
            'Scale Operations',
            'Funding Rounds',
            'Market Expansion',
            'Team Growth'
        ]
    }
];

const quizQuestions = [
    {
        question: 'What is your primary motivation for starting a business?',
        options: [
            'Financial Independence',
            'Solving a Problem',
            'Following a Passion',
            'Market Opportunity'
        ]
    },
    {
        question: 'How much risk are you willing to take?',
        options: [
            'Very High Risk',
            'Moderate Risk',
            'Calculated Risk',
            'Low Risk'
        ]
    },
    {
        question: 'What is your preferred business model?',
        options: [
            'B2B (Business to Business)',
            'B2C (Business to Consumer)',
            'Marketplace',
            'SaaS (Software as a Service)'
        ]
    },
    {
        question: 'What is your strongest skill set?',
        options: [
            'Technical/Engineering',
            'Business/Management',
            'Creative/Design',
            'Sales/Marketing'
        ]
    },
    {
        question: 'What is your preferred industry?',
        options: [
            'Technology',
            'Healthcare',
            'Education',
            'Sustainability'
        ]
    }
];

// Navigation
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeIdeasSection();
    initializeSuccessStories();
    initializeRoadmap();
    initializeResourcesSection();
    initializeInsightsSection();
    initializeQuiz();
});

function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Show home section by default
    showSection('home');
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show hero section only on home
    const heroSection = document.querySelector('.hero-section');
    if (sectionId === 'home') {
        heroSection.style.display = 'flex';
    } else {
        heroSection.style.display = 'none';
        // Show the selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
}

// Ideas Section
function initializeIdeasSection() {
    const regionButtons = document.querySelectorAll('.region-btn');
    regionButtons.forEach(button => {
        button.addEventListener('click', () => {
            regionButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayIdeas(button.dataset.region);
        });
    });
    displayIdeas('india'); // Show Indian ideas by default
}

function displayIdeas(region) {
    const container = document.getElementById('ideas-container');
    container.innerHTML = '';
    
    startupIdeas[region].forEach(idea => {
        const card = document.createElement('div');
        card.className = 'idea-card';
        card.innerHTML = `
            <h3>${idea.title}</h3>
            <p>${idea.description}</p>
            <p><strong>Sector:</strong> ${idea.sector}</p>
            <p><strong>Market Potential:</strong> ${idea.potential}</p>
            <p><strong>Investment Range:</strong> ${idea.investment}</p>
        `;
        container.appendChild(card);
    });
}

// Success Stories Section
function initializeSuccessStories() {
    const container = document.getElementById('success-stories-container');
    successStories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'success-story-card';
        card.innerHTML = `
            <img src="${story.image}" alt="${story.name}">
            <div class="success-story-content">
                <h3>${story.name}</h3>
                <p><strong>Founder:</strong> ${story.founder}</p>
                <p>${story.description}</p>
                <p><em>${story.journey}</em></p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Roadmap Section
function initializeRoadmap() {
    const container = document.querySelector('.roadmap-timeline');
    roadmapSteps.forEach((phase, index) => {
        const phaseElement = document.createElement('div');
        phaseElement.className = `roadmap-phase ${index % 2 === 0 ? 'left' : 'right'}`;
        phaseElement.innerHTML = `
            <div class="phase-content">
                <h3>${phase.phase}</h3>
                <ul>
                    ${phase.steps.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
        `;
        container.appendChild(phaseElement);
    });
}

// Resources Section
function initializeResourcesSection() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            showResourceContent(button.dataset.tab);
        });
    });

    // Initialize charts
    initializeCharts();
    initializeResourceContent();
}

function showResourceContent(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabId}-content`).classList.add('active');
}

function initializeCharts() {
    // Funding Sources Chart
    const fundingCtx = document.querySelector('#fundingChart canvas').getContext('2d');
    new Chart(fundingCtx, {
        type: 'pie',
        data: {
            labels: ['Venture Capital', 'Angel Investors', 'Bank Loans', 'Crowdfunding', 'Bootstrap', 'Government Grants'],
            datasets: [{
                data: [35, 25, 15, 10, 10, 5],
                backgroundColor: ['#2ecc71', '#3498db', '#9b59b6', '#e74c3c', '#f1c40f', '#1abc9c']
            }]
        }
    });

    // Success Metrics Chart
    const metricsCtx = document.querySelector('#metricsChart canvas').getContext('2d');
    new Chart(metricsCtx, {
        type: 'bar',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
            datasets: [{
                label: 'Average Growth Rate (%)',
                data: [20, 45, 75, 100, 150],
                backgroundColor: '#3498db'
            }]
        }
    });
}

function initializeResourceContent() {
    // Legal Resources Content
    document.getElementById('legal-content').innerHTML = `
        <div class="resource-grid">
            <div class="resource-card">
                <h3>Legal Requirements</h3>
                <ul>
                    <li>Business Registration</li>
                    <li>Intellectual Property</li>
                    <li>Contracts & Agreements</li>
                    <li>Compliance & Regulations</li>
                </ul>
            </div>
            <div class="resource-card">
                <h3>Document Templates</h3>
                <ul>
                    <li>Founder's Agreement</li>
                    <li>Employment Contracts</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
        </div>
    `;

    // Marketing Resources Content
    document.getElementById('marketing-content').innerHTML = `
        <div class="resource-grid">
            <div class="resource-card">
                <h3>Digital Marketing</h3>
                <ul>
                    <li>Social Media Strategy</li>
                    <li>Content Marketing</li>
                    <li>SEO Basics</li>
                    <li>Email Marketing</li>
                </ul>
            </div>
            <div class="resource-card">
                <h3>Growth Hacking</h3>
                <ul>
                    <li>Customer Acquisition</li>
                    <li>Viral Marketing</li>
                    <li>Analytics & Metrics</li>
                    <li>A/B Testing</li>
                </ul>
            </div>
        </div>
    `;

    // Tech Resources Content
     document.getElementById('tech-content').innerHTML = `
        <div class="resource-grid">
            <div class="resource-card">
                <h3>Tech Stack Guide</h3>
                <ul>
                    <li>Frontend Development</li>
                    <li>Backend Architecture</li>
                    <li>Cloud Services</li>
                    <li>DevOps Essentials</li>
                </ul>
            </div>
            <div class="resource-card">
                <h3>Security & Scaling</h3>
                <ul>
                    <li>Security Best Practices</li>
                    <li>Infrastructure Scaling</li>
                    <li>Performance Optimization</li>
                    <li>Data Management</li>
                </ul>
            </div>
        </div>
    `;
}

// Insights Section
function initializeInsightsSection() {
    const insightsData = [
        { industry: 'Technology', growth: '25%', size: '$4.5T', barrier: 'Medium', success: '35%' },
        { industry: 'Healthcare', growth: '18%', size: '$2.5T', barrier: 'High', success: '28%' },
        { industry: 'E-commerce', growth: '22%', size: '$3.3T', barrier: 'Medium', success: '32%' },
        { industry: 'Clean Energy', growth: '30%', size: '$1.4T', barrier: 'High', success: '25%' },
        { industry: 'EdTech', growth: '16%', size: '$0.8T', barrier: 'Low', success: '40%' },
        { industry: 'FinTech', growth: '28%', size: '$2.8T', barrier: 'High', success: '30%' },
        { industry: 'BioTech', growth: '20%', size: '$1.2T', barrier: 'Very High', success: '22%' },
        { industry: 'AgriTech', growth: '15%', size: '$0.5T', barrier: 'Medium', success: '38%' }
    ];

    const tbody = document.querySelector('#insights-table tbody');
    insightsData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.industry}</td>
            <td>${data.growth}</td>
            <td>${data.size}</td>
            <td>${data.barrier}</td>
            <td>${data.success}</td>
        `;
        tbody.appendChild(row);
    });
}

// Quiz Section
let currentQuestion = 0;
let answers = [];

function initializeQuiz() {
    displayQuestion();
    document.getElementById('next-btn').addEventListener('click', handleNextQuestion);
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-btn');
    const resultContainer = document.getElementById('result-container');

    if (currentQuestion < quizQuestions.length) {
        const question = quizQuestions[currentQuestion];
        questionContainer.innerHTML = `<h3>Question ${currentQuestion + 1} of ${quizQuestions.length}:</h3><p>${question.question}</p>`;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionDiv);
        });

        nextButton.classList.remove('hidden');
        resultContainer.classList.add('hidden');
    } else {
        showResults();
    }
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
}

function handleNextQuestion() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) return;

    answers.push(selectedOption.textContent);
    currentQuestion++;
    displayQuestion();
}

function showResults() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-btn');
    const resultContainer = document.getElementById('result-container');

    questionContainer.innerHTML = '';
    optionsContainer.innerHTML = '';
    nextButton.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    const entrepreneurTypes = analyzeAnswers(answers);
    resultContainer.innerHTML = `
        <h3>Your Entrepreneurial Profile</h3>
        <p>${entrepreneurTypes.profile}</p>
        <h4>Recommended Industries:</h4>
        <ul>
            ${entrepreneurTypes.recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
        <div class="detailed-analysis">
            <h4>Detailed Analysis:</h4>
            <ul>
                ${entrepreneurTypes.analysis.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
        <div class="next-steps">
            <h4>Recommended Next Steps:</h4>
            <ol>
                ${entrepreneurTypes.nextSteps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;
}

function analyzeAnswers(answers) {
    // Enhanced analysis logic
    const profile = determineProfile(answers);
    const recommendations = generateRecommendations(answers);
    const analysis = generateDetailedAnalysis(answers);
    const nextSteps = generateNextSteps(answers);

    return {
        profile,
        recommendations,
        analysis,
        nextSteps
    };
}

function determineProfile(answers) {
    // Analyze motivation, risk tolerance, and preferred model
    const motivation = answers[0];
    const riskTolerance = answers[1];
    const businessModel = answers[2];
    const skillSet = answers[3];
    
    let profile = `You show strong potential as a ${riskTolerance === 'High Risk' ? 'disruptive' : 'strategic'} entrepreneur `;
    profile += `with a ${motivation === 'Solving a Problem' ? 'problem-solving' : 'market-driven'} mindset. `;
    profile += `Your ${skillSet.toLowerCase()} background combined with your preference for ${businessModel} `;
    profile += `suggests you would excel in ${getProfileFocus(answers)}.`;
    
    return profile;
}

function getProfileFocus(answers) {
    const skillToIndustryMap = {
        'Technical/Engineering': 'technology-driven ventures',
        'Business/Management': 'scalable business models',
        'Creative/Design': 'innovative product development',
        'Sales/Marketing': 'market expansion strategies'
    };
    return skillToIndustryMap[answers[3]] || 'innovative ventures';
}

function generateRecommendations(answers) {
    const industry = answers[4];
    const skillSet = answers[3];
    
    const baseRecommendations = {
        'Technology': ['SaaS Solutions', 'AI/ML Applications', 'Cybersecurity'],
        'Healthcare': ['Digital Health', 'Medical Devices', 'Healthcare Analytics'],
        'Education': ['EdTech Platforms', 'Online Learning', 'Educational Content'],
        'Sustainability': ['Clean Energy', 'Sustainable Products', 'Green Technology']
    };

    return baseRecommendations[industry] || [
        'Technology and Digital Solutions',
        'Service-Based Businesses',
        'E-commerce Platforms',
        'Consulting Services'
    ];
}

function generateDetailedAnalysis(answers) {
    return [
        `Your ${answers[0].toLowerCase()} focus aligns well with current market opportunities`,
        `Your ${answers[1].toLowerCase()} approach to risk suggests a balanced business strategy`,
        `${answers[2]} model preference indicates strong potential for scalability`,
        `Your ${answers[3].toLowerCase()} expertise can be leveraged for competitive advantage`,
        `Interest in ${answers[4].toLowerCase()} sector shows good market awareness`
    ];
}

function generateNextSteps(answers) {
    return [
        'Conduct detailed market research in your chosen sector',
        'Develop a minimum viable product (MVP)',
        'Create a comprehensive business plan',
        'Build a network of mentors and advisors',
        'Explore funding options aligned with your business model'
    ];
}