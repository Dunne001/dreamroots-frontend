import { useParams, Link } from 'react-router-dom'
import Footer from '../components/Footer'

const servicesData = {
  'education-consultancy': {
    title: 'Education Consultancy',
    icon: '🎓',
    color: '#1B4F72',
    intro: 'DreamRoots Kenya provides comprehensive education consultancy services to help students, educators, and institutions achieve excellence.',
    sections: [
      { title: 'College Admissions Guidance', content: 'Personalized college admissions consultancy to help you navigate the complex application process. Services include building a strong application profile, coaching on personal statements, assistance with letters of recommendation, mock interview sessions, guidance on SAT/ACT/TOEFL, and scholarship consultation.' },
      { title: 'Curriculum Development & Lesson Planning', content: 'Supporting schools and educators in developing effective curricula and lesson plans. Includes comprehensive curriculum review, integration of modern teaching methodologies, customization for diverse student needs, and alignment with national and international standards.' },
      { title: 'Educational Program Evaluation', content: 'Helping schools assess their educational programs and recommend improvements. Covers detailed analysis of student outcomes, recommendations for program enhancements, professional development for faculty, and support in implementing new initiatives.' },
      { title: 'ICT Applications in Education', content: 'Transforming learning through technology. Includes LMS implementation, school management systems, smart classroom technology, digital content creation, online assessment platforms, and virtual classroom setup.' },
      { title: 'Student Performance & Testing Consultation', content: 'Strategies and tools to improve student performance through effective test preparation, performance analytics, comprehensive assessment design, and grading rubrics aligned with learning objectives.' },
      { title: 'Career Planning & Counseling', content: 'Helping students make informed educational and career choices through exploration of pathways, skills assessment, support for transitions, and personalized counseling sessions.' },
      { title: 'Financial Aid & Scholarship Consulting', content: 'Assisting students and families by identifying relevant scholarships and grants, providing step-by-step application assistance, and advising on financial aid eligibility.' },
      { title: 'School & Institutional Consulting', content: 'Strategic consulting for schools including strategic planning, school environment improvement, policy formulation, and administrative process optimization.' },
    ]
  },
  'ict': {
  title: 'ICT Solutions',
  icon: '💻',
  color: '#117A65',
  intro: 'In today\'s digital-first world, technology is the backbone of every successful organization. DreamRoots Kenya delivers cutting-edge ICT solutions that drive real business results.',
  sections: [
    { title: 'AI & Machine Learning Integration', content: 'Harness the power of Artificial Intelligence to automate processes, predict trends, and make smarter decisions. We help businesses in Kenya integrate AI tools including chatbots, predictive analytics, and automated reporting systems that save time and reduce costs significantly.' },
    { title: 'Cloud Computing & Migration', content: 'Move your business to the cloud seamlessly. We handle migration from legacy systems to modern cloud platforms including AWS, Google Cloud, and Microsoft Azure. Cloud adoption reduces IT costs by up to 40% while improving accessibility, security, and scalability for your entire team.' },
    { title: 'Mobile App Development', content: 'Kenya has one of the highest mobile penetration rates in Africa. We build powerful Android and iOS applications that connect you with your customers where they are — on their phones. From M-Pesa integrations to customer portals, we deliver apps that drive real business value.' },
    { title: 'Data Analytics & Business Intelligence', content: 'Turn your raw data into actionable insights. Our data analytics services help you understand your customers, track performance, and identify growth opportunities. We implement dashboards and reporting tools that give you real-time visibility into what matters most.' },
    { title: 'Cybersecurity & Data Protection', content: 'With cybercrime on the rise across East Africa, protecting your digital assets is critical. We conduct security audits, implement firewalls, train your staff, and ensure compliance with data protection regulations including Kenya\'s Data Protection Act 2019.' },
    { title: 'ERP & Business Systems Implementation', content: 'Streamline your operations with integrated Enterprise Resource Planning systems. We implement and customize ERP solutions for accounting, inventory, HR, and customer management — giving you one unified system that eliminates manual errors and duplication.' },
    { title: 'IT Infrastructure & Network Setup', content: 'From office network setup to server configuration and internet connectivity optimization, we build reliable IT infrastructure that keeps your business running 24/7. We serve organizations of all sizes across Nairobi and Kenya.' },
    { title: 'ICT Training & Digital Skills', content: 'Empower your team with practical digital skills. Our ICT training programs cover Microsoft Office, Google Workspace, cybersecurity awareness, and specialized software tools. We offer both in-person and online training tailored to your team\'s needs and schedule.' },
  ]
},
  'finance': {
    title: 'Finance',
    icon: '📊',
    color: '#1A5276',
    intro: 'Achieve financial stability and sustainable growth through expert guidance and personalized solutions from our finance specialists.',
    sections: [
      { title: 'Financial Planning & Analysis', content: 'Developing comprehensive financial plans through in-depth analysis including cash flow assessments, profitability evaluations, and scenario planning to provide a clear picture of your financial health.' },
      { title: 'Investment & Portfolio Management', content: 'Creating diversified investment strategies that reflect your risk tolerance and financial objectives. Regular portfolio reviews and performance reporting keep you informed and confident.' },
      { title: 'Corporate Finance & Capital Structuring', content: 'Advising on mergers and acquisitions, capital raising through equity or debt, and restructuring. We provide valuation services, deal structuring advice, and negotiation support.' },
      { title: 'Risk Management & Compliance', content: 'Designing and implementing risk management frameworks covering credit risk, market risk, operational risk, and compliance risk. We help develop policies to ensure regulatory adherence.' },
      { title: 'Budgeting, Tax Planning & Financial Reporting', content: 'Developing realistic budgets, optimizing your tax position, and preparing detailed financial reports that provide transparency and actionable insights.' },
      { title: 'Cash Flow Management & Forecasting', content: 'Conducting thorough cash flow analyses and developing strategies that optimize working capital, improve collection processes, and manage payables efficiently.' },
      { title: 'International Advisory', content: 'Specialized accounting and advisory for clients operating across borders including overseas VAT compliance, transfer pricing, payroll administration, and foreign exchange risk management.' },
    ]
  },
  'human-resource-management': {
    title: 'Human Resource Management',
    icon: '👥',
    color: '#154360',
    intro: 'Your people are your most valuable asset. Our HR consultancy provides end-to-end solutions to build a motivated, productive, and engaged workforce.',
    sections: [
      { title: 'Talent Acquisition & Recruitment', content: 'Leveraging proven methodologies and extensive networks to identify, attract, and secure qualified candidates. From campus placements and lateral hiring to executive search, we manage the entire recruitment lifecycle.' },
      { title: 'Employee Engagement & Development', content: 'Designing and implementing employee engagement programs that foster commitment, collaboration, and job satisfaction. Our solutions include tailored training workshops, leadership development, and career counseling.' },
      { title: 'HR Policy, Compliance & Risk Management', content: 'Developing compliant HR policies and procedures, conducting audits to identify compliance gaps, and implementing risk mitigation strategies including workplace investigations and grievance handling.' },
      { title: 'Payroll, Benefits & Compensation Management', content: 'Comprehensive payroll outsourcing and advisory services ensuring timely and compliant salary processing, tax deductions, and benefits administration.' },
      { title: 'HR Technology & Outsourcing', content: 'Consultancy on HRIS implementation and optimization. We guide you in selecting technology solutions that automate administrative tasks and provide actionable workforce analytics.' },
      { title: 'Organizational Development & Change Management', content: 'Supporting your organization through strategic change initiatives including restructuring, culture transformation, and workforce planning with frameworks that minimize disruption.' },
    ]
  },
  'marketing': {
    title: 'Marketing',
    icon: '📢',
    color: '#0E6655',
    intro: 'Impactful marketing is the engine that drives business growth. Our consultants partner with you to unlock your brand\'s full potential.',
    sections: [
      { title: 'Marketing Strategy & Planning', content: 'Conducting comprehensive market research, competitor analysis, and audience profiling to craft strategies that set you apart. We help define your unique value proposition and prioritize channels for highest ROI.' },
      { title: 'Digital Marketing & Social Media', content: 'End-to-end digital marketing solutions including SEO, PPC advertising, email marketing, and content creation. Our experts manage your social media profiles and foster authentic audience interactions.' },
      { title: 'Branding & Creative Services', content: 'Developing compelling brand identities, messaging frameworks, and visual assets. We design memorable logos, marketing collateral, and cohesive brand guidelines for consistency across all touchpoints.' },
      { title: 'Content Development & Campaign Management', content: 'Creating high-quality content from blog posts and articles to videos and infographics. Our campaign management ensures seamless execution from planning to post-campaign analysis.' },
      { title: 'Market Research & Analytics', content: 'Providing in-depth market research through surveys, focus groups, and digital analytics tools. Our reporting dashboards give real-time visibility into campaign performance and market trends.' },
    ]
  },
 'research': {
  title: 'Research & Consultancy',
  icon: '🔬',
  color: '#1B4F72',
  intro: 'Evidence-based decisions lead to better outcomes. DreamRoots Kenya provides rigorous, professional research services across multiple sectors to inform strategy, policy, and investment.',
  sections: [
    { title: '📋 Market Research & Feasibility Studies', content: 'Before launching a product, entering a new market, or making a major investment, you need reliable data. We conduct comprehensive market research including competitor analysis, consumer surveys, and feasibility assessments that give you the confidence to make informed decisions with minimal risk.' },
    { title: '🏥 Health Sector Research', content: 'We specialize in health systems research, disease burden studies, health facility assessments, community health surveys, and patient satisfaction studies. Our team works with hospitals, clinics, NGOs, county health departments, and international health organizations across Kenya. We help health institutions improve service delivery through evidence-based recommendations and data-driven strategies.' },
    { title: '📝 Proposal & Grant Writing', content: 'Securing funding is highly competitive. Our expert proposal writers craft compelling, technically sound proposals for government tenders, NGO grants, bilateral funding, EU grants, World Bank projects, and research grants. We have a strong track record of successful proposals across education, health, agriculture, and community development sectors in Kenya and East Africa.' },
    { title: '📊 Policy Research & Analysis', content: 'We conduct in-depth policy research to inform government agencies, NGOs, and private sector organizations. Our policy briefs, white papers, situation analyses, and advocacy documents are grounded in solid evidence and presented in clear, accessible language for decision-makers at all levels.' },
    { title: '📈 Monitoring, Evaluation & Learning (MEL)', content: 'We design and implement robust M&E frameworks that track program progress, measure impact, and generate learning for continuous improvement. Our MEL services include baseline studies, mid-term evaluations, end-line assessments, value for money analysis, and real-time monitoring dashboards.' },
    { title: '👥 Social & Community Research', content: 'Understanding communities is key to effective interventions. We conduct social research including focus group discussions, key informant interviews, household surveys, participatory rural appraisals, and community needs assessments. Our findings help organizations design programs that genuinely address community needs and deliver lasting impact.' },
    { title: '🎓 Academic Research Support', content: 'We support students, researchers, and institutions with research design, questionnaire development, data collection, statistical analysis using SPSS and STATA, and professional report writing. Whether you are pursuing a Masters, PhD, or institutional research, our experienced team provides professional guidance at every stage of your research journey.' },
    { title: '🌾 Agricultural & Environmental Research', content: 'We conduct research in food security, agricultural value chain analysis, environmental impact assessments, natural resource management, and climate change adaptation strategies. Our agricultural research supports farmers, agribusinesses, cooperatives, and development organizations in improving productivity and sustainability.' },
    { title: '💼 Business Research & Due Diligence', content: 'Before entering partnerships, acquisitions, or new business ventures, organizations need thorough due diligence. We conduct background checks, financial analysis, market positioning studies, and risk assessments that protect your business interests and ensure informed decision-making.' },
    { title: '🏛️ Governance & Institutional Research', content: 'We assess organizational governance structures, board effectiveness, institutional policies, and compliance frameworks. Our governance research helps organizations identify weaknesses, strengthen accountability mechanisms, and align with best practice standards for improved performance and stakeholder trust.' },
  ]
},

  'soft-skills-training': {
    title: 'Soft Skills Training',
    icon: '🌟',
    color: '#117A65',
    intro: 'Success requires more than technical know-how. Our Soft Skills Training Program equips individuals and organizations with essential human skills.',
    sections: [
      { title: 'Effective Communication', content: 'Developing clarity in verbal and written expression, enhancing active listening, and mastering the art of feedback. Covers non-verbal communication, body language, email writing, presentations, and public speaking.' },
      { title: 'Emotional Intelligence (EQ)', content: 'Developing self-awareness, stress management, empathy, and conflict resolution skills. Particularly powerful for leaders, customer-facing staff, and anyone building healthier relationships.' },
      { title: 'Leadership & Teamwork', content: 'Introducing leadership styles, trust-building, motivation techniques, and team dynamics. Practical simulations for delegation, conflict resolution, and joint decision-making.' },
      { title: 'Critical Thinking & Problem Solving', content: 'Teaching logical evaluation, root cause identification, and well-reasoned decision making. Uses real-life case studies and frameworks for brainstorming and implementing effective responses.' },
      { title: 'Time Management & Productivity', content: 'Techniques for setting priorities, avoiding procrastination, and organizing tasks. Covers time blocking, digital planners, burnout prevention, and work-life balance.' },
      { title: 'Customer Service Excellence', content: 'Principles of customer satisfaction including active listening, empathy, complaint resolution, and building rapport. Includes practical simulations of customer interactions.' },
      { title: 'Workplace Etiquette & Professionalism', content: 'Professional behavior, conflict handling, cultural sensitivity, workplace ethics, and personal branding. Especially beneficial for new hires, interns, and young professionals.' },
    ]
  },
  'training-capacity-building': {
    title: 'Training & Capacity Building',
    icon: '🚀',
    color: '#1A5276',
    intro: 'Sustainable growth begins with empowering individuals, teams, and communities through targeted training and capacity building.',
    sections: [
      { title: 'Comprehensive Training Programs', content: 'Customized workshops, seminars, and hands-on sessions addressing leadership development, strategic thinking, project management, communication skills, and technical expertise.' },
      { title: 'Leadership Development', content: 'Cultivating emerging and established leaders focusing on vision, emotional intelligence, decision-making, and inclusive management. Also emphasizes community leadership for local changemakers.' },
      { title: 'Community Capacity Building', content: 'Strengthening communities through vocational training, skills development, and resources that empower community members. Integrates practical skills with leadership and social development.' },
      { title: 'Organizational Capacity Strengthening', content: 'Tailored consulting addressing governance, strategic planning, financial management, monitoring and evaluation, and technology adoption to help organizations scale their impact.' },
      { title: 'Specialized Workshops & Innovative Methods', content: 'Incorporating LEGO Serious Play, design thinking, and experiential learning to maximize engagement. Interactive, inclusive workshops that foster collaboration and deep reflection.' },
      { title: 'Monitoring, Evaluation & Continuous Improvement', content: 'Tools and frameworks for monitoring and evaluating training impact. Measuring progress, identifying gaps, and refining strategies for continuous growth and effectiveness.' },
    ]
  }
}

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const service = servicesData[slug]

  if (!service) {
    return (
      <div style={{textAlign: 'center', padding: '5rem 1rem'}}>
        <h2 style={{color: '#1B4F72', fontSize: '2rem'}}>Service not found</h2>
        <Link to="/services" style={{color: '#2E86C1'}}>← Back to Services</Link>
      </div>
    )
  }

  return (
    <div>
      <div style={{
        background: `linear-gradient(135deg, ${service.color} 0%, #2E86C1 100%)`,
        padding: '5rem 1rem', textAlign: 'center'
      }}>
        <div style={{fontSize: '4rem', marginBottom: '1rem'}}>{service.icon}</div>
        <p style={{color: 'rgba(255,255,255,0.8)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          Our Services
        </p>
        <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
          {service.title}
        </h1>
        <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
          {service.intro}
        </p>
      </div>

      <div style={{maxWidth: '900px', margin: '0 auto', padding: '5rem 1rem'}}>
        {service.sections.map((section, i) => (
          <div key={i} style={{
            marginBottom: '2.5rem', padding: '2rem',
            background: 'white', borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
            borderLeft: `4px solid ${service.color}`
          }}>
            <h3 style={{color: '#1B4F72', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
              {i + 1}. {section.title}
            </h3>
            <p style={{color: '#555', lineHeight: '1.8', fontSize: '1rem'}}>
              {section.content}
            </p>
          </div>
        ))}

        <div style={{
          background: 'linear-gradient(135deg, #1B4F72, #2E86C1)',
          borderRadius: '16px', padding: '3rem',
          textAlign: 'center', marginTop: '3rem'
        }}>
          <h3 style={{color: 'white', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            Interested in {service.title}?
          </h3>
          <p style={{color: '#AED6F1', marginBottom: '2rem', fontSize: '1.05rem'}}>
            Contact us today to discuss how we can help your organization.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/booking" style={{
              background: 'white', color: '#1B4F72',
              textDecoration: 'none', padding: '0.9rem 2rem',
              borderRadius: '25px', fontWeight: 'bold'
            }}>
              Book a Consultation
            </Link>
            <Link to="/contact" style={{
              background: 'transparent', color: 'white',
              textDecoration: 'none', padding: '0.9rem 2rem',
              borderRadius: '25px', fontWeight: 'bold',
              border: '2px solid white'
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServiceDetailPage