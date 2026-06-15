export const site = {
  name: 'Fatema Alasbahi',
  title: 'Computer Science Student',
  tagline:
    'I love to explore everything, learn constantly, and grow through new challenges.',
  location: "St. John's, Newfoundland, Canada",
  email: 'fatimaalasbahi96@gmail.com',
  resumePdf: '/Fatema-Alasbahi-Resume.pdf',
  links: {
    github: 'https://github.com/fatemaalasbahi',
    linkedin: 'https://ca.linkedin.com/in/fatima-alasbahi-858150219',
  },
}

export const about = {
  intro:
    "I'm pursuing a computer science degree at Memorial University. I'm curious about how technology connects with the world around us — from code and data to science and creativity.",
  interests: [
    'Photography',
    'Biology, especially genetics',
    'Artificial intelligence',
    'High-performance computing',
  ],
  hobbies: ['Singing', 'Drawing', 'Embroidery', 'Photography'],
}

export const skills = {
  technical: [
    'Python',
    'Java',
    'C++',
    'Machine Learning',
    'Web Development',
    'PHP',
    '.NET Framework',
    'Apache Spark',
    'High-Performance Computing (HPC)',
    'Data Analysis',
    'Databases',
    'MySQL',
    'Cloud Computing',
    'AWS',
    'Microsoft Azure',
  ],
  languages: ['Arabic (fluent)', 'English (fluent)'],
}

export const education = [
  {
    school: 'Memorial University',
    program: 'Computer Science',
    period: '2025 – Present',
    details: 'Currently studying computer science (in progress).',
  },
  {
    school: 'Amman Arab University',
    program: 'Computer Information Systems',
    period: '2019 – 2021',
    details:
      'Incomplete degree with 75 credit hours completed in computer information systems.',
  },
]

export const certifications = [
  {
    title: 'High Performance Computing Micro-credential',
    org: 'AceNet',
    period: 'Recent',
  },
  {
    title: 'Intro to Machine Learning',
    org: 'NVIDIA',
    period: 'Recent',
  },
  {
    title: 'IBM x MUN watsonx Hackathon',
    org: 'Team SFVS-Hackers',
    period: 'May 2026',
    details:
      'Built an AI-powered offshore equipment escalation agent with IBM watsonx Orchestrate and watsonx.ai. Contributed UI/UX and frontend development.',
  },
]

export const work = [
  {
    role: 'Interpreter',
    company: 'Buckmaster Community Center & Tambolo Festival',
    period: 'Present',
    bullets: [
      "Provide interpretation support for community programs and festival events in St. John's.",
    ],
  },
  {
    role: 'Office Clerk',
    company: 'Cox and Palmer',
    period: 'July 2024 – January 2025',
    bullets: [
      'Supported daily office operations and administrative tasks for seven months.',
      'Helped maintain organized records and assisted staff with client-facing workflows.',
    ],
  },
  {
    role: 'Sales Representative & Marketing Team Member',
    company: 'Newbornlander (Baby Store)',
    period: 'Previous role',
    bullets: [
      'Worked with customers on the sales floor and supported in-store marketing efforts.',
      'Contributed to promotional activities as part of the marketing team.',
    ],
  },
]

export const projects = [
  {
    name: 'Offshore Equipment Escalation Agent',
    description:
      'IBM x Memorial University watsonx Hackathon project with team SFVS-Hackers. An AI safety decision-support agent for offshore oil and gas operations that analyzes equipment logs and telemetry to flag risks, assign severity, and recommend actions using IBM watsonx Orchestrate and watsonx.ai. I contributed UI/UX and frontend development on the Streamlit dashboard.',
    tech: [
      'Python',
      'Streamlit',
      'IBM watsonx.ai',
      'IBM watsonx Orchestrate',
      'Plotly',
      'LLM',
    ],
    github: 'https://github.com/portalzone/sfvs-hackers',
    live: null,
    highlight: true,
  },
  {
    name: 'Cyber Attack Analysis',
    description:
      'Data analysis project from my HPC micro-credential course, focused on exploring cybersecurity attack patterns and trends through Python-based data workflows.',
    tech: ['Python', 'NumPy', 'Matplotlib', 'Data Analysis', 'HPC'],
    github: 'https://github.com/fatemaalasbahi/Cyber_attack_analysis',
    live: null,
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]
