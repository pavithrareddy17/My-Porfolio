import { Experience, Project, Education, Certification, LeadershipItem } from '../types/portfolio';

export const personalInfo = {
  name: "VELURU PAVITHRA",
  title: "Full Stack & AI Engineer",
  tagline: "Building scalable web systems & intelligent automation",
  currentCompany: "Société Générale",
  department: "Network Operations (HCS)",
  location: "Bengaluru, India",
  email: "pavithraveluru2@gmail.com",
  phone: "+91 7989257170",
  linkedin: "https://www.linkedin.com/in/pavithra-veluru-a74070221/",
  github: "https://github.com/Pavithra-06",
  aboutParagraphs: [
    "As a Full Stack Developer / Software Engineer, I enjoy turning ideas into scalable applications, intelligent solutions, and automation that solve real-world problems.",
    "I currently work at Société Générale, where I build enterprise applications and automation solutions for network operations. My work spans the full stack, from developing interactive applications with React, Angular to building backend services and APIs using Python, Flask, and FastAPI. I collaborate with internal Network (HCS) teams to develop solutions that simplify workflows, automate operational tasks, and improve network monitoring and device management.",
    "I'm particularly interested in AI and GenAI and how they can be integrated into practical software solutions. I have worked with LLMs, AWS Bedrock (such as LLaMA 3.2), the OpenAI API, and explored areas like RAG (Retrieval-Augmented Generation) and AI/ML-based entity matching. I'm also eager to expand into AI agent workflows, LangChain, LangGraph, and other modern AI frameworks.",
    "Beyond software engineering, I also have a strong foundation in IoT, having built projects involving microcontrollers, sensors, and embedded systems, including an IoT-based smart blind stick and an implantable sensor system with solar energy harvesting.",
    "I enjoy working in collaborative environments, solving challenging problems, and continuously learning new technologies."
  ]
};

export const categorizedSkills = {
  "Languages & Frameworks": [
    "Python", "Java", "JavaScript", "React.js", "Angular", "Flask", "FastAPI", "HTML/CSS"
  ],
  "AI & GenAI": [
    "LLMs", "AWS Bedrock", "OpenAI API", "RAG", "AI/ML", "Entity Matching", "AI Agents"
  ],
  "Cloud & DevOps": [
    "AWS", "Lambda", "EC2", "Docker", "Git"
  ],
  "Databases & Tools": [
    "MySQL", "PostgreSQL", "Datadog", "ServiceNow", "Slack API", "GitHub"
  ],
  "Interests": [
    "Full Stack Development", "AI/GenAI", "Automation", "Cloud Computing", "Scalable Enterprise Solutions"
  ]
};

export const experiences: Experience[] = [
  {
    id: "socgen",
    company: "Société Générale",
    role: "Full Stack Developer / Software Engineer",
    location: "Bengaluru, India",
    period: "Sep 2025 – Present",
    current: true,
    type: "Full-time",
    summary: "Building enterprise applications and network automation solutions for HCS Network Operations.",
    responsibilities: [
      "Developed 3 end-to-end automation requests within the Network Portal using React, Angular, Python, and Flask, automating network device and IP operations and reducing repetitive manual effort by 40%.",
      "Built a Multi-Region Network Automation and Configuration Platform using React, Python, enabling automated proxy-based connectivity across 4 regions and network devices, supporting bulk configuration, validation, output verification, and real-time job-status.",
      "Developed an automated network latency monitoring and remediation portal integrated with Microsoft Teams and Grafana, enabling real-time monitoring across 10+ network devices, automatically detecting packet drops/latency, switching network links, and notifying individual users through Teams, reducing manual intervention by 30%.",
      "Participated in 3 organization-level hackathons collaborating on innovative technology solutions and winning 1 hackathon among participating teams."
    ],
    technologies: ["React", "Angular", "Python", "Flask", "FastAPI", "Grafana", "Microsoft Teams API", "Network Device Automation"]
  },
  {
    id: "ellucian",
    company: "Ellucian",
    role: "Cloud Intern",
    location: "Bengaluru, India",
    period: "Jan 2025 – Apr 2025",
    type: "Internship",
    summary: "Developed an ML-based proactive & reactive incident intelligence platform for cloud enterprise operations.",
    responsibilities: [
      "Integrated AWS Bedrock LLM with Datadog RUM logs and ServiceNow tickets to auto-summarize past incidents, cutting resolution time by 30%.",
      "Built Reactive (semantic-search issue lookup) and Proactive (bottleneck detection) engines, boosting operational efficiency by 30%.",
      "Built a unified React dashboard integrating customer registration data, incident tracking, and summaries, with seamless Slack API integration to auto-create war rooms, assign teams, and share insights in one click.",
      "Our solution proactively identified potential issues, enabling anticipatory measures that reduce incident occurrence by 30–40% and cut triage, assignment."
    ],
    technologies: ["AWS Bedrock", "LLaMA 3.2", "AWS Lambda", "React", "Slack API", "Datadog", "ServiceNow"]
  },
  {
    id: "rural-handmade",
    company: "Rural Handmade",
    role: "IoT Intern",
    location: "Remote / Bengaluru, India",
    period: "Jul 2023 – Aug 2023",
    type: "Internship",
    summary: "Managed inventory tracking and analyzed IoT applications across supply chains.",
    responsibilities: [
      "Managed and organized detailed data for 250+ e-commerce products, including descriptions, categories, and stock status in the company's database.",
      "Co-authored 3 research blogs and assisted in IoT integration for remote inventory tracking, helping boost blog engagement by 20% and automate 30% of supply chain monitoring."
    ],
    technologies: ["IoT Integration", "Supply Chain Automation", "Database Management", "Sensors", "Technical Research"]
  }
];

