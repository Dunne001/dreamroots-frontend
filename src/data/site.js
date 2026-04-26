/* ─── DreamRoots Kenya — Site Data ─────────────────────────── */

export const SITE = {
  name: 'DreamRoots Kenya',
  tagline: 'Rooted in Empowerment, Growing Your Potential.',
  phone: '+254 759 098 449',
  email: 'info@dreamrootskenya.com',
  address: 'P.O Box 1152-00511, Nairobi, Kenya',
  url: 'https://dreamrootskenya.com',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Overview', path: '/about' },
      { label: 'Board of Directors', path: '/board' },
      { label: 'Management Team', path: '/team' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Education Consultancy', path: '/services/education-consultancy' },
      { label: 'Soft Skills Training', path: '/services/soft-skills-training' },
      { label: 'Training & Capacity Building', path: '/services/training-capacity-building' },
      { label: 'Marketing', path: '/services/marketing' },
      { label: 'Human Resource Management', path: '/services/human-resource-management' },
      { label: 'Research', path: '/services/research' },
      { label: 'ICT', path: '/services/ict' },
      { label: 'Finance', path: '/services/finance' },
    ],
  },
  { label: 'Publications', path: '/publications' },
  { label: 'Partners', path: '/partners' },
  { label: 'Contact', path: '/contact' },
];

/* ─── Board of Directors ────────────────────────────────────── */
export const BOARD = [
  {
    id: 1,
    name: 'Karen Afandi',
    title: 'Chief Executive Officer',
    role: 'Board Member',
    image: 'https://dreamrootskenya.com/team/female.png',
    bio: 'A visionary leader with extensive experience in organizational management and strategic growth, Karen founded DreamRoots Kenya with a passion for empowering communities and institutions across East Africa.',
    expertise: ['Strategic Leadership', 'Organizational Development', 'Community Empowerment'],
  },
  {
    id: 2,
    name: 'Dr. Kennedy Ondara',
    title: 'Director',
    role: 'Board Member',
    image: 'https://dreamrootskenya.com/team/dr.okemwa.jpg',
    bio: 'Dr. Ondara brings decades of multidisciplinary expertise spanning finance, governance, and institutional development, providing DreamRoots with rigorous oversight and strategic direction.',
    expertise: ['Finance & Governance', 'Institutional Development', 'Strategic Advisory'],
  },
  {
    id: 3,
    name: 'Dr. Joyce Nyabuti',
    title: 'Director',
    role: 'Board Member',
    image: 'https://dreamrootskenya.com/team/dr.nyabuti.png',
    bio: 'A distinguished scholar and practitioner in HR and security consulting, Dr. Nyabuti shapes DreamRoots\' commitment to people-centered solutions and ethical governance frameworks.',
    expertise: ['Human Resources', 'Security Consulting', 'Policy & Governance'],
  },
];

/* ─── Management Team ───────────────────────────────────────── */
export const TEAM = [
  {
    id: 1,
    name: 'Karen Afandi',
    title: 'Chief Executive Officer',
    department: 'Executive',
    image: 'https://dreamrootskenya.com/team/female.png',
    bio: 'Leading DreamRoots Kenya with vision and purpose, driving transformative consulting across Kenya and East Africa.',
    expertise: ['Leadership', 'Strategy', 'Empowerment'],
  },
  {
    id: 2,
    name: 'Dr. Ferdinand Mbeche',
    title: 'Education Consulting Lead',
    department: 'Education',
    image: 'https://dreamrootskenya.com/team/dr.mbeche.png',
    bio: 'Specialist in curriculum development, institutional partnerships, and education strategy with extensive experience in Kenyan educational systems.',
    expertise: ['Curriculum Development', 'Institutional Partnerships', 'Teacher Training'],
  },
  {
    id: 3,
    name: 'Dr. Joyce Nyabuti',
    title: 'HR & Security Consulting Lead',
    department: 'Human Resources',
    image: 'https://dreamrootskenya.com/team/dr.nyabuti.png',
    bio: 'Expert practitioner bridging human resource management with security consulting, delivering holistic people and organizational solutions.',
    expertise: ['HR Advisory', 'Security Consulting', 'Organizational Development'],
  },
  {
    id: 4,
    name: 'Prof. A.M. Wanjohi',
    title: 'Research Consulting Lead',
    department: 'Research',
    image: 'https://dreamrootskenya.com/team/tony.png',
    bio: 'Professor Wanjohi leads our research practice with data-driven methodologies, specializing in market research, feasibility studies, and impact assessments.',
    expertise: ['Market Research', 'Data Analysis', 'Impact Assessment'],
  },
  {
    id: 5,
    name: 'James Ongwae',
    title: 'Project Management Consulting Lead',
    department: 'Project Management',
    image: 'https://dreamrootskenya.com/team/james.png',
    bio: 'An accomplished project manager bringing structure and delivery excellence to complex, multi-stakeholder initiatives across diverse sectors.',
    expertise: ['Project Management', 'Stakeholder Engagement', 'Program Design'],
  },
  {
    id: 6,
    name: 'John Mahugu',
    title: 'Technical Consulting Lead',
    department: 'ICT',
    image: 'https://dreamrootskenya.com/team/john.png',
    bio: 'Technology strategist driving digital transformation engagements, IT infrastructure planning, and software development advisory.',
    expertise: ['IT Strategy', 'Digital Transformation', 'Cybersecurity'],
  },
  {
    id: 7,
    name: 'David Omondi',
    title: 'Legal Consulting Lead',
    department: 'Legal',
    image: 'https://dreamrootskenya.com/team/male.png',
    bio: 'Provides expert legal guidance across regulatory compliance, contract management, and institutional legal frameworks for our diverse client base.',
    expertise: ['Regulatory Compliance', 'Contract Management', 'Legal Advisory'],
  },
  {
    id: 8,
    name: 'Brenda Nyabiage Ondara',
    title: 'Finance & Administration Lead',
    department: 'Finance',
    image: 'https://dreamrootskenya.com/team/female.png',
    bio: 'Oversees financial planning, analysis, and administration ensuring fiscal discipline and operational excellence across DreamRoots\' engagements.',
    expertise: ['Financial Planning', 'Administration', 'Risk Management'],
  },
  {
    id: 9,
    name: 'Kenneth Ikunyua',
    title: 'Logistics Consulting Lead',
    department: 'Logistics',
    image: 'https://dreamrootskenya.com/team/male.png',
    bio: 'Supply chain and logistics specialist optimizing operational efficiency for institutions and businesses navigating Kenya\'s dynamic market.',
    expertise: ['Supply Chain', 'Logistics Optimization', 'Operations Management'],
  },
];

