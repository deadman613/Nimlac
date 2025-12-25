export const courses = [
  {
    id: 1,
    title: "Diploma in Machine Learning & Cloud Computing",
    level: "diploma",
    category: "machine-learning",
    duration: "12 Months",
    mode: "Hybrid Learning",
    rating: 4.7,
    students: 3120,
    price: "₹1,10,000",
    originalPrice: "₹1,20,000",
    discount: "8% off",
    monthlyPrice: "₹9,167",
    monthlyPayments: 12,
    image: "https://via.placeholder.com/600x300?text=Node.js+API+JS+Course", // Updated image URL
    description: "Ideal for 12th-pass students and college undergrads serious about a tech career. End-to-end ML and Cloud – Python, TensorFlow/PyTorch, AWS/Azure services, data handling, model deployment.",
    fullDescription: "This comprehensive 12-month diploma program is ideal for 12th-pass students and college undergrads aiming for a strong tech career. Go from zero to building and deploying real ML/Cloud solutions. Master Python, TensorFlow/PyTorch, AWS/Azure services, data handling, and model deployment through hands-on projects. Career outcomes include ML Engineer, Data Scientist, or Cloud Developer roles with a strong portfolio.",
    instructor: {
      name: "Manjeet Singh", // Updated instructor name
      title: "Instructor", // Updated instructor title
      bio: "Experienced instructor with a passion for teaching modern web technologies and cloud computing.", // Updated bio
      image: "/nimlacpic/shagun.png", // Updated image path (placeholder)
      credentials: ["Industry Experience", "Teaching Expertise"] // Updated credentials
    },
    topics: ["Python", "TensorFlow/PyTorch", "Machine Learning", "Deep Learning", "AWS/Azure", "Data Handling", "Model Deployment"],
    whatYouWillLearn: [
      "Master Python programming for ML",
      "Build models using TensorFlow and PyTorch",
      "Deep learning fundamentals and applications",
      "Cloud services on AWS and Azure",
      "Data preprocessing and handling large datasets",
      "Model deployment and scaling",
      "End-to-end ML pipelines",
      "Real-world projects and portfolio building",
      "Cloud infrastructure for ML",
      "Best practices in ML and cloud integration"
    ],
    modulesByMonth: [
      {
        month: 1,
        title: "Python & Programming Foundations",
        topics: ["Python Basics & Syntax", "Data Structures (Lists, Dicts, Sets)", "Object-Oriented Programming", "Python for Data Science Libraries"],
        hours: 60
      },
      {
        month: 2,
        title: "Mathematics for ML & Data Analysis",
        topics: ["Linear Algebra Fundamentals", "Statistics & Probability", "Data Manipulation with Pandas", "Data Visualization (Matplotlib, Seaborn)"],
        hours: 55
      },
      {
        month: 3,
        title: "Machine Learning Fundamentals",
        topics: ["Supervised Learning Algorithms", "Unsupervised Learning & Clustering", "Model Evaluation Metrics", "Feature Engineering Techniques"],
        hours: 60
      },
      {
        month: 4,
        title: "Deep Learning with TensorFlow",
        topics: ["Neural Networks Architecture", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Model Optimization & Hyperparameter Tuning"],
        hours: 58
      },
      {
        month: 5,
        title: "Advanced Deep Learning with PyTorch",
        topics: ["Transfer Learning Strategies", "Generative Adversarial Networks (GANs)", "Transformer Architecture", "Natural Language Processing Basics"],
        hours: 62
      },
      {
        month: 6,
        title: "Cloud Computing Fundamentals",
        topics: ["AWS Core Services (EC2, S3, Lambda)", "Azure Essentials", "Cloud Storage Solutions", "Virtual Machines & Networking"],
        hours: 55
      },
      {
        month: 7,
        title: "ML on Cloud Platforms",
        topics: ["AWS SageMaker for ML", "Azure Machine Learning Studio", "Cloud-based Model Training", "Serverless ML Deployment"],
        hours: 60
      },
      {
        month: 8,
        title: "Data Engineering & Big Data",
        topics: ["ETL Pipeline Development", "Apache Spark for Big Data", "Data Warehousing Concepts", "Real-time Stream Processing"],
        hours: 58
      },
      {
        month: 9,
        title: "MLOps & Production Deployment",
        topics: ["CI/CD Pipelines for ML", "Model Monitoring & Logging", "Docker & Kubernetes for ML", "REST API Development"],
        hours: 65
      },
      {
        month: 10,
        title: "Advanced Topics & Specialization",
        topics: ["Computer Vision Applications", "Advanced NLP & Transformers", "Reinforcement Learning Basics", "Time Series Forecasting"],
        hours: 60
      },
      {
        month: 11,
        title: "Capstone Project - Part 1",
        topics: ["Project Planning & Scope Definition", "Data Collection & Preprocessing", "Model Development & Training", "Cloud Architecture Design"],
        hours: 70
      },
      {
        month: 12,
        title: "Capstone Project - Part 2 & Career Prep",
        topics: ["Production Deployment", "Documentation & Best Practices", "Project Presentation Skills", "Interview Preparation & Resume Building"],
        hours: 75
      }
    ],
    requirements: ["12th pass or equivalent", "Basic mathematics knowledge", "Interest in technology and programming", "Laptop with 8GB+ RAM", "10-12 hours per week commitment"],
    targetAudience: ["12th-pass students starting tech career", "College undergrads", "Beginners aiming for ML/Cloud roles", "Anyone passionate about AI and cloud"],
    includes: ["180+ hours of video content", "50+ hands-on projects", "Access to cloud credits", "Lifetime access to materials", "Recognized diploma certificate", "Job assistance and placement support", "Portfolio development"],
    reviews: [
      { name: "Arjun Mehta", rating: 5, comment: "Perfect for beginners! Built and deployed my first ML model on cloud.", date: "2025-11-20" }
    ]
  },
  {
    id: 2,
    title: "Advanced Machine Learning & Cloud Computing",
    level: "advanced",
    category: "machine-learning",
    duration: "6 Months",
    mode: "Hybrid Learning",
    rating: 4.9,
    students: 310,
    price: "₹89,999",
    originalPrice: "₹98,000",
    discount: "8% off",
    monthlyPrice: "₹15,000",
    monthlyPayments: 6,
    image: "https://ml-ops.org/img/mlops-phasen.jpg  ",
    description: "For college students (upper years) and early professionals. Advanced ML (deep learning, NLP, MLOps) and enterprise cloud architectures.",
    fullDescription: "This intensive 6-month advanced certification is for upper-year college students and early professionals seeking deep expertise. Master advanced ML including deep learning, NLP, MLOps, and enterprise cloud architectures. Achieve readiness for mid-level roles like AI Engineer or ML Researcher with specialized projects.",
    instructor: {
      name: "Miss. Shagun",
      title: "Lead Instructor, Machine Learning & Cloud",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/nimlacpic/shagun.png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Advanced ML", "Deep Learning", "NLP", "MLOps", "Enterprise Cloud", "Model Optimization"],
    whatYouWillLearn: [
      "Advanced deep learning techniques",
      "Natural Language Processing",
      "MLOps pipelines and tools",
      "Enterprise cloud architectures",
      "Scalable ML systems",
      "Model fine-tuning and optimization",
      "Production-grade deployments",
      "Advanced NLP applications",
      "Cloud-native ML solutions"
    ],
    modulesByMonth: [
      {
        month: 1,
        title: "Advanced Deep Learning Architectures",
        topics: ["Advanced Neural Network Designs", "Attention Mechanisms", "Vision Transformers", "Advanced CNN Architectures"],
        hours: 65
      },
      {
        month: 2,
        title: "Natural Language Processing & Transformers",
        topics: ["BERT, GPT & Transformer Models", "Text Generation & Summarization", "Named Entity Recognition", "Sentiment Analysis at Scale"],
        hours: 68
      },
      {
        month: 3,
        title: "MLOps & Production Systems",
        topics: ["MLOps Best Practices", "CI/CD for Machine Learning", "Model Versioning & Registry", "Monitoring & Observability"],
        hours: 62
      },
      {
        month: 4,
        title: "Enterprise Cloud Architecture",
        topics: ["Multi-cloud Strategies", "Kubernetes for ML at Scale", "Cloud Cost Optimization", "Security & Compliance"],
        hours: 60
      },
      {
        month: 5,
        title: "Advanced Topics & Optimization",
        topics: ["Model Compression & Quantization", "Edge ML Deployment", "AutoML & Neural Architecture Search", "Federated Learning"],
        hours: 58
      },
      {
        month: 6,
        title: "Capstone & Portfolio",
        topics: ["Enterprise-level ML Solution", "System Design & Scalability", "Production Deployment", "Documentation & Presentation"],
        hours: 75
      }
    ],
    requirements: ["Basic ML and programming knowledge", "Familiarity with Python", "Understanding of cloud basics", "12+ hours per week commitment"],
    targetAudience: ["Upper-year college students", "Early professionals", "Those aiming for mid-level AI/ML roles", "Specialized project seekers"],
    includes: ["120+ hours of advanced content", "30+ specialized projects", "GPU and cloud resources", "Lifetime access", "Advanced certificate", "Mentoring and networking"],
    reviews: [
      { name: "Sanya Gupta", rating: 5, comment: "Intensive and rewarding! Landed a mid-level AI role right after.", date: "2025-11-15" }
    ]
  },
  {
    id: 3,
    title: "Machine Learning for Professionals",
    level: "certificate",
    category: "machine-learning",
    duration: "4 Months",
    mode: "Hybrid Learning",
    rating: 4.7,
    students: 550,
    price: "₹59,999",
    originalPrice: "₹65,000",
    discount: "8% off",
    monthlyPrice: "₹15,000",
    monthlyPayments: 4,
    image: "https://towardsdatascience.com/wp-content/uploads/2020/11/1YJfwS_21mUb9njFIKc9XlQ.png  ",
    description: "Working professionals from any field pivoting to AI/ML. Foundational to intermediate ML – data analytics, model building, hands-on labs.",
    fullDescription: "This 4-month program is tailored for working professionals from any background to transition into AI/ML. No prior coding required. Learn foundational to intermediate ML, data analytics, and model building with practical labs. Build a project portfolio to kickstart your tech career in AI/ML roles.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Machine Learning",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/nimlacpic/shagun.png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["ML Foundations", "Data Analytics", "Model Building", "Python Basics", "Hands-on Labs"],
    whatYouWillLearn: [
      "ML concepts from scratch",
      "Data analysis and preprocessing",
      "Building and evaluating models",
      "Python for ML tasks",
      "Real-world applications",
      "Project-based learning",
      "Portfolio development",
      "Career transition strategies"
    ],
    modulesByMonth: [
      {
        month: 1,
        title: "Introduction to ML & Python",
        topics: ["Machine Learning Overview", "Python Programming Essentials", "NumPy & Pandas Basics", "Data Visualization Fundamentals"],
        hours: 50
      },
      {
        month: 2,
        title: "Data Analytics & Preprocessing",
        topics: ["Exploratory Data Analysis", "Data Cleaning Techniques", "Feature Selection", "Statistical Analysis"],
        hours: 48
      },
      {
        month: 3,
        title: "Machine Learning Models",
        topics: ["Regression & Classification", "Decision Trees & Random Forests", "Model Evaluation Metrics", "Cross-Validation Techniques"],
        hours: 52
      },
      {
        month: 4,
        title: "Projects & Career Preparation",
        topics: ["End-to-End ML Projects", "Portfolio Development", "Industry Best Practices", "Career Transition Strategies"],
        hours: 55
      }
    ],
    requirements: ["No prior coding experience", "Professional background", "Interest in AI/ML", "8-10 hours per week"],
    targetAudience: ["Working professionals pivoting to tech", "Career switchers to AI/ML", "Non-tech professionals"],
    includes: ["80+ hours of content", "20+ hands-on labs", "Project portfolio", "Certificate", "Career transition support"],
    reviews: [
      { name: "Ravi Sharma", rating: 4.8, comment: "Smooth transition from non-tech to ML role. Great for busy professionals!", date: "2025-11-10" }
    ]
  },
  {
    id: 4,
    title: "Cloud Computing Professional",
    level: "certificate",
    category: "cloud-computing",
    duration: "4 Months",
    mode: "Hybrid Learning",
    rating: 4.8,
    students: 480,
    price: "₹49,999",
    originalPrice: "₹54,000",
    discount: "8% off",
    monthlyPrice: "₹12,500",
    monthlyPayments: 4,
    image: "https://i.redd.it/6xbhetbaztwf1.png  ",
    description: "IT and non-IT professionals adding cloud expertise. Core cloud concepts, AWS/Azure/GCP services, DevOps, real deployments.",
    fullDescription: "This 4-month professional program helps IT and non-IT professionals gain cloud expertise. Master core concepts, AWS/Azure/GCP services, DevOps fundamentals, and real deployments. Finish with a portfolio of cloud projects, ready for Cloud Engineer or DevOps roles.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Cloud Computing",
      bio: "PhD in AI with 15+ years in cloud and DevOps",
      image: "/nimlacpic/shagun.png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Cloud Concepts", "AWS/Azure/GCP", "DevOps", "Deployments", "Security"],
    whatYouWillLearn: [
      "Core cloud computing principles",
      "Major services on AWS, Azure, GCP",
      "DevOps tools and practices",
      "Infrastructure as Code",
      "Real cloud deployments",
      "Security and networking",
      "Cost optimization",
      "Portfolio building"
    ],
    modulesByMonth: [
      {
        month: 1,
        title: "Cloud Fundamentals",
        topics: ["Cloud Computing Basics", "AWS Core Services", "Azure Fundamentals", "GCP Introduction"],
        hours: 48
      },
      {
        month: 2,
        title: "Advanced Cloud Services",
        topics: ["Compute Services (EC2, VMs)", "Storage Solutions", "Database Services", "Networking & Security"],
        hours: 50
      },
      {
        month: 3,
        title: "DevOps & Automation",
        topics: ["CI/CD Pipelines", "Infrastructure as Code (Terraform)", "Containerization (Docker)", "Orchestration (Kubernetes)"],
        hours: 52
      },
      {
        month: 4,
        title: "Real-World Projects & Deployment",
        topics: ["Production Deployments", "Monitoring & Logging", "Cost Optimization", "Capstone Cloud Project"],
        hours: 55
      }
    ],
    requirements: ["Basic IT knowledge helpful", "Interest in cloud technologies", "8-10 hours per week"],
    targetAudience: ["IT professionals upskilling", "Non-IT switching to cloud", "Aspiring Cloud/DevOps engineers"],
    includes: ["80+ hours of training", "20+ deployment projects", "Cloud credits", "Certificate", "Portfolio support", "Job readiness"],
    reviews: [
      { name: "Neha Patel", rating: 4.9, comment: "Excellent cloud course! Deployed real apps and got a Cloud Engineer job.", date: "2025-11-18" }
    ]
  }
];

export function getCourseById(id) {
  return courses.find(course => course.id === parseInt(id));
}