export const projects: Project[] = [
  {
    id: "oneview-ai",
    title: "OneView AI – AI-Powered Enterprise Customer Intelligence Platform",
    category: "AI & GenAI",
    subtitle: "1st Place Hackathon Winner • Customer relationship unification & KYC automation",
    shortDescription: "Developed an AI-powered customer intelligence platform using Python, React, AI/ML-based entity matching, and APIs to provide a unified view of customer relationships, identify existing customers, and surface relevant KYC and relationship information during onboarding, reducing duplicate KYC efforts.",
    fullDescription: "OneView AI addresses fractured customer onboarding by establishing a unified 360° graph of customer relationships. Built using Python, React, and ML-based entity matching algorithms, it identifies existing client relationships across disparate business lines and automatically surfaces verified KYC documents. Implemented audit logging and compliance-focused workflows to maintain traceability and support secure handling of customer and KYC information across the platform.",
    architecturePoints: [
      "Developed an AI-powered customer intelligence platform using Python, React, AI/ML-based entity matching, and APIs to provide a unified view of customer relationships, identify existing customers, and surface relevant KYC and relationship information during onboarding, reducing duplicate KYC efforts.",
      "Implemented audit logging and compliance-focused workflows to maintain traceability and support secure handling of customer and KYC information across the platform."
    ],
    technologies: ["Python", "React", "AI/ML Entity Matching", "FastAPI", "KYC Compliance APIs", "PostgreSQL"],
    featured: true,
    award: "1st Place Winner - Hackathon"
  },
  {
    id: "elluvate",
    title: "No-Code AI Platform for Higher Education | Ellucian Hackathon (ELLUVATE)",
    category: "AI & GenAI",
    subtitle: "Low-code / No-code AI platform simplifying AI adoption in universities",
    shortDescription: "Developed a low-code/no-code AI platform designed to help universities build customized AI solutions without extensive programming expertise. The platform enables users to retrieve relevant student data using a student ID, connect institutional data, select AI models through a drag-and-drop interface, and generate actionable insights and outputs.",
    fullDescription: "ELLUVATE is a low-code/no-code AI platform designed to help universities build customized AI solutions without extensive programming expertise. The platform enables users to retrieve relevant student data using a student ID, connect institutional data, select AI models through a drag-and-drop interface, and generate actionable insights and outputs. The platform aims to simplify AI adoption in higher education by reducing technical complexity, enabling flexible AI experimentation, and supporting use cases such as student analytics, predictive insights, academic advising, and administrative automation.",
    architecturePoints: [
      "Enables users to retrieve relevant student data using student ID and connect institutional data repositories.",
      "Drag-and-drop model selector and pipeline orchestrator for flexible AI experimentation.",
      "Generates actionable insights and outputs for student analytics, predictive retention insights, academic advising, and administrative automation.",
      "Reduces technical complexity to accelerate institutional AI adoption."
    ],
    technologies: ["React", "Python", "FastAPI", "Drag & Drop UI", "LLMs", "Higher Ed Data Connectors"],
    featured: true,
    award: "Ellucian Hackathon"
  },
  {
    id: "smart-blind-stick",
    title: "IoT-based Smart Blind Stick",
    category: "IoT & Healthcare",
    subtitle: "Assistive navigation stick with obstacle detection & ultrasonic sensors",
    shortDescription: "Collaborated in a group built a smart blind stick with obstacle detection and feedback using sensors and Arduino to assist visually impaired individuals in navigation.",
    fullDescription: "Collaborated in a multidisciplinary team to design and build an assistive smart blind stick engineered to enhance independent mobility for visually impaired individuals. Integrated ultrasonic distance sensors, water detection sensors, and tactile buzzer/vibrational feedback driven by an Arduino microcontroller to reliably alert the user of ground obstacles, drop-offs, and hazards in real time.",
    architecturePoints: [
      "Collaborated in a group built a smart blind stick with obstacle detection and feedback using sensors and Arduino to assist visually impaired individuals in navigation.",
      "Calibrated low-latency acoustic reflection routines for high-accuracy obstacle warning distances.",
      "Engineered low-power circuit optimization for extended portable battery operation."
    ],
    technologies: ["Arduino", "Ultrasonic Sensors", "Embedded C/C++", "Haptic Feedback", "Hardware Prototyping"],
    featured: false
  },
  {
    id: "solar-implantable",
    title: "Implantable Sensor System with Solar Harvester for IoT Healthcare",
    category: "IoT & Healthcare",
    subtitle: "Self-powered subcutaneous biomedical telemetry research prototype",
    shortDescription: "Developed a self-powered implantable sensor prototype using subcutaneous solar energy harvesting for continuous wireless health monitoring. Designed the system around low-power sensing and wireless communication concepts for long-term IoT-based healthcare applications.",
    fullDescription: "Developed a self-powered implantable sensor prototype using subcutaneous solar energy harvesting for continuous wireless health monitoring. Designed the system around low-power sensing and wireless communication concepts for long-term IoT-based healthcare applications, eliminating the necessity of surgical battery replacement procedures and enabling perpetual non-invasive biometric telemetry.",
    architecturePoints: [
      "Developed a self-powered implantable sensor prototype using subcutaneous solar energy harvesting for continuous wireless health monitoring.",
      "Designed the system around low-power sensing and wireless communication concepts for long-term IoT-based healthcare applications.",
      "Simulated transcutaneous optical photon penetration through human dermal layers for micro-watt power storage."
    ],
    technologies: ["Subcutaneous Solar Harvesting", "Low-Power IoT", "Wireless Telemetry", "Embedded Sensors", "Biomedical Engineering"],
    featured: false
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot using OpenAI API and Flask",
    category: "AI & GenAI",
    subtitle: "Educational conversational assistant powered by Ollama, Mistral & Flask",
    shortDescription: "Built an AI-powered educational chatbot using Ollama and Mistral with a Flask backend for real-time prompt processing and response generation. Implemented backend logic and API integration with a modular architecture to support scalable conversational interactions.",
    fullDescription: "Built an AI-powered educational chatbot using Ollama and Mistral with a Flask backend for real-time prompt processing and response generation. Implemented backend logic and API integration with a modular architecture to support scalable conversational interactions, streaming tokens, context memory windowing, and clean RESTful endpoints.",
    architecturePoints: [
      "Built an AI-powered educational chatbot using Ollama and Mistral with a Flask backend for real-time prompt processing and response generation.",
      "Implemented backend logic and API integration with a modular architecture to support scalable conversational interactions.",
      "Configured lightweight prompt templates and streaming response handlers."
    ],
    technologies: ["Flask", "Python", "Ollama", "Mistral 7B", "OpenAI API", "RESTful API"],
    featured: false
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis on IMDB Reviews Using TF-IDF and Logistic Regression",
    category: "AI & GenAI",
    subtitle: "NLP classification pipeline with TF-IDF feature extraction & Logistic Regression",
    shortDescription: "Built an NLP sentiment analysis classifier on the IMDB movie reviews dataset using TF-IDF vectorization and Logistic Regression for binary sentiment categorization.",
    fullDescription: "Developed a machine learning pipeline for text classification on the classic IMDB benchmark dataset of 50,000 movie reviews. Preprocessed and tokenized text with stop-word removal and lemmatization, extracted n-gram feature representations with TF-IDF vectorization, and tuned a Logistic Regression classifier achieving robust generalization and fast inference.",
    architecturePoints: [
      "Text preprocessing: HTML tag stripping, regex tokenization, stop-words removal, and lemmatization.",
      "Feature engineering: Scikit-Learn TF-IDF vectorizer with unigram and bigram token weighting.",
      "Model training: Hyperparameter-tuned Logistic Regression with L2 regularization achieving strong validation accuracy."
    ],
    technologies: ["Python", "Scikit-Learn", "TF-IDF", "Logistic Regression", "Pandas", "NLTK"],
    featured: false
  }
];