/* ─── Services ──────────────────────────────────────────────── */
export const SERVICES = [
  {
    slug: 'education-consultancy',
    title: 'Education Consultancy',
    icon: '◈',
    summary: 'Curriculum development, institutional partnerships, teacher training, and education strategy tailored to Kenya\'s learning landscape.',
    description: `DreamRoots Kenya's Education Consultancy arm provides comprehensive support to educational institutions, government agencies, and NGOs navigating Kenya's evolving CBC curriculum framework. We partner with schools, polytechnics, and universities to build capacity, foster institutional excellence, and align educational outcomes with national and global standards.`,
    offerings: [
      'CBC Curriculum Development & Review',
      'Institutional Accreditation Support',
      'Teacher Training & Professional Development',
      'Education Policy Advisory',
      'School Management Systems',
      'Student Assessment Frameworks',
    ],
  },
  {
    slug: 'soft-skills-training',
    title: 'Soft Skills Training',
    icon: '◇',
    summary: 'Equipping professionals with communication, leadership, and emotional intelligence skills that drive personal and organizational excellence.',
    description: `In today's competitive environment, technical expertise alone is insufficient. Our Soft Skills Training programs are designed to equip individuals and teams with the interpersonal and professional competencies that elevate performance, improve workplace culture, and accelerate career growth.`,
    offerings: [
      'Communication & Presentation Skills',
      'Leadership & Management Development',
      'Emotional Intelligence & Resilience',
      'Conflict Resolution & Negotiation',
      'Time Management & Productivity',
      'Team Dynamics & Collaboration',
    ],
  },
  {
    slug: 'training-capacity-building',
    title: 'Training & Capacity Building',
    icon: '△',
    summary: 'Structured programs that build institutional capacity, strengthen teams, and create lasting organizational capability.',
    description: `Our Training & Capacity Building service delivers structured, outcome-oriented programs designed to strengthen the capabilities of institutions, government bodies, and development organizations. We combine participatory methodologies with practical frameworks to ensure lasting impact.`,
    offerings: [
      'Organizational Capacity Assessments',
      'Custom Training Program Design',
      'Monitoring & Evaluation Frameworks',
      'Institutional Strengthening',
      'Change Management Programs',
      'Workshop & Retreat Facilitation',
    ],
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    icon: '○',
    summary: 'Strategic brand positioning, digital marketing, market entry, and campaign management that drives measurable growth.',
    description: `DreamRoots Kenya's Marketing practice blends creative strategy with data-driven execution to help organizations build compelling brands, penetrate new markets, and achieve sustained growth. We serve both private sector companies and public institutions seeking to strengthen their market presence.`,
    offerings: [
      'Brand Strategy & Positioning',
      'Digital Marketing & Social Media',
      'Market Research & Entry Strategy',
      'Campaign Design & Management',
      'Corporate Communications',
      'Public Relations & Media Relations',
    ],
  },
  {
    slug: 'human-resource-management',
    title: 'Human Resource Management',
    icon: '◉',
    summary: 'End-to-end HR solutions: recruitment, organizational development, HR policy, and workforce transformation.',
    description: `People are every organization's most valuable asset. Our Human Resource Management service delivers end-to-end HR solutions that attract, develop, and retain talent while ensuring compliance with Kenya's labor regulations and international best practices in people management.`,
    offerings: [
      'Talent Acquisition & Recruitment',
      'HR Policy Development',
      'Organizational Design & Restructuring',
      'Performance Management Systems',
      'Employee Relations & Compliance',
      'HR Audits & Advisory',
    ],
  },
  {
    slug: 'research',
    title: 'Research',
    icon: '◎',
    summary: 'Rigorous market research, feasibility studies, data analysis, and impact assessments that inform strategic decisions.',
    description: `Sound decisions require sound evidence. DreamRoots Kenya's Research practice applies rigorous, participatory methodologies to generate actionable intelligence for government agencies, development organizations, and private sector entities operating across Kenya and East Africa.`,
    offerings: [
      'Market Research & Analysis',
      'Feasibility Studies',
      'Baseline & Endline Surveys',
      'Impact Assessment & Evaluation',
      'Policy Research & Analysis',
      'Data Collection & Statistical Analysis',
    ],
  },
  {
    slug: 'ict',
    title: 'ICT',
    icon: '□',
    summary: 'IT strategy, digital transformation, infrastructure planning, software development, and cybersecurity advisory.',
    description: `In Kenya's rapidly digitalizing economy, technology is a critical enabler of growth. Our ICT Consulting practice helps organizations harness technology strategically — from infrastructure planning and system implementation to digital transformation roadmaps and cybersecurity frameworks.`,
    offerings: [
      'IT Strategy & Architecture',
      'Digital Transformation Roadmaps',
      'Software Development Advisory',
      'Cybersecurity Assessment & Planning',
      'ICT Infrastructure Design',
      'Technology Training & Support',
    ],
  },
  {
    slug: 'finance',
    title: 'Finance',
    icon: '◆',
    summary: 'Financial planning, investment advisory, risk management, compliance, and financial analysis for sustainable growth.',
    description: `Financial health is the bedrock of sustainable organizations. DreamRoots Kenya's Finance practice delivers expert advisory across financial planning, investment strategy, risk management, and regulatory compliance — helping clients build resilient financial structures aligned with their strategic objectives.`,
    offerings: [
      'Financial Planning & Analysis',
      'Investment Advisory',
      'Risk Management Frameworks',
      'Financial Compliance & Reporting',
      'Budget Development & Management',
      'Financial Systems Implementation',
    ],
  },
];