export const certifications: Certification[] = [
  {
    id: "outskill-genai",
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    issueDate: "2024",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "RAG", "AI Application Architecture"],
    credentialUrl: ""
  },
  {
    id: "ibm-ai-cloud",
    title: "Artificial Intelligence Fundamentals & Cloud Computing Fundamentals",
    issuer: "IBM",
    issueDate: "Verified Credential",
    skills: ["Artificial Intelligence", "Cloud Computing", "IBM Cloud", "AI Concepts"],
    credentialUrl: "https://www.credly.com/badges/98c15c42-3cdb-44ac-808f-191ff8ecc280"
  },
  {
    id: "udemy-rag",
    title: "Basic to Advanced: Retrieval-Augmented Generation (RAG)",
    issuer: "Udemy",
    issueDate: "Verified Certificate",
    skills: ["RAG Architecture", "Vector Databases", "Embeddings", "LangChain", "LLM Integration"],
    credentialUrl: "https://ude.my/UC-d26ac48c-4e1c-4b4d-8985-0ee7a539e3f0"
  },
  {
    id: "udemy-secure-app",
    title: "Secure Application Development",
    issuer: "Udemy",
    issueDate: "Verified Certificate",
    skills: ["Secure Coding", "Application Security", "OWASP", "Vulnerability Prevention", "Network Security"],
    credentialUrl: "http://ude.my/UC-252e876e-f389-4863-92bc-4be8035cc92a"
  }
];

export const leadershipAndAchievements: LeadershipItem[] = [
  {
    id: "hackathon-winner",
    role: "1st Place Winner",
    title: "Organization-Level Technology Hackathon",
    period: "Société Générale",
    summary: "Won 1st place among participating teams with OneView AI – an AI-powered customer intelligence and unified KYC platform.",
    highlights: [
      "Led full-stack prototype development and ML entity matching engine.",
      "Delivered real-time unified KYC relationship discovery architecture.",
      "Recognized for business impact, technical depth, and security compliance."
    ]
  },
  {
    id: "academic-ranker",
    role: "3rd Ranker of the Department (CGPA 9.2)",
    title: "Academic Excellence in B.Tech Computer Science",
    period: "Graduated with Distinction",
    summary: "Graduated among the top 3 rankers of the department with an outstanding 9.2 CGPA.",
    highlights: [
      "Top 3 departmental academic rank with 9.2 cumulative grade point average.",
      "Recognized for exceptional academic performance and technical projects across the curriculum."
    ]
  },
  {
    id: "g-group-core",
    role: "Core Member",
    title: "G Group / LEAP Organizing Committee",
    period: "Société Générale",
    summary: "Organized and coordinated organization-level and team-level events, fostering employee engagement and collaboration.",
    highlights: [
      "Organized and coordinated organization-level and team-level events, including LEAP and team-bonding activities.",
      "Fostered employee engagement, cross-team participation, and technical collaboration across engineering divisions."
    ]
  },
  {
    id: "zigbee-social-lead",
    role: "Social Media Lead",
    title: "ZIGBEE Club for IoT",
    period: "University",
    summary: "Managed technical and creative content to increase club engagement and visibility across IoT domains.",
    highlights: [
      "Managed technical and creative content to increase club engagement and visibility.",
      "Published workshops, technical showcases, and embedded project highlights."
    ]
  },
  {
    id: "zigbee-core-member",
    role: "Core Member",
    title: "ZIGBEE Club for IoT",
    period: "University",
    summary: "Contributed to organizing technical activities, hands-on workshops, and student innovation initiatives.",
    highlights: [
      "Organized hands-on sensor interfacing and microcontrollers workshops.",
      "Mentored peers on IoT design principles, Arduino programming, and hardware integration."
    ]
  }
];

export const educationInfo: Education = {
  degree: "B.Tech in Computer Science (Specialization in IoT)",
  institution: "Jain University",
  location: "Bengaluru, India",
  period: "2019 – 2024",
  score: "9.2 CGPA (3rd Rank of Department)",
  highlights: [
    "3rd Ranker of the Department with 9.2 CGPA distinction",
    "Specialized in IoT, Embedded Systems, Cloud Computing, and AI",
    "Authored research paper on Subcutaneous Solar Energy Harvester for Healthcare IoT"
  ]
};