/* ─── Core Values ───────────────────────────────────────────── */
export const VALUES = [
  { title: 'Integrity', desc: 'Upholding the highest standards of honesty, transparency, and ethical conduct in every engagement.' },
  { title: 'Excellence', desc: 'Committed to delivering quality solutions and services that consistently exceed expectations.' },
  { title: 'Collaboration', desc: 'Believing in the transformative power of partnerships and teamwork to achieve shared success.' },
  { title: 'Innovation', desc: 'Embracing creativity and forward-thinking approaches to solve complex, evolving challenges.' },
  { title: 'Inclusivity', desc: 'Valuing diversity and ensuring our work benefits all segments of society, especially the underserved.' },
  { title: 'Sustainability', desc: 'Prioritizing long-term impact and responsible practices that protect communities and the environment.' },
  { title: 'Empowerment', desc: 'Building capacities and unlocking potential so clients and communities own their development journey.' },
];

/* ─── Hero Slides ───────────────────────────────────────────── */
export const HERO_SLIDES = [
  {
    id: 1,
    heading: 'Empowering Institutions\nfor a Smarter Future',
    sub: 'Tailored training and innovative solutions designed to elevate your organization\'s performance.',
    cta: 'Book a Consultation',
    image: 'https://dreamrootskenya.com/wp-content/uploads/2025/05/slide1.jpg',
  },
  {
    id: 2,
    heading: 'Driving Excellence\nThrough Research',
    sub: 'Comprehensive research services that inform strategic decisions and foster sustainable growth.',
    cta: 'Our Research Services',
    image: 'https://dreamrootskenya.com/wp-content/uploads/2025/05/slide2.jpg',
  },
  {
    id: 3,
    heading: 'Innovative ICT\nSolutions',
    sub: 'Harness cutting-edge technology to streamline operations and enhance digital transformation.',
    cta: 'Explore ICT Services',
    image: 'https://dreamrootskenya.com/wp-content/uploads/2025/05/slide3.jpg',
  },
  {
    id: 4,
    heading: 'Consulting with\na Local Touch',
    sub: 'We combine practical experience and research to deliver solutions tailored to Kenya\'s unique needs.',
    cta: 'Learn More',
    image: 'https://dreamrootskenya.com/wp-content/uploads/2025/05/nairobi.jpg',
  },
];

/* ─── Stats ─────────────────────────────────────────────────── */
export const STATS = [
  { value: '8+', label: 'Service Verticals' },
  { value: '9', label: 'Expert Consultants' },
  { value: '3', label: 'Board Directors' },
  { value: 'KE', label: 'Nairobi-Based' },
];